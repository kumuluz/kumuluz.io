---
title:  "KumuluzEE 2.4.0 released"
date:   2017-09-08
author: tfaga
categories: [KumuluzEE]
tags: [KumuluzEE, Java EE, Microservices]
---

We're announcing the availability of KumuluzEE version 2.4.0.

This version marks an important milestone for the framework as it brings much needed major new features that were
missing and improving the JTA integration, config framework, logging and the extensions subsystem, as well as
fixed various bugs and aligned with the upstream versions of all the EE components and libraries.

<!--more-->

We're please to highlight a few major additions to KumuluzEE, which both help bring the framework closer to more
supported Java EE components as well as further improve the extensibility and support of more cloud-native
features:

* Continued work on JTA, further enhancing the CDI integration with proper transaction scoped persistence context and a few other improvements that are needed to correctly and successfully achieve CDI managed transactions.

* Reworked and consolidated the main KumuluzEE config to use the config framework and added a public API to access it in your apps. We've also added a new public API for the KumuluzEE runtime that contains various framework's runtime information.

* Full HTTP/2 support with or without SSL, as well as adding SSL with the HTTPS connector to the existing HTTP/1.1 support. This also brings proper reverse proxy support (e.g. for correct remote IP and scheme information), the ability to automatically redirect HTTP to HTTPS, custom SSL protocols and ciphers, option to enable default directory browsing and various other possible settings.

* Brand new maven plugin `kumuluzee-maven-plugin`. The plugin will be used from now on to support the creation of full single uber jars that contain all dependencies and can be directly ran with a single command. Together with that, we also included some quality of life improvements, such as not requiring the presence of the `webapp` folder in the project resources and also support for the more standard `WAR` project layout with the `webapp` folder being a sibling of the `resource` folder. The location of the `webapp` folder is completely customisable and can be set to whichever folder you like.

* Reorganisation of the KumuluzEE logging system in tandem with specific support for logs extensions, that enable the correct usage of any logging framework you wish to use. By default KumuluzEE uses JUL which can be configured to use any other framework as port of the logs extension. This is developed together with the [`kumuluzee-logs`](https://github.com/kumuluz/kumuluzee-logs) official logs extension, which will include support for the most popular logging frameworks as well some additional logging functionality not found in traditional logging systems. The logs extension is however, like any other KumuluzEE extension, open to everyone.

* Updated the extension definition mechanism to enable custom extension groups without explicit support of KumuluzEE itself. Extension types are replaced with extension groups, which signify that only one extension of a particular group can be preset, except in special cases where a particular group is more tightly integrated into KumuluzEE with a special interface (like config). We are providing several officially supported extension groups, for which we will supply official extension implementations through the extension projects, however everyone is free to make his own. And with this change now, if none of the official group fit your new extension, you can simply create your own.

* Support for advanced configuration of the data source pool via the standard config framework, additional config framework enhancements and initialisation validation within the framework.

* Additional configuration framework enhancements with support for nested classes or arrays when using the CDI injection of config parameters and the ability to provide a custom path to the config file source.

We're also finishing the initial version of the multiple extensions that enhance the development and usage of microservices, with the goal of aligning them and conforming to the new microprofile specifications (config, health, ...) that are in development right now.

The new release also fixed some small bugs, improved compatibility with the EE specification and updated the various components and libraries to their latest upstream versions.

#### Features

- Full support for HTTPS with customisable SSL settings
- Full support for HTTP/2 with or without SSL with both the HTTP and HTTPS connector
- Option to automatically redirect from HTTP to HTTPS
- Full support for running behind a reverse proxy
- Added support for automatic proper transaction scoped persistence context when using JTA in CDI
- New API for accessing the frameworks config - `EeConfig`
- New API for accessing the frameworks runtime information and utilities - `EeRuntime`
- Added the System Properties as a default configuration source for the configuration framework
- Advanced configuration options for the datasource connection pool
- Added the ability to create a single uber jar containing all dependencies that can be ran directly with a single command using the new `kumuluzee-maven-plugin`
- Overhaul and restructuring of the logging system to allow dynamic framework wide configuration of a custom logging solution via the extension mechanism.
- Restructured the extension definition mechanism to support custom groups that are not officially available.

#### Enhancements

- Restructured the KumuluzEE configuration variables to match the new system.
- Added the ability to toggle directory browsing of the server on or off.
- The `webapp` folder is no longer required to be present in the projects resources
- The `webapp` folder can now be configured to be located anywhere, with the default being a sibling of the `resources` folder to match the standard `WAR` structure
- Added a new global `debug` option to the main config, that signals whether the framework and your app/service is or should be in the debug mode.
- Added support for nested classes and arrays for the CDI injection of config values using `@ConfigBundle` and `@ConfigValue`.
- Added support for a custom path for the config file source.

#### Bugs

- Fixed the `jboss-logging` dependency version mismatches.

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee/releases/tag/v2.4.0).
