---
title:  "KumuluzEE 3.0.0 beta 1 release with Java EE 8 and Java 9+ is here!"
date:   2018-03-11
author: tfaga
categories: [KumuluzEE]
tags: [KumuluzEE, Java EE, Microservices]
---

We're exited to announce the first Beta of KumuluzEE version 3.0.0. It's the first of a series of prerelease versions that will feature full support for Java EE 8 as a baseline for KumuluzEE components, replacing Java EE 7. We're also bringing better support for Java 9 and above, with continuously increased streamlined modules support throughout the betas.

This release focuses on updating all Java EE components available in KumuluzEE to their Java EE 8 versions as well as further integration between them. Updated components are:

* JSF 2.3
* JPA 2.2
* JAX-RS 2.1
* CDI 2.0
* Bean Validation 2.0
* JSON-P 1.1

All implementations of the listed components have been updated to the latest Java EE component versions, so you're free to use any of them. In addition to the ones listed, this updated also brings the following new components that are new to KumuluzEE:

* JSON-B 1.0
* Java Mail 1.6

<!--more-->

We're including the reference implementation for both of the new components, with alternative implementations planned in the future when they become available.

Additionally both JSON-P and JSON-B can now be used with JAX-RS automatically. You don't need to do anything, simply add the relevant components as your dependencies and it will work.

Make note that the Servlet component is still on version 3.1 as the default implementation Jetty has not yet updated upstream to support the 4.0 version of the Servlet component. It will be added as soon as it will become available. The omission of Servlet 4.0 for this beta however is a rather minor issue, as KumuluzEE already supports HTTP2, which is the flagship feature of Servlet 4.0. 

We're also hard at work at continuously optimizing and reducing the footprint of the framework and its dependencies, such as removing unneeded libraries, reducing the footprint of the initial loader and general speed ups of the framework. The release also includes updates to the maven plugin and the uber JAR loader, which address a number of issues found since its introduction. It's now more stable and handles edge cases better. We also took this opportunity to remove some of the legacy stuff still residing inside KumuluzEE. All deprecated features in versions 2.x are removed, so make sure to check whether you're still using any.  

The release also includes bug fixes, improved compatibility with the EE specification and updates of the various components and libraries to their latest upstream versions.

A list of all changes that went into KumuluzEE 3.0.0 Beta 1 can be found on [GitHub](https://github.com/kumuluz/kumuluzee/releases/tag/v3.0.0-beta.1).

Please note that KumuluzEE v3.0.0-beta.1 is a *beta* release and as such it is not recommend for use in production! We really appreciate your feedback so please report any issues and bugs for this Beta release on GitHub.

Happy testing!