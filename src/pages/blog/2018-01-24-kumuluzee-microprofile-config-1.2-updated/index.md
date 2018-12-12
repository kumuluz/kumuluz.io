---
title:  "KumuluzEE MicroProfile Config now implements MicroProfile Config 1.2"
date:   2018-01-24
author: jmezna
categories: [KumuluzEE, Config]
tags: [KumuluzEE MicroProfile Config, configuration, MicroProfile, Eclipse MicroProfile]
---

KumuluzEE MicroProfile Config, an implementation of the Eclipse MicroProfile Config API, has been updated to support the Eclipse MicroProfile Config 1.2.

New version adds the support for the array converter that converts configuration values into arrays of types with available converters or into types Array, List or Set. Common sense converter, used where there is no corresponding type of converters provided for a given class, and a Class converter are also supported.

<!--more-->

You can read more about the updated release on the [KumuluzEE MicroProfile Config GitHub page](https://github.com/kumuluz/kumuluzee-config-mp). An updated sample is also [available on GitHub](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-mp).




