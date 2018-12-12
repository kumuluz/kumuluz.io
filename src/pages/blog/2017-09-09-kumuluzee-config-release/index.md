---
title:  "KumuluzEE Config extension"
date:   2017-09-09
author: jmezna
categories: [KumuluzEE, Config]
tags: [KumuluzEE Config, etcd, Consul]
---

We're happy to announce the initial version of the **KumuluzEE Config**
extension v1.0.0 for the KumuluzEE framework.

<!--more-->

KumuluzEE Config is an open-source configuration management extension for the KumuluzEE framework. It extends basic
configuration framework which is a part of KumuluzEE framework, described
[here](https://github.com/kumuluz/kumuluzee/wiki/Configuration). It provides support for additional configuration
sources in addition to environment variables and configuration files.

KumuluzEE Config follows the idea of an unified configuration API for the framework and provides additional
configuration sources which can be utilised with a standard KumuluzEE configuration interface. It has been
designed to support modularity with plugable configuration sources. Currently, etcd and
Consul key-value stores are supported to act as configuration servers.

We're excited to get the extension into your hands!

More details at [KumuluzEE Config](https://github.com/kumuluz/kumuluzee-config/blob/master/README.md),
[KumuluzEE Config sample with etcd](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-etcd) and
[KumuluzEE Config sample with Consul](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-consul).
