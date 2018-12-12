---
title:  "Using KumuluzEE Discovery"
date:   2017-09-15
author: urbim
categories: [KumuluzEE, Discovery]
tags: [KumuluzEE Discovery, etcd, Consul]
---

KumuluzEE Discovery is a service discovery extension for the KumuluzEE microservice framework. It provides support for service registration, service discovery and client side load balancing.

KumuluzEE Discovery provides full support for microservices packed as Docker containers. It also provides full support for executing microservices in clusters and cloud-native platforms with full support for Kubernetes.

KumuluzEE Discovery has been designed to support modularity with pluggable service discovery frameworks. Currently, etcd and Consul are supported. In the future, other discovery frameworks will be supported too (contributions are welcome).

## Usage

You can enable etcd-based service discovery by adding the following dependency:
```xml
<dependency>
    <groupId>com.kumuluz.ee.discovery</groupId>
    <artifactId>kumuluzee-discovery-etcd</artifactId>
    <version>${kumuluzee-discovery.version}</version>
</dependency>
```

You can enable Consul-based service discovery by adding the following dependency:
```xml
<dependency>
    <groupId>com.kumuluz.ee.discovery</groupId>
    <artifactId>kumuluzee-discovery-consul</artifactId>
    <version>${kumuluzee-discovery.version}</version>
</dependency>
```

<!--more-->

### Configuring etcd

Etcd can be configured with the common KumuluzEE configuration framework. Configuration properties can be defined with
the environment variables or in the configuration file. For more details see the
[KumuluzEE configuration wiki page](https://github.com/kumuluz/kumuluzee/wiki/Configuration).

To enable service registration using etcd, an odd number of etcd hosts should be specified with the configuration key
`kumuluzee.config.etcd.hosts` in the following format
`'http://192.168.99.100:2379,http://192.168.99.101:2379,http://192.168.99.102:2379'`.

Example of YAML configuration:

```yaml
kumuluzee:
  name: my-service
  env:
    name: test
  version: 1.2.3
  server:
    http:
      port: 8081
    base-url: http://localhost:8081
  discovery:
    etcd:
      hosts: http://127.0.0.1:2379
    ttl: 30
    ping-interval: 5
```

### Configuring Consul

Consul is also configured with the common KumuluzEE configuration framework, similarly as etcd.

By default, Consul connects to the local agent (`http://localhost:8500`) without additional configuration. You can
specify the URL of the Consul agent with configuration key `kumuluzee.discovery.consul.agent`. Note that Consul is
responsible for assigning the IP addresses to the registered services and will assign them the IP on which the agent is
accessible. Specifying an agent IP address is therefore useful in specific situations, for example when you are running
multiple services on single Docker host and want them to connect to the single Consul agent, running on the same Docker
host.

If your service is accessible over https, you must specify that with configuration key
`kumuluzee.discovery.consul.protocol: https`. Otherwise, http protocol is used.

Consul implementation reregisters services in case of errors and sometimes unused services in critical state remain in
Consul. To avoid this, Consul implementation uses Consul parameter `DeregisterCriticalServiceAfter` when registering
services. To read more about this parameter, see Consul documentation: https://www.consul.io/api/agent/check.html#deregistercriticalserviceafter.
To alter the value of this parameter, set configuration key `kumuluzee.config.consul.deregister-critical-service-after-s`
appropriately. Default value is 60 (1 min).

### Service registration

Automatic service registration is enabled with the annotation `@RegisterService` on the REST application class (that extends
`javax.ws.rs.core.Application`). The annotation takes six parameters:

- value: service name. Default value is fully classified class name. Service name can be overridden with configuration key `kumuluzee.name`.
- ttl: time to live of a registration key in the store. Default value is 30 seconds. TTL can be overridden with configuration key `kumuluzee.discovery.ttl`.
- pingInterval: an interval in which service updates registration key value in the store. Default value is 20. Ping interval can be overridden with configuration key `kumuluzee.discovery.ping-interval`.
- environment: environment in which service is registered. Default value is "dev". Environment can be overridden with configuration key `kumuluzee.env.name`.
- version: version of service to be registered. Default value is "1.0.0". Version can be overridden with configuration key `kumuluzee.version`.
- singleton: if true ensures, that only one instance of service with the same name, version and environment is
registered. Default value is false.

Examples of service registration:
```java
@RegisterService(value = "my-service", ttl = 20, pingInterval = 15, environment = "test", version = "1.0.0", singleton = false)
@ApplicationPath("/v1")
public class RestApplication extends Application {
}
```

```java
@RegisterService
@ApplicationPath("/v1")
public class RestApplication extends Application {
}
```

To register a service with etcd, service URL has to be provided with the configuration key `kumuluzee.server.base-url` in
the following format:`http://localhost:8080`. Consul implementation uses agent's IP address for the URL of registered
services, so this key is not used.

KumuluzEE Discovery supports registration of multiple different versions of a service in different environments. The
environment can be set with the configuration key `kumuluzee.env.name`, the default value is `dev`. Service version can
also be set with the configuration key `kumuluzee.version`, the default value is `1.0.0`. Configuration keys will
override annotation values.

### Service discovery

Service discovery is implemented by injecting fields with the annotation `@DiscoverService`, which takes four parameters:

- value: name of the service we want to inject.
- environment: service environment, e.g. prod, dev, test. If value is not provided, environment is set to the value
defined with the configuration key `kumuluzee.env.name`. If the configuration key is not present, value is set to `dev`.
- version: service version or NPM version range. Default value is "*", which resolves to the highest deployed
version.
- accessType: defines, which URL gets injected. Supported values are `AccessType.GATEWAY` and `AccessType.DIRECT`.
Default is `AccessType.GATEWAY`.

Injection is supported for the following field types:

- URL
- String
- WebTarget

Example of service discovery in JAX-RS bean:
```java
@RequestScoped
@Path("/")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TestResource {

    @Inject
    @DiscoverService(value = "my-service", environment = "test", version = "1.0.0")
    private URL url;

    @Inject
    @DiscoverService(value = "my-service", environment = "test", version = "1.0.0")
    private String urlString;

    @Inject
    @DiscoverService(value = "my-service", environment = "test", version = "1.0.0")
    private WebTarget webTarget;

}
```

More details can be found at [KumuluzEE Discovery](https://github.com/kumuluz/kumuluzee-discovery/blob/master/README.md) and by taking a look at [KumuluzEE Discovery etcd](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-etcd) and [KumuluzEE Discovery Consul](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-consul) sample projects.
