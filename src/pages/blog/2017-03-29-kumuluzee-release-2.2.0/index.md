---
title:  "KumuluzEE 2.2.0 released"
date:   2017-03-29
author: tfaga
categories: [KumuluzEE]
tags: [KumuluzEE, Java EE, Microservices]
---

We're announcing the availability of KumuluzEE version 2.2.0. This is a relatively small release which includes a few key additions to the advanced logging framework introduced in the previous release. The reason for the minor version bump is that we added a few enhancements which are described below. If you're using it and the [KumuluzEE Logs](https://github.com/kumuluz/kumuluzee-logs) project, you need to also update it to its latest corresponding version that supports the included enhancements.

<!--more-->

We also removed the barrier for running the app inside a JAR to make way for the plugin that will correctly package an app in a single jar. The plugin will follow shortly.

#### Enhancements

- Added additional logging methods to LogCommons method entry and exit that support usage of custom markers. Before this change the marker was automatically set to a predefined one.
- Extended the build-in log messages to more easily construct them.
- Removed the barrier for running inside JARs. WIth the other fixes this enables initial JAR support with outside dependencies.
- Code cleanups.

More details about this release can be found on [GitHub](https://github.com/kumuluz/kumuluzee/releases/tag/v2.2.0).
