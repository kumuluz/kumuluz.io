---
title:  "KumuluzEE MicroProfile Metrics now implements MicroProfile Metrics 1.1"
date:   2018-01-24
author: urbim
categories: [KumuluzEE, Metrics]
tags: [KumuluzEE MicroProfile Metrics, metrics, MicroProfile, Eclipse MicroProfile]
---

KumuluzEE Metrics, an implementation of the Eclipse MicroProfile Metrics API, has been updated to support the Eclipse
MicroProfile Metrics 1.1.

New version adds a flag `reusable` to the Metadata object, which primarily means, that a metric can be injected multiple
times in multiple places. Acquisition of global tags was changed from environment variable `MP_METRICS_TAGS` to
MicroProfile Config property with the same name. This means, that global tags can additionally be supplied via the
[MicroProfile Config extension](https://github.com/kumuluz/kumuluzee-config-mp).

<!--more-->

You can read more about the updated release on the
[KumuluzEE Metrics GitHub page](https://github.com/kumuluz/kumuluzee-metrics).
A sample is also [available on GitHub](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-metrics).
