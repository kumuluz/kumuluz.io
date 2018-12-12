---
title:  "KumuluzEE 2.3.0 released"
date:   2017-08-03
author: tfaga
categories: [KumuluzEE]
tags: [KumuluzEE, Java EE, Microservices]
---

We're announcing the availability of KumuluzEE version 2.3.0.

This version includes two (2) new major features described below, further improves on the new configuration framework introduced in version 2.1.0, improves compatibility of components with the EE specification, aligns with the upstream versions of all the EE components with the latest ones and contains several bug fixes and quality of life enhancements.

<!--more-->

We're please to announce two new major additions to KumuluzEE, which both help bring the framework closer to more supported Java EE components as well as lay the groundwork for enabling extensibility to support more cloud-native features:

* KumuluzEE extensions, which allow dynamic loading of additional functionality not present in the Java EE specification (like service discovery, remote configuration, ...) and a few other quality of life improvements for developers as well as bringing the ability to add native features for cloud centric apps and services. The extensions function the same way as the EE components in the framework, which means they are completely optional and modular and can be enabled by simply adding the appropriate dependency to your project. Once added, KumuluzEE will automatically find it and set it up. The extensions will be configured exclusively through the new configuration framework as we are moving the entirety of the configuration to it. Together with version 2.3.0 we're also launching a number of extensions that demonstrate and use this new feature. You can find the most resent list on the [README](https://github.com/kumuluz/kumuluzee) page.

* Full JTA support integrated with the other EE components available in KumuluzEE. We're shipping with Narayana as the initial implementation of JTA, with the option of adding more down the line. JTA follows the footsteps of other components for being modular, which means you can add or remove it with any combination of other components, and KumuluzEE will automatically configure it correctly. The standout feature with JTA is the ability to use container managed transaction in your CDI beans, both with JPA and plain JDBC connections. To accompany JTA we're also bringing support for built-in dynamic XADataSource configuration, creation and configuration with full and automatic support for the JTA global transaction lifecycle. You can configure it using the configuration framework, the same way you can configure normal datasources.

We're also hard at work on developing multiple extensions that enhance the development and usage of microservices, with the goal of aligning them and conforming to the new microprofile specifications (config, health, ...) that are in development right now.

#### Features

- Added the new JTA component implemented by Narayana with support for CDI container transactions and JPA
- Added support for custom initialised XADataSources with the config framework when using JTA
- Added KumuluzEE extensions with full support for dynamic modular loading and dependency specification to both EE components and extensions.

#### Enhancements

- Updated all the Java EE component implementations to their latest versions as of this release
- Enabled injection of the default (only one) persistence context without specifying it's unit name
- Refactored the configuration framework utilities to align it with the extension loading mechanism and allow additional config source extensions
- Added support for subscribing to configuration value changes where supported by the configuration source
- Enabled automatic Bean validation integration with JAX-RS
- Simplified the rules for the config keys environment variable names for better compatibility throughout the various operation systems
- Added the ability to fetch a config key type and, if it's a map, the ability to fetch it's keys

#### Bugs

- Fixed injection of the `ConfigurationUtil` in a CDI environment
- Added the default Jetty logging to JUL to fix the problem of Weld (CDI) not printing stack traces when a
dependency is not satisfied

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee/releases/tag/v2.3.0).
