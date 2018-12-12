---
title:  "Using KumuluzEE Reactive Vert.x"
date:   2017-12-17
author: zanozbot
categories: [KumuluzEE, Reactive]
tags: [KumuluzEE Reactive, Vert.x]
---

KumuluzEE Reactive is an extension for developing reactive microservices for the KumuluzEE microservice framework.

KumuluzEE Reactive provides integration with Vert.x distributed event bus, integration with Vert.x service discovery, easy-to-use annotations for developing microservices that listen to or produce messages on the Vert.x distributed event bus and a service discovery bridge for importing and exporting services from Vert.x Service Discovery to KumuluzEE Discovery (for Consul and etcd).

<!--more-->

Currently, Vert.x is supported. In the future, other reactive frameworks will be supported too (contributions are welcome).

## Usage

You can enable KumuluzEE Reactive Vert.x by adding the following dependency:
```xml
<dependency>
	<groupId>com.kumuluz.ee.reactive</groupId>
	<artifactId>kumuluzee-reactive-vertx</artifactId>
	<version>${kumuluzee-reactive-vertx.version}</version>
</dependency>
```

To enable the service discovery bridge either a dependency for `kumuluzee-discovery-etcd` or `kumuluzee-discovery-consul` has to be added.
```xml
<dependency>
    <groupId>com.kumuluz.ee.discovery</groupId>
    <artifactId>kumuluzee-discovery-etcd</artifactId>
    <version>${kumuluzee-discovery.version}</version>
</dependency>
```

or 

```xml
<dependency>
    <groupId>com.kumuluz.ee.discovery</groupId>
    <artifactId>kumuluzee-discovery-consul</artifactId>
    <version>${kumuluzee-discovery.version}</version>
</dependency>
```
 
Read more at [KumuluzEE Discovery](https://github.com/kumuluz/kumuluzee-discovery) on how to use KumuluzEE Discovery extension.

## Vert.x configuration

Vert.x is configured with the common KumuluzEE configuration framework. Configuration properties can be defined with the environment variables or with the configuration files. Alternatively, they can also be stored in a configuration server, such as etcd or Consul (for which the KumuluzEE Config extension is required). For more details see the [KumuluzEE configuration wiki page](https://github.com/kumuluz/kumuluzee/wiki/Configuration) and [KumuluzEE Config](https://github.com/kumuluz/kumuluzee-config).

Example of YAML configuration:
```yaml
kumuluzee:
  name: vertx-bridge
  version: 1.0.0
  env:
    name: dev
  server:
    base-url: http://localhost:8080
    http:
      port: 8080
  discovery:
    etcd:
      hosts: http://localhost:2379
    ttl: 20
    ping-interval: 15
  reactive:
    vertx:
      clustered: true
      cluster-host: localhost
      cluster-port: 0
      discovery:
        env:
          name: dev
        ttl: 20
        ping-interval: 15
```

### @ReactiveEventPublisher annotation

For injecting the Vert.x event bus message producer, KumuluzEE Reactive provides a `@ReactiveEventPublisher` annotation which will inject a message producer. A use of `@Inject` annotation is also needed. The annotation accepts one parameter, which is by default set to `publisher`.

Example of using the following annotation:
```java
@Inject
@ReactiveEventPublisher(address = "event-name")
MessageProducer<Object> messageProducer;
```

### @ReactiveEventListener annotation

For listening to Vert.x event bus, KumuluzEE Reactive provides the `@ReactiveEventListener` annotation. Use of `@Inject` annotation is also needed. The annotation accepts one parameter which is by default `listener`. The annotation itself can be used on top of any method as long as it has one parameter of type `Message<Object>`.  We can also reply to a message as shown in the example below.

Example of using the following annotation:
```java
@ApplicationScoped
public class VertxEventListener {

    @ReactiveEventListener(address = "event-name")
    public void onMessage(Message<Object> event) {    
        if(event.body() != null) {
            event.reply("Message received.");
        }   
    }

}
```

## Service Discovery Bridge

KumuluzEE Reactive extension provides a service discovery bridge for importing and exporting services from Vert.x Service Discovery to KumuluzEE Discovery (for Consul and etcd). To enable the bridge either a dependency for `kumuluzee-discovery-etcd` or `kumuluzee-discovery-consul` has to be added.

### Registering a service

When registering a service with Vert.x Service Discovery you should add additional metadata to a `Record`, like:
- `ttl`: time to live of a registration key in the store.
- `version`: version of the service.
- `env.name`: environment in which service is registered.
- `ping-interval`: an interval in which service updates registration key value in the store.

Metadata inside a `Record` has the highest priority and overrides configuration in the configuration file.

Example of adding additional metadata to a `Record`:
```java
Record record = HttpEndpoint.createRecord("some-rest-api", "localhost", 8080, "/");
record.setMetadata(new JsonObject().put("ttl", 20).put("ping-interval", 15)
        .put("env", "vertx").put("version", "1.1.0"));
```

### Requesting a service

To request for a service within a Vert.x instance, send a JSON, describing a service you want to retrieve, to a `vertx.discovery.request` address on the eventbus.

Example of requesting a service `customers-service` with version `1.0.0` located in `dev`
environment:
```java
JsonObject service = new JsonObject().put("name", "customer-service")
    .put("version", "1.0.0")
    .put("env", "dev");
 
vertx.eventBus().send("vertx.discovery.request", service, ar -> {
    if (ar.succeeded()) {
        JsonObject reply = (JsonObject) ar.result().body();
        // ...
    } else {
        // Handle error
    }
});
```

To learn more head over to [KumuluzEE Reactive](https://github.com/kumuluz/kumuluzee-reactive) and explore sample projects at [KumuluzEE Reactive Vert.x Samples](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-reactive-vertx).
