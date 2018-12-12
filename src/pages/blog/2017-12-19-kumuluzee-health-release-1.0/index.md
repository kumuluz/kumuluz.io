---
title:  "KumuluzEE Health 1.0 released"
date:   2017-12-19
author: skrjanec
categories: [KumuluzEE, Health]
tags: [KumuluzEE Health, Microprofile-Health]
---

We're happy to announce the initial version of the KumuluzEE Health extension v1.0.0 for the KumuluzEE framework.

<!--more-->

When developing your microservices you will want to include an endpoint which shows the status of the microservice. This can be easily achieved by including the KumuluzEE Health extension, which exposes such an endpoint in an easy to use, consistent and unified way. This release is fully compliant with the MicroProfile Service Health Checks specification 1.0. KumuluzEE Health enables you to implement custom health checks and also includes a variety of out-of-the-box health checks, which you should take a look at:

- DataSourceHealthCheck
- DiskSpaceHealthCheck
- ElasticSearchHealthCheck
- EtcdHealthCheck
- HttpHealthCheck
- MongoHealthCheck
- RabbitHealthCheck
- RedisHealthCheck

#### Features

- Out-of-the-box support for a variety of health checks
- Simple to use and register custom health checks
- Configurable endpoint to expose your microservice status

More details at [KumuluzEE Health](https://github.com/kumuluz/kumuluzee-health/blob/master/README.md).

Also check out the
[KumuluzEE Health sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-health).