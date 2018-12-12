---
title:  "HTTP health check"
date:   2017-12-06
author: skrjanec
categories: [KumuluzEE, Health]
tags: [KumuluzEE Health, Microprofile-Health, HTTP health check]
---

KumuluzEE Health extension health check set has been expanded with a **HttpHealthCheck**.

<!--more-->

The HttpHealthCheck can be used for checking the availability of HTTP resources. For example, static resources, REST API, SOAP API and status of other microservices on /health endpoint. The configuration is straight forward, just provide an url of the resource to check:

```yaml
kumuluzee:
  health:
    checks:
      http-health-check:
        connection-url: https://github.com/kumuluz/kumuluzee-health
```

or multiple resource urls:

```yaml
kumuluzee:
  health:
    checks:
      http-health-check:
        - connection-url: https://github.com/kumuluz/kumuluzee-health
        - connection-url: http://www.reddit.com
```

More details at [KumuluzEE Health](https://github.com/kumuluz/kumuluzee-health/blob/master/README.md).
