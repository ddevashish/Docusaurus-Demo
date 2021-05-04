---
id: deploy-on-azure
title: Deploy on Azure
sidebar_label: Deploy on Azure
---

## 1. Configure PostgreSQL

Create and configure PostgreSQL database for storing your app related information. This database will be managed by Ignite App and required for App registration.

### Setup PostgreSQL:

**<u><a href="https://portal.azure.com/#create/Microsoft.PostgreSQLServer" target="_blank">https://portal.azure.com/#create/Microsoft.PostgreSQLServer</a></u>**

![img](/assets/docs/deploy-to-azure/postgresql-basic.png)

### Review & Create:

### Database Credential

Now create your DATABASE_URL as below format by using above values

postgres://{username}:{password}@{host}:{port}/{database}

Copy or save this DATABASE_URL for <u>**[Azure App Registration Step](#3-deploy-application-using-docker-hub-public-repository)**</u>

## 2. Create App and Get Ignite Keys in Cgignite Dashboard

<hr></hr>

### Create App

Visit: **<u><a href="https://dashboard.cgignite.io/apps" target="_blank">https://dashboard.cgignite.io/apps</a></u>**

Click on button **“New App”**

![](/assets/docs/deploy-to-azure/new-app.png)

### Set App Name

Provide a suitable name for your application and click on button **“Create App”**

![](/assets/docs/deploy-to-azure/new-app-popup.png)

### Get Key for AWS Container Creation

You will get the IGNIT_EDITOR_API_SECRET key, copy or save this key for later use in <u>**[Azure App Registration Step](#3-deploy-application-using-docker-hub-public-repository)**</u>.

![](/assets/docs/deploy-to-azure/ignite-runtime-registration.png)

### Set Ignite Runtime URL

We will setup this URL once we will finish the "<u>**[deploy-on-azure](#3-deploy-application-using-docker-hub-public-repository)**</u>".

![](/assets/docs/deploy-to-azure/ignite-runtime-url-popup.png)


## 3. Deploy Application Using Docker Hub Public Repository

After the Ignite Platform team provisions your account, you may use the following **"Deploy to Azure"** button to get started.

<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FCybergroup-Research%2Fignite-runtime-image%2Fmaster%2Fazure-app-service-dockerhub-public-image.json" target="_blank"><img src="/assets/docs/deploy-to-azure/deploy-to-azure.png"></img></a>

> *You may need a Microsoft Azure account.*

> *You will be redirected to Azure after clicking this button.*

![img](/assets/docs/deploy-to-azure/custom-deployment.png)

Below are required parameters details-

- **Subscription:** Select your azure account subscription type that you want for this custom deployment.
All resources in an Azure subscription are billed together.

- **Resource group:** A resource group is a collection of resources that share the same lifecycle, permissions, and policies. You can select your existing resource group or can also create new one.

- **Region:** Select a location for the resource group. For example, Central US. Not every resource is available in every region.

- **Location:** Select a location for the storage account. For example, Central US.

- **App_Service_Plan_Name:** Provide app service plan name

- **App_Service_Plan_SKU:** Select the suitable Azure plan. For more information about Azure plan visit <u><a href="https://azure.microsoft.com/en-us/pricing/details/app-service/linux/" target="_blank">Azure Pricing Plans</a></u>

- **Web_App_Name:** Create a unique and suitable web application name. Your deployed application will be running with your web app name. for example, if Web_App_name is "myDemo" then application will be hosted in URL 
    > **[https://myDemo.azurewebsites.net/](#)**

- **ENV_DATABASE_URL:** This URL includes protocol, user credentials, host and port. Refer to [database credential](#database-credential)

- **ENV_IGNITE_EDITOR_API_SECRET:** This API key is found within the **<u><a href="https://dashboard.cgignite.io/apps" target="_blank">Ignite Dashboard</a></u>** when registering an app. Refer to [Get Ignite Keys](#get-key-for-aws-container-creation)

- **ENV_DB_SSL_OPTION:** If your database supports or requires SSL, it is recommended to turn this on

- **ENV_START_MODE:** Select desired start mode (Required for git-based application development)

### Observation 1: 
If someone else is using the same web app name then during deployment, you will get error like below-

![img](/assets/docs/deploy-to-azure/deployment-failed.png)
![img](/assets/docs/deploy-to-azure/website-already-exist.png)

### Observation 2: 
If there is any validation issue, you will get the status like below–

![img](/assets/docs/deploy-to-azure/custom-deployment-failed.png)
![img](/assets/docs/deploy-to-azure/custom-deployment-success.png)

### Observation 3: 
Once deployment completed you will get message as below–

![img](/assets/docs/deploy-to-azure/deployment-complete-msg.png)

## 4. Finish Ignite Runtime URL

 - Once azure application will be deployed successfully you will get the application url like **[https://myDemo.azurewebsites.net/](#)**

- Go back to [Runtime regisration step](#set-ignite-runtime-url) and paste the runtime url and click on **"Test Connection"** 

![img](/assets/docs/deploy-to-azure/finish-runtime-registration.png)

- Click **Launch** button on your application in the [Dashboard](https://dashboard.cgignite.io/apps) and start execution.

    ![img](/assets/docs/deploy-to-azure/launch-app.png)