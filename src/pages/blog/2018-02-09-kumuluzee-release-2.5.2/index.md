---
title:  "KumuluzEE 2.5.2 released"
date:   2018-02-09
author: tfaga
categories: [Product, Announcement]
tags: [KumuluzEE, Java EE, Microservices]
---

We are announcing the availability of KumuluzEE version 2.5.2.
This version brings important features and fixes to various bugs.


<!--more-->

Some of the features are:

- Improved support for MicroProfile 1.2.
- Improvements to the configuration framework, which from now on uses configurable priorities for the configuration sources instead of fixed ones. This feature allows for more dynamic approach to the configuration and also aligns configuration framework to the MicroProfile Config specification.
- Ability to have the configuration file outside the classpath has been added, which provides more freedom when configuring KumuluzEE with configuration files and enables Uber JAR deployments to read the configuration from file outside the actual JAR.
- Configuration parameter to disable the `Server` and `X-Powered-By` HTTP headers has been added, which is recommended by security standards.

This release also includes fixes to various bugs and updates to the library dependencies. Note that to run a JSF or JSP project, the following dependency must now be included:

```xml
<dependency>
    <groupId>com.kumuluz.ee</groupId>
    <artifactId>kumuluzee-el-uel</artifactId>
</dependency>
```

Several extensions that enhance the development and usage of microservices have been released, including kumuluzee-health, kumuluzee-jwt-auth, kumuluzee-openapi, kumuluzee-swagger, kumuluzee-metrics and kumuluzee-fault-tolerance. They enable fast and easy integration of various cloud-native features and further coalign the KumuluzEE framework with the MicroProfile specification.

#### Features:

- Improved support for MicroProfile 1.2
- Configuration sources now use configurable priorities
- Added method for registering servlets with init order
- Added the ability to have the configuration file outside the classpath.
- Added configuration parameter to disable `Server` and `X-Powered-By` HTTP headers

#### Enhancements:

- Lowered the default HTTP connector idle timeout to a reasonable level
- Updated component/library dependencies to their latest patch versions

#### Bugs:

- Added support for retrieving properties at root level when using `@ConfigBundle` annotation
- Unified `getMapKeys` and `getListSize` method behavior across configuration sources
- Updated `ContainerIncludeJarPattern` to work with paths that include /lib/
- Apps now create their own temporary directory, since system temporary files can be periodically cleared
- Fixed JUL loading in the EeClassLoader before the logging system is initialized causing JUL to not be redirected to the target logging implementation

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee/releases/tag/v2.5.2).
