---
title:  "KumuluzEE Discovery 1.1 released"
date:   2018-01-25
author: urbim
categories: [Product, Announcement]
tags: [KumuluzEE Discovery, etcd, Consul]
---

We’re announcing the availability of the KumuluzEE Discovery 1.1.0 extension, an update to the microservice discovery framework that uses etcd or Consul as the backend.

<!--more-->

This update includes some quality of life changes and overall improvements to the resilience.

The injection of `Optional` types is now supported, allowing developers to decide what happens if the service cannot be found. Additional methods have been added to the interface; they can be used for programmatic microservice discovery and registration, which extend the interface functionality and enable integration with other discovery mechanisms.

The etcd implementation now returns the last known instance when discovering microservices, if all instances in the backend are deleted. This ensures operation with zero downtime, even if etcd is down for a short time.

The number of retries performed when backend cannot be reached is now configurable with the configuration key `kumuluzee.discovery.etcd.initial-retry-count`.

The `kumuluzee.discovery.resilience` configuration key has been added. If set to `false` it changes the default behavior to throw an exception as soon as a problem with etcd is detected. This option is useful for debugging etcd problems.

Service name format used when registering services to Consul has changed from `'environment'/'serviceName'` to `'environment'-'serviceName'`, which enables Consul to properly create DNS entries.

#### Features

- Enabled injection of `Optional` types
- Discovery now returns last known instance, if no other instances are present
- Added following methods to the `DiscoveryUtil` interface:
  - `void register(String serviceName, String version, String environment, long ttl, long pingInterval, boolean singleton, String baseUrl, String serviceId);`
  - `void deregister(String instanceId);`
  - `Optional<URL> getServiceInstance(String serviceName, String version, String environment);`
- Added resilience flag

#### Enhancements

- Enabled configuration of the retry count
- Updated Consul client library to 0.17.1
- Updated etcd4j library to 2.15.0

#### Bugs

- Properly close etcd connection
- Initialize extension only on CDI event
- Deploy watch only if one instance is already registered
- Fixed registration initialization procedure to work alongside security extension

More details are available at
[KumuluzEE Discovery](https://github.com/kumuluz/kumuluzee-discovery/blob/master/README.md).

Also check out the
[KumuluzEE Discovery sample with etcd](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-etcd) and
[KumuluzEE Discovery sample with Consul](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-discovery-consul).
