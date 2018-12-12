---
title:  "Running KumuluzEE microservices on Kubernetes (Part 2)"
date:   2017-12-14
author: zvoneg
categories: [KumuluzEE, Kubernetes]
tags: [KumuluzEE, KumuluzEE Health, Microprofile 1.2, Kubernetes]
---

Implementing cloud-native applications by following microservice architecture brings quite a few challenges. Because of the distributed nature, microservices have to be able to deal with unexpected failures caused by node crashes, deadlocks, connectivity issues etc. To build truly resilient systems, failures have to be tackled with different mechanisms such as circuit breakers, retries/timeouts and health checks, at the same time in order to cover all the aspects of the failures.

<!--more-->

In this blog we focus on the health checks of the microservices and explain how to implement microservice using KumuluzEE framework together with KumuluzEE Health extension to expose the health status. We show how Kubernetes Deployments should be configured to allow Kubernetes to monitor the health status of the containers and initiate the self-healing process (initiate restart). In the final part of the blog we also describe how to define Horizontal Pod Autoscaler (HPA) to automatically scale KumuluzEE microservice when load exceeds the limits.

## Providing health status of the microservice
KumuluzEE provides fully Kubernetes compliant extension named KumuluzEE Health that provides an easy, consistent and unified way of performing health checking and exposing health information. Enabling health checks on KumuluzEE microservice is achieved by including maven dependency:

```xml
<dependency>
    <groupId>com.kumuluz.ee.health</groupId>
    <artifactId>kumuluzee-health</artifactId>
    <version>${kumuluzee-health.version}</version>
</dependency>
```
kumuluzee-health requires CDI as a prerequisite to work. Dependency will automatically include ***/health*** endpoint providing the health status of the microservice. Before running microservice with **kumuluzee-health** dependency included, we have to define configuration for health checks that should be used to check the status of the microservice. To see the list of built-in health checks go visit [KumuluzEE Health](https://github.com/kumuluz/kumuluzee-health).

In our demonstration we define health checks for both microservices, **customers** and **orders**. We enable **DataSourceHealthCheck** and **DiskSpaceHealthCheck** with the following configuration (in config.yaml):

```yaml
kumuluzee:
  health:
    checks:
      data-source-health-check:
        connection-url: jdbc:postgresql://postgres-customers:5432/customer
        username: dbuser
        password: postgres
      disk-space-health-check:
        threshold: 100000000
```

When **/health** endpoint is called, the microservice will invoke data-source-health-check to get the status of the database connectivity and disk-space-health-check the get the status of the disk usage. If both checks return status OK then the overall health of the microservice is considered to be OK.

If we initiate a health check request to *http://192.168.29.246:32583/health* the response is:

```json
{
  "outcome" : "UP",
  "checks" : [ {
    "name" : "OrderServiceHealthCheck",
    "state" : "UP"
  }, {
    "name" : "DiskSpaceHealthCheck",
    "state" : "UP"
  }, {
    "name" : "DataSourceHealthCheck",
    "state" : "UP"
  } ]
}
```

In addition to built-in health check providers it is also possible to implement custom health checks.

## Updating Kubernetes Deployments
The main purpose of exposing the health status of KumuluzEE microservices is to allow Kubernetes to monitor the health status of the container in which microservice is running to detect unexpected failures. Kubernetes provides a build-in Liveness probe which is used to detect when a container should be restarted. It should be expected, especially for the applications running for long periods of time, to eventually transition to broken status and can only be recovered by the restart.

Liveness probe for the container is enabled by adding the following configuration to the container specification inside the deployment configuration:

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 20
  periodSeconds: 5
```

The above configuration specifies that Kubernetes can check the status of the container by sending HTTP GET request to the **/health** endpoint on container port 8080 every 5 seconds. The configuration also defines that Kubernetes should wait 20s for container to start before sending the first health check request.

To demonstrate how Kubernetes responds to the NKO status from the health endpoint of the microservice we intentionally infect the health of the **order** microservice by sending request to */management/healthy* endpoint setting the health status to false.

Before we infect the service, lets check the pod status of order microservice using command ```kubectl get pods -n kumuluzee-blog```. The command produces the following output:

```sh
NAME                                           READY     STATUS    RESTARTS   AGE
order-deployment-6bddc44584-kt4lh              1/1       Running   0          35m
```

We can see that since the start there were no restarts of the container, i.e. the health check was always successful. Now lets infect the microservice by sending the following request:

```sh
curl -X POST -d "false" -H "Content-Type: application/json" http://192.168.29.246:32583/v1/management/healthy
```

If we check the health status manually we get the following response:

```json
{
  "outcome" : "DOWN",
  "checks" : [ {
    "name" : "OrderServiceHealthCheck",
    "state" : "DOWN"
  }, {
    "name" : "DiskSpaceHealthCheck",
    "state" : "UP"
  }, {
    "name" : "DataSourceHealthCheck",
    "state" : "UP"
  } ]
}
```

By checking the output of the ````kubectl get pods -n kumuluzee-blog```` we can see that Kubernetes performed a restart of the pod. Once pod is restarted the health check is set back to OK as the infection is "destroyed" by the restart.

```sh
NAME                                           READY     STATUS    RESTARTS   AGE
order-deployment-6bddc44584-kt4lh              1/1       Running   1          1h
```

## Auto scaling KumuluzEE microservices
We showed how to provide health status of the microservice using KumuluzEE Health extension and how to configure Kubernetes to monitor the health of the microservice by defining the Liveness probe for the container. If we would only deploy one instance of the microservice we would have a problem because we would experience a down time due to no alternative. To overcome this we deploy multiple replicas of the pod and also configure a Horizontal Pod Autoscaler (HPA) to avoid the overload in case of pod failure.

Before we create the HPA for our deployments we have to define CPU resource limits for each container. We do so by adding the following configuration to the Deployment yaml:

```yaml
resources:
  limits:
    cpu: 1
```

Now we can create a HPA using the following command:

```sh 
kubectl autoscale deploy order-deployment -n kumuluzee-blog --cpu-percent=50 --min=2 --max=4
```

With this we specify that pod cannot use more than one unit of the CPU.

To check the result of the command we perform ````kubectl get hpa -n kumuluzee-blog````:

```sh 
NAME               REFERENCE                     TARGETS           MINPODS   MAXPODS   REPLICAS   AGE
order-deployment   Deployment/order-deployment   <unknown> / 50%   2         4         0          11s
```

The configuration says Kubernetes should always run at least two replicas of the order-deployment and should not scale to more than four replicas. When HPA is created Kubernetes immediately starts another replica to match the HPA conditions. The configuration of HPA also says order-deployment should be scaled when average CPU usage of the pods exceeds the 50%. If we load the microservice by sending couple of requests to the **/load** endpoint of the customers microservice, the HPA should start scaling the orders microservice.

```sh
curl -X POST -d "42" -H "Content-Type: application/json" http://192.168.29.246:32600/v1/load
```   

If we check the status of HPA, we now see that the CPU usage is exceeding the targets:

```sh
NAME               REFERENCE                     TARGETS     MINPODS   MAXPODS   REPLICAS   AGE
order-deployment   Deployment/order-deployment   65% / 50%   1         4         1          28m
```

and if the target is exceeded for some period of time the Kubernetes starts creating new replica:

```sh
NAME               REFERENCE                     TARGETS     MINPODS   MAXPODS   REPLICAS   AGE
order-deployment   Deployment/order-deployment   99% / 50%   1         4         2          29m
```
 
## Conclusions
We have demonstrated how easy it is to implement health checks for KumuluzEE microservices using the KumuluzEE Health extension. We also showed how to configure Kubernetes Liveness probe to monitor the health of the KumuluzEE microservice. Finally, we showed how to define HPA for auto-scaling of the KumuluzEE microservice.
 
Source code of the sample used in this blog is available at [KumuluzEE on Kubernetes - v2.0.0](https://github.com/zvonegit/kumuluzee-kubernetes/releases/tag/v2.0.0).

In the final part of the blog we will explain how to use KumuluzEE framework to expose metrics and how to configure Prometheus and Grafana for the monitoring of the KumuluzEE microservices.
