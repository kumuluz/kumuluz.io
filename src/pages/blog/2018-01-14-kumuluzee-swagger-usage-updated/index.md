---
title:  "KumuluzEE Swagger usage - Updated"
date:   2018-01-14
author: zvoneg
categories: [KumuluzEE, Swagger]
tags: [KumuluzEE Swagger, Swagger-UI]
---

KumuluzEE Swagger (OpenAPI 2.0) extension provides support for documenting APIs using Swagger/OpenAPI v2 compliant annotations. Extension automatically hooks-up servlet that 
exposes API specification on endpoint ```/api-specs/<jax-rs application-base-path>/swagger.[json|yaml]```. Extension also provides SwaggerUI which is added to your project
to visualize API documentation and allow API consumers to interact with API endpoints.
 
More details about [Swagger Specification](https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md).

## Usage

You can enable the KumuluzEE Swagger support by adding the following dependency:
```xml
<dependency>
    <groupId>com.kumuluz.ee.swagger</groupId>
    <artifactId>kumuluzee-swagger</artifactId>
    <version>${kumuluzee-swagger.version}</version>
</dependency>
```

<!--more-->

## Swagger configuration

When kumuluzee-swagger dependnecy is included in the project, you can start documenting your REST API using [Swagger-Core Annotations](https://github.com/swagger-api/swagger-core/wiki/Annotations-1.5.X).

### Documenting application class
```java
@SwaggerDefinition(info = @Info(title = "CustomersAPI", version = "v1.0.0"), host = "localhost:8080")
@ApplicationPath("v1")
public class CustomerApplication extends Application { ... }
```

### Documenting resource class and operations
```java
@Path("customer")
@Api
@Produces(MediaType.APPLICATION_JSON)
public class CustomerResource {

    @GET
    @ApiOperation(value = "Get customers list", tags = {"customers"}, notes = "Returns a list of customers.")
    @ApiResponses(value = {@ApiResponse(message = "List of customers", code = 200, response = Customer.class)})
    public Response getCustomers() {

        List<Customer> customers = new ArrayList<>();
        Customer c = new Customer("1", "John", "Doe");

        customers.add(c);

        return Response.status(Response.Status.OK).entity(customers).build();
    }
}
```

## Accessing API specification

Build and run project using:

```bash
mvn clean package
java -jar target/${project.build.finalName}.jar
```

After startup API specification will be available at:

**http://<-hostname-:<-port->/api-specs/<-application-base-path->/swagger.[json,yaml]**

Example:

http://localhost:8080/api-specs/v1/swagger.json


## Visualize Swagger documentation with Swagger UI

To serve API specification in visual form and to allow API consumers to interact with API resources you must add the following dependency:

```xml
<dependency>
    <groupId>com.kumuluz.ee.swagger</groupId>
    <artifactId>kumuluzee-swagger-ui</artifactId>
    <version>${kumuluzee-swagger.version}</version>
</dependency>
```

Dependency will include SwaggerUI to you microservice. When microservice is started SwaggerUI is available at **http://localhost:8080/api.specs-ui**.

In case you want to temporarily disable UI you can set configuration property **kumuluzee.swagger.ui.enabled** to false:

```yaml
kumuluzee:
  swagger:
    ui:
      enabled: false
```

To learn more go to [KumuluzEE Swagger](https://github.com/kumuluz/kumuluzee-swagger/blob/master/README.md) and see [KumuluzEE Swagger Sample](https://github.com/kumuluz/kumuluzee-samples/tree/master/kumuluzee-swagger).
