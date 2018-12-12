---
title:  "Introducing Arquillian Support"
date:   2018-03-13
author: urbim
categories: [KumuluzEE, Testing, Arquillian]
tags: [KumuluzEE Testing, Arquillian, Integration Testing]
---

Integration testing with the KumuluzEE framework has just become a lot easier with the
[KumuluzEE Arquillian Container Adapter](https://github.com/kumuluz/kumuluzee-testing/blob/master/kumuluzee-arquillian-container/README.md).

The newly developed adapter brings support for the popular [Arquillian](http://arquillian.org/) framework. KumuluzEE
Arquillian Container Adapter starts the KumuluzEE server before running the tests, which enables the tests to interact
with the environment closely resembling the one in production.

<!--more-->

The Arquillian framework allows you to build and run multiple different deployments built programmatically. For example,
see the following two classes, in which a simple JAR is built and the CDI interaction is tested:

`SimpleBean.java`:

```java
@Dependent
public class SimpleBean {

    public String sayHello() {
        return "bean-hello";
    }
}
```

`InjectTest.java`:

```java
@RunWith(Arquillian.class)
public class InjectTest {

    @Deployment
    public static JavaArchive createDeployment() {
        return ShrinkWrap.create(JavaArchive.class)
                .addClass(SimpleBean.class)
                .addAsManifestResource(EmptyAsset.INSTANCE, "beans.xml");
    }

    @Inject
    private SimpleBean bean;

    @Test
    public void injectTest() {
        Assert.assertNotNull(bean);
        Assert.assertEquals("bean-hello", bean.sayHello());
    }
}
```

The adapter is currently in the SNAPSHOT phase. Check it out and if you find any issues, please report them on GitHub.

More details and examples are available at
[KumuluzEE Arquillian Container Adapter](https://github.com/kumuluz/kumuluzee-testing/blob/master/kumuluzee-arquillian-container/README.md).
