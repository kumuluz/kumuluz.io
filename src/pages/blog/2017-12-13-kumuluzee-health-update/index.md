---
title:  "Etcd health check"
date:   2017-12-13
author: skrjanec
categories: [KumuluzEE, Health]
tags: [KumuluzEE Health, Microprofile-Health, Etcd health check]
---

KumuluzEE Health extension health check set has been expanded with an **EtcdHealthCheck**.

<!--more-->

The EtcdHealthCheck can be used for checking the availability of an Etcd instance or multiple Etcd instances. The configuration is straight forward, just provide an url of the Etcd instance to check:

```yaml
kumuluzee:
  health:
    checks:
      etcd-health-check:
        connection-url: http://localhost:2379/health
```

or multiple Etcd instance urls:

```yaml
kumuluzee:
  health:
    checks:
      etcd-health-check:
        - connection-url: http://localhost:2379/health
        - connection-url: http://192.168.99.100:2379/health
```

More details at [KumuluzEE Health](https://github.com/kumuluz/kumuluzee-health/blob/master/README.md).
