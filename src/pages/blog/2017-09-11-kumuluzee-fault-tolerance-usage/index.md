---
title:  "Using KumuluzEE Fault Tolerance"
date:   2017-09-11
author: lukas
categories: [KumuluzEE, Fault Tolerance]
tags: [KumuluzEE Fault Tolerance, Circuit Breaker, Retry, Bulkhead, Timeout, Fallback, Microprofile Fault Tolerance]
---

KumuluzEE Fault Tolerance is a fault tolerance extension for the KumuluzEE microservice framework. It provides support for fault tolerance and latency tolerance with circuit breaker, bulkhead, timeout, retry and fallback patterns. KumuluzEE Fault Tolerance supports basic fault tolerance configuration using annotations. Additionally, configuring via KumuluzEE Config is supported. Dependency calls are wrapped and executed using Hystrix, a latency and fault tolerance library.

## Usage

You can enable the KumuluzEE Fault Tolerance with Hystrix by adding the following dependency:
```xml
<dependency>
    <groupId>com.kumuluz.ee.fault.tolerance</groupId>
    <artifactId>kumuluzee-fault-tolerance-hystrix</artifactId>
    <version>${kumuluzee-fault-tolerance.version}</version>
</dependency>
```

<!--more-->

### Wrap method with fault tolerance patterns

In order to wrap method with fault tolerance patterns, you have to add annotations for desired patterns. If an annotation is added on class, all methods will be executed with the pattern. `@Bulkhead` annotation enables bulkhead pattern for methods within a class. It will limit the number of concurrent executions. `@CircuitBreaker` annotation must be added to the method for enabling circuit breaker pattern. At this time all patterns are supported only if circuit breaker pattern is used. `@Timeout` and `@Asynchronous` patterns enable timeout pattern and asynchronous execution in a separated thread.

You can use `@GroupKey` and `@CommandKey` annotations to change default command and group keys. If not provided, method name will be used as command key and class name will be used as group key.
 
Fallback pattern can be provided using `@Fallback` annotation and name of the fallback method which is located within the same CDI. The fallback method must have same parameters types and return type as target method.

Example of CDI with methods executed with fault tolerance patterns:
```java
@RequestScoped
@Bulkhead
@GroupKey("orders")
public class OrdersBean {

    @CircuitBreaker
    @Fallback(fallbackMethod = "findOrdersByCustomerIdFallback")
    @CommandKey("http-find-order")
    @Timeout
    @Asynchronous
    public List<Order> findOrdersByCustomerId(String customerId) {
        // HTTP calll
    }

    public List<Order> findOrdersByCustomerIdFallback(String zavarovanecId) {

        log.info("Fallback called for findOrdersByCustomerId.");

        Order order = new Order();
        order.setCustomerId(zavarovanecId);
        order.setAddress("N/A");
        order.setPaymentType("N/A");
        order.setId("N/A");

        List<Order> orders = new ArrayList<>();
        orders.add(order);

        return orders;
    }
}
```

**NOTE**: Class with annotated methods for fault tolerance execution must be a CDI bean or else the fault tolerance interceptor will not be able to intercept execution and apply the desired fault tolerance patterns.

### Using KumuluzEE Config

KumuluzEE Fault Tolerance can also be configured using KumuluzEE Config. Additionally, configuration server can be added to your microservices for centralized configuration. Configuration for patterns can be command-specific, group-specific or global. If you are using configuration server, you can also watch for changes in configurations and apply them to your commands and groups.

Example of fault tolerance configuration using `config.yml` file:
```yaml
fault-tolerance:
  config:
    watch-enabled: true
    watch-properties: timeout.value,circuit-breaker.failure-ratio,bulkhead.value
  orders:
    bulkhead:
      value: 5
    http-find-order:
      timeout:
        value: 1000ms
      circuit-breaker:
        request-threshold: 10
        failure-ratio: 0.3
        delay: 3000ms
        metrics:
          rolling-window:
            size: 5s
            buckets: 5
```

More details can be found at [KumuluzEE Fault Tolerance](https://github.com/kumuluz/kumuluzee-fault-tolerance/blob/master/README.md) and by taking a look at [KumuluzEE Fault Tolerance sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-fault-tolerance-hystrix).
