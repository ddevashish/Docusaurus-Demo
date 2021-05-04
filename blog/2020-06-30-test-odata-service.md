---
slug: test-odata-service
title: Test OData 4.0 Service
author: Ravi Kant Sharma
author_title: Full Stack Engineer @ Cyber Group Inc.
author_url: https://github.com/Ravi-Kaushish
author_image_url: https://avatars0.githubusercontent.com/u/24990000?s=400&u=dbce2090b78b7108c7cbad0d1bf8fa2c8044c9d8&v=4
tags: [OData, Connect, Integration, Testing]
---

Browse OData 4.0 Service Using `OData Client` Node or Postman Client.

Hey there folks!<br />You must be here for a reason, We know you have created an OData Service with Ignite and now you can't wait to see it in action. well, if you haven't created one yet, learn how to create an OData Service [here](/blog/create-odata-service).

Well, fasten you seat-belts because now we are going to get a live tour of our service.
You can either use `OData Client` node or Postman Client to access your APIs as per your convenience. There will be no changes in the requests no matter which client you use. We will be Postman Client for this tutorial.
Open Postman on your system and lets get started.

For this example we will take a table (entity) Users with columns (properties) (ID, FullName, Username) and perform CRUD operations on that table using our OData service. 
To perform CRUD operations, let's start with a GET call.

:::note

Replace ServiceRoot with your Service URL in the below example URLs.

:::


## Requesting Data

### Entity Collections

_The call below will fetch us data from Users table._

GET serviceRoot/Users

### Individual Entity

_The call below call will fetch us data from Users table with specified key(primary key)._

GET serviceRoot/Users(1)

### Specific Fields

_The call below will fetch FullName property from Users table with specified key(primary key)._

GET serviceRoot/Users(1)/FullName

## Querying Data

### $top

_The call below will fetch top 5 records._

GET serviceRoot/Users?$top=5

### $skip

_The call below will skip top 5 records._

GET serviceRoot/Users?$skip=5

### $select

_The call below will get us FullName and Username for all records._

GET serviceRoot/Users?$select=FullName, Username

### $count

_The call below will get us all the matching records with @Odata.count property with record count._

GET serviceRoot/Users?$count=true

### $orderby

_The call below will fetch us all records in ascending order_

GET serviceRoot/Users?$orderby= Id

* $orderby= Id asc (default)
* $orderby= Id desc

### $filter

_The call below will fetch records where the filter matches the specified criteria._

GET serviceRoot/Users?$filter=FullName eq 'Ravi'

you can add multiple filters by separating them with 'AND' & 'OR' keywords.

* Fullname eq 'Ravi' AND Username eq 'Ravi-Kaushish'
* Fullname eq 'Ravi' OR Username eq 'Ravi-Kaushish'

:::note

New version of OData Nodes support filter function, will be added here soon

:::

## Data Modification

### Create a Record

_The request below will create a new resource in Users table._

POST serviceRoot/Users

```json
{
 "Id": 8,
 "FullName": "Ravi Sharma",
 "Username": "Ravi-Kaushish"
}
```

:::important

Request body must contain the data to POST.

:::

### Delete a Record

_The call below will delete the record with Id 6 from Users table._

DELETE serviceRoot/Users(6)

:::warning

The primary key for the matching record must be provided.

:::
### Update a Record

PATCH serviceRoot/Users(8)

```json
{
 "FullName": "Bijay",
 "Username": "Bijay-Shah"
}
```

:::caution

The request body must only contain the data that you want to UPDATE.

:::

These are the features our OData Nodes supports in its early version.

While you keep doing magic with our tools, we are here working hard to make things even better for you. *Fist Bump*
