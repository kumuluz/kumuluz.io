---
title:  "KumuluzEE 2.1.0 released"
date:   2017-03-21
author: tfaga
categories: [KumuluzEE]
tags: [KumuluzEE, Java EE, Microservices]
---

We're finally here. Announcing the availability of KumuluzEE version 2.1.0.

This version aligns the versions of the various EE components with the latest ones and contains several bug fixes, a handy BOM project for easier dependency inclusions (so you don't need to fiddle with component versions) and project profiles for easier inclusion of the most popular combination of components with initial support for the [microprofile](https://microprofile.io) specification.

<!--more-->

We're also releasing two new components included out of the box with the same flexibility of choosing from various implementations as you can now with our EE standard components.

* Framework wide configuration management which enables easier, flexible and dynamic configuration of your microservices as well as from now on KumuluzEE itself. It initially bundles support for file and environment variables configuration source. The component allows you to have multiple configuration sources from which it can retrieve parameters. The order of which the sources are tried is determined by their priority. The configuration sources are completely pluggable and more will be added soon (etcd, ...) as part of the KumuluzEE Cloud group of components and extensions

* KumuluzEE advanced logging framework for easier and flexible log management of a microservice and its functionality. It contains an easier way to manage your basic as well as more complex logging scenarios with pluggable support for any logging frameworks. The implementations will be released separately as part of the [KumuluzEE Logs](https://github.com/kumuluz/kumuluzee-logs) project. It currently includes the log4j2 implementation with more coming soon.

The new components will nicely complement the Java EE ecosystem with features that were missing and are needed in a microservice world. And as with the whole spirit of KumuluzEE, they are all optional if you don't want to use them.

Another important addition to this version is the inclusion of built-in dynamic datasource configuration, creation and configuration. This is the first part of KumuluzEE that will use the new configuration management component described above, which will allow easy and flexible configuration of datasources. Native support for 3rd party datasource implementations will be added at a later time, but currently you can simply choose to not use the built-in one and add your own. However we believe that the built-in datasource implementation is one of the best ones out there ([光 HikariCP](https://github.com/brettwooldridge/HikariCP)) so we recommend using it.

#### Features

- Added the main BOM (bill of materials) to more easily manage and start using KumuluzEE
- Added support for profiles which include a set of preset components for the most popular and commonly used components and specifications
- Added support for framework wide configuration mechanism with the file and environment variable sources included together with CDI bindings for easier access to config values
- Added support for dynamic datasource creating and registration using the now standard configuration mechanism also added in this release
- Added support for the KumuluzEE advanced logging framework with pluggable implementations

#### Enhancements

- Updated various components to their latest version (Jetty, weld, eclipselink, mojarra, jersey, hibernate and jackson)
- Added internal support for dynamically adding filters
- Added a default filter for the `X-Powered-By` header


#### Bugs

- Added support for additional configuration parameters for fine tuning the underlying server
- Various small bug fixes and enhancements

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee/releases/tag/v2.1.0).
