---
title:  "Using KumuluzEE CORS"
date:   2017-09-26
author: zvoneg
categories: [KumuluzEE, CORS]
tags: [KumuluzEE CORS, Cross-Origin]
---

KumuluzEE CORS filter extension for the KumuluzEE microservice framework supports:

* **Browser script perspective**: Allowing cross-domain requests, which are subject to tihter controls on the types of data that is exchanged.
  Cookies, for instance, are blocked unless specifically requested by the XHR author and allowed by the cross-domain web-service.
* **Web service perspective**: By utilising the origin URL reported by the browser the target cross-domain web service can determine, based 
 on its origin policy, wheather to allow or deny the request.
 
# Usage

To enable Cross-Origin support for your microservice you need to include the following dependency:
```xml
<dependency>
    <groupId>com.kumuluz.ee.cors</groupId>
    <artifactId>kumuluzee-cors</artifactId>
    <version>${kumuluzee-cors.version}</version>
</dependency>
```

## CORS filter configuration

CORS filter can be configured in two ways: using **@CrossOrigin** annotation 
or using **servlet filter** by providing cors-filter configuration section in prefered config source (i.e. config.yaml, etcd etc.).


### @CrossOrigin annotation

Annotation can be put on the following classes of the JAX-RS application: 
* Application class (with @ApplicationPath annotation)
* Resource classes (classes with annotation @Path)
* Resource operations

<!--more-->

If @CrossOrigin annotation is provided on the Application class, all resources inherit the Cross Origin configuration. Configuration can 
be overriden by applying @CrossOrigin annotation on the resource class or method of the resource class.

If @CrossOrigin annotation is not provided on the Application class, only resource classes or methods with @CrossOrigin annotation have CORS Filter 
enabled.


Configuration for each annotation can be provided through config framework. Configuration for annotations is provided in namespace ```kumuluzee.cors-filter.annotations.<annotation-name>```. 
Parameter keys are the same as in anotation, except in kebab-case.

Example of annotation configuration in config:
```yaml
kumuluzee:
  cors-filter:
    annotations:
      my-resource:
        allow-origin: "http://kumuluz.com"
        allow-subdomains: false
```

Configuration in config takes priority over values defined in CrossOrigin annotation. To load the annotation configration from config the key of the config must be the same as *name* parameter if name parameter is provided.
If name parameter is not provided in annotation config key must equal to the name of the class, if annotation is used on a class, or equal to the <name of class>-<name of method>, if annotation is used on method. 
If multiple methods share the same name in the same class, annotations must have *name* provided to distinguish between them.

Example of ***named*** CrossOrigin annotation:

```java
@RequestScoped
@Path("/myresource")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@CrossOrigin(name = "my-resource", allowOrigin = "http://my.origin.com")
public class MyResource {
}
```

#### Example of using @CrossOrigin annotation

**Application class**

```java
@ApplicationPath("/v1")
@CrossOrigin
public class MyApplication extends Application {
}
```

**Resource class and method**

```java
@RequestScoped
@Path("/myresource")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
@CrossOrigin(allowOrigin = "http://my.origin.com")
public class MyResource {
    ...
    
    @GET
    @Path("/test")
    @CrossOrigin(allowOrigin="http://my-test.origin.com")
    public Response test() {
        ...
    }
```

More details can be found at [KumuluzEE CORS](https://github.com/kumuluz/kumuluzee-cors/blob/master/README.md) and at [KumuluzEE CORS sample project](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-cors).
