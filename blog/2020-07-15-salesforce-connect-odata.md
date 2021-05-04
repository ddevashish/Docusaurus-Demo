---
slug: salesforce-connect-odata
title: Connect to Salesforce
author: Ravi Kant Sharma
author_title: Full Stack Engineer @ Cyber Group Inc.
author_url: https://github.com/Ravi-Kaushish
author_image_url: https://avatars0.githubusercontent.com/u/24990000?s=400&u=dbce2090b78b7108c7cbad0d1bf8fa2c8044c9d8&v=4
tags: [Salesforce, OData, Connect, Integration]
---

## Introduction

In this blog I will walk yout through the process of connecting to your salesforce organization with your odata service.

<!-- > Connect and configure your service in Salesforce External Data Source. -->

To be able to create and configure an external data source, you must Set up Salesforce Connect. This [trail](https://trailhead.salesforce.com/en/content/learn/modules/lightning_connect/lightning_connect_setup) on [Salesforce](https://trailhead.salesforce.com/en/home) will walk you through the necessary steps. 

Once you have installed the necessary packages into your Salesforce Organization, follow the steps below to configure your OData service inside Salesforce CRM.

## Connect

From Setup, type External Data Sources into the Quick Find box, then select **External Data Sources**.

Click **New External Data Source**.

![img](/assets/blogs/odata/odata-sf-1.jpg)

Enter a valid label for your external data source and then select **Salesforce Connect: OData 4.0** as the type.

Now, provide your service URL with the endpoint in the URL field and click Save when you're done.

:::note

You should check the Writable External Object only when you have added http-in nodes with POST, PUT, PATCH, DELETE methods which enables Salesforce to write records to the database.

:::

![img](/assets/blogs/odata/odata-sf-2.jpg)

Phew! That was tricky, but stick to the steps because we're almost there.

## Sync

Now that we have an external data source, we need to sync the tables/metadata to create objects inside of our Salesforce Organization. which can be easily done by clicking the "Validate and Sync button."

![img](/assets/blogs/odata/odata-sf-3.jpg)

Remember the model we provided in step 1?

Here, you'll see a list of all the tables that you provided metadata for inside of the function node.

Check all the tables you want to sync with Salesforce and click the **Sync button**.

Have you done that? Well then congratulations! You've successfully added your OData service as an external data source inside your Organization. 

## Verify

To confirm if the objects have been created inside Salesforce, click the drop-down arrow next to the Object Manager,  Here you'll see the tables that you just synced.

![img](/assets/blogs/odata/odata-sf-4.jpg)

Hooray! We're done and the end result is even sweeter than you expected. 

* Play around with these objects and configure them according to your needs.

* Create custom tabs to view external data.

* Use your tabs to read, write, update and delete data directly from Salesforce Organization to your database.

* Perform full CRUD operations from Salesforce to your external database.

* Use these objects to feed data to your reports and decorate your dashboards to give useful business insights.

* Data from your database will directly populate your dashboards in real-time.

## Additional Links:

To perform CRUD operations on your database, try creating a custom tab. Follow this trail's [View External Data](https://trailhead.salesforce.com/en/content/learn/modules/lightning_connect/lightning_connect_setup) section to create custom tabs.

You can also find a trail on how to prepare reports and dashboards with your data [here](https://trailhead.salesforce.com/en/content/learn/modules/lex_implementation_reports_dashboards).