---
title:  "KumuluzEE Config 1.1 released"
date:   2018-01-19
author: urbim
categories: [KumuluzEE, Config]
tags: [KumuluzEE Config, etcd, Consul]
---

We're announcing the availability of KumuluzEE Config 1.1.0, an update to the configuration management
extension, which extends basic configuration framework with etcd and Consul configuration sources.

<!--more-->

This release is a relatively small update of the extension, that includes the adaptation to the updated configuration
framework introduced in KumuluzEE version 2.5.0. The etcd/Consul configuration source, added by this extension uses
a default ordinal of 110, which means that the priority of configuration sources is as following:

- system properties (ordinal 400)
- environment variables (ordinal 300)
- etcd/Consul values (ordinal 110)
- configuration files (ordinal 100)

This release also includes updates of etcd and Consul libraries along with some other minor improvements. The update
of Consul library fixes problems when Consul implementation 1.0.0 is used.

#### Enhancements

- Adaptation to the updated KumuluzEE configuration framework
- Updated Consul library to 0.17.1
- Updated etcd4j library to 2.14.0
- Set logging levels of messages concerning etcd key retrieval to FINE

#### Bugs

- Reset watch when etcd exception occurs



More details are available at [KumuluzEE Config](https://github.com/kumuluz/kumuluzee-config/blob/master/README.md).

Also check out the
[KumuluzEE Config sample with etcd](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-etcd) and
[KumuluzEE Config sample with Consul](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-config-consul).
