---
title:  "KumuluzEE 2.4.1 released"
date:   2017-09-15
author: tfaga
categories: [KumuluzEE]
tags: [KumuluzEE, Java EE, Microservices]
---

KumuluzEE version 2.4.1 just was released. The new minor release includes several bug fixes regarding the new
`kumuluzee-maven-plugin` for uber JAR support.

<!--more-->

#### Bugs

- When KumuluzEE is shutting down the uber JAR classloader will wait for other threads to finish and then perform the shutdown procedure.
- Fixed the Maven plugin copying dependencies to an incorrect directory - now target/dependency, was target/classes/dependency.
- Fixed the logging implementation in the EeClassLoader to not initialise the Java Util Logging before KumuluzEE itself has the chance to initialize it.
- Added the missing information of the loaded KumuluzEE extensions in the `EeRuntime` API.

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee/releases/tag/v2.4.1).