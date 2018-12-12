---
title:  "Tutorial: Cloud-native Java EE Microservices with KumuluzEE"
date:   2017-09-28
author: jmezna
categories: [KumuluzEE, Architecture]
tags: [KumuluzEE, Java EE, Microservices, Cloud-native, Tutorial]
---

We published a tutorial on developing a cloud-native Java EE microservice application, using KumuluzEE microservice
framework and KumuluzEE extensions.

In this tutorial we develop a sample application for managing customers and their orders. The application consists of
two microservices; one for managing customer entities and one for managing order entities. We demonstrate important
cloud-native concepts and functionalities that are essential in microservice architecture, such as dynamic configuration
(with config server), service discovery, fault tolerance, centralized logging, performance metrics collection, and
security mechanisms.

<!--more-->

We use the following KumuluzEE extensions:
- KumuluzEE REST for implementation of filtering, sorting and pagination on REST resources,
- KumuluzEE Config for dynamic reconfiguration of microservices with the use of configuration servers,
- KumuluzEE Discovery for service registration and service discovery,
- KumuluzEE Fault Tolerance for improving the resilience of microservices,
- KumuluzEE Logs for advanced centralized logging,
- KumuluzEE Metrics for collection of performance metrics,
- KumuluzEE Security for securing developed REST endpoints.

First, we create a Maven project that contains both of our microservices. We then implement both microservices and use
the KumuluzEE extensions to implement configuration, service discovery, fault tolerance, logging, metrics and security
mechanisms.

Complete tutorial with the source code can be found in the [GitHub repository](https://github.com/kumuluz/kumuluzee-samples/tree/master/tutorial-microservice-config-discovery-faulttolerance-logs-metrics-security).
