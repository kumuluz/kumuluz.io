---
title:  "Eclipse MicroProfile 1.2 with KumuluzEE"
date:   2017-11-09
author: jmezna
categories: [KumuluzEE, Architecture]
tags: [KumuluzEE, Java EE, Microservices, Cloud-native, Eclipse MicroProfile]
image: https://images.unsplash.com/photo-1514207147125-8e6c07bbe5ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bbdce3ba9f72095ab0bae8e386bead9e&auto=format&fit=crop&w=2102&q=80
---

KumuluzEE is fully compliant with the Eclipse MicroProfile 1.2 specification. It provides the implementations of the
following MicroProfile APIs:
- Config 1.1
- Health Check 1.0
- Metrics 1.0
- Fault Tolerance 1.0
- JWT Authentication 1.0

You can use our [online pom generator](https://ee.kumuluz.com/generator/) to quicly generate *pom* files with selected
profiles or individual Maven dependencies.

<!--more-->

All the KumuluzEE components and extensions, which are mandatory for the compliance with the MicroProfile 1.2
specification, are grouped in a profile that can be included as a single Maven dependency:

```xml
<dependency>
    <groupId>com.kumuluz.ee</groupId>
    <artifactId>kumuluzee-microProfile-1.2</artifactId>
</dependency>
```

A detailed sample project, demonstrating the implementation of a microservice with KumuluzEE MicroProfile 1.2, is
available on [GitHub](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-microProfile-1.2).
