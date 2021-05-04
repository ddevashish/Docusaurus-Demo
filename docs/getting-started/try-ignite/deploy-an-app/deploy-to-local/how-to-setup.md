---
id: how-to-setup
title: How to Setup
sidebar_label: How to Setup
---

 ## Setting up the Local Environment and Workspace

This guide explains how to set up your environment for Ignite Project development using the Docker & Postgres. It includes information about prerequisites, creating an initial workspace and starter app, and running that app locally to verify your setup.

### Prerequisite

To use the Ignite Project, you should be familiar with the following:
1.  <a href="https://docs.docker.com/get-started/overview/" target="_blank">Docker</a>
2.  Knowledge of <a href="https://docs.docker.com/compose/" target="_blank">**Docker Compose**</a> is helpful.
To install Ignite Project on your local system, you need the following:

### Download and Install Docker for Windows

Ignite requires a latest version of Docker Desktop.
For more information on installing Docker Desktop, see <a href="https://www.docker.com/products/" target="_blank">docker-desktop</a>. 

### Runtime Registration Page

1.  Signup and login into <a href="https://dashboard.cgignite.io/#/apps" target="_blank">Ignite App</a>. 
 
2.	Navigate to <a href="https://dashboard.cgignite.io/#/apps" target="_blank">Ignite App</a> and create a new app and provide the name, such as my-app

    ![](/assets/docs/deploy-to-local/new-app-button.png)

    ![](/assets/docs/deploy-to-local/create-new-app.png)

3.	The **Create App** action, will navigate to registration page which will provide information to start & register Ignite container.

    ![](/assets/docs/deploy-to-local/runtime-registration.png)

    Copy the **IGNITE_EDITOR_API_SECRET**, this key will require to create Docker compose file in step [Docker Compose File](#docker-compose-file)

    DO not click on button **"Test Connection"** now. Keep this page open.

### Docker Compose File

The Ignite Container includes a server, so that you can build and serve your app locally.

1.	Open explorer, Create new workspace folder, such as my-app.

![](/assets/docs/deploy-to-local/create-new-folder.png)

2.	Create a file **docker-compose.yml** inside the workspace directory, you just created above. 

![](/assets/docs/deploy-to-local/create-docker-compose-file.png)

See, Appendix [Docker Compose](/docs/getting-started/try-ignite/deploy-an-app/deploy-to-local/manage-application#docker-compose) for reference.
**cybergroupignite/runtime:v2.0.0** is our latest docker image, 
following environment variable are required to start local development.

```
    IGNITE_EDITOR_API_SECRET: “<your editor key>” 
    DATABASE_URL: “<your database url>”
    START_MODE: "PROJECT" required for git based application development
    DB_SSL_OPTION: “true” or "false” based on your Postgres Database installation 
```

3.  Provide **IGNITE_EDITOR_API_SECRET** from [Runtime Registration Page](#runtime-registration-page). 

[docker-compose.yml](https://github.com/Cybergroup-Research/ignite-application-development/blob/master/docker-compose.yml) file will look like as below-

```
version: "3.9"
services:
  ignite_local_postgres:
    image: postgres
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin
  ignite_local_app:
    image: cybergroupignite/runtime:v2.0.0
    ports:
      - "1881:1881"
    environment:
      IGNITE_EDITOR_API_SECRET: "<Your Ignite Secret key>"
      DATABASE_URL: "postgres://admin:admin@[ignite_local_postgres]:5432/postgres"
      DB_SSL_OPTION: "false" 
      START_MODE: "PROJECT"
      PORT: "1881"
    depends_on:
      - ignite_local_postgres
```

4.	Open my-app in the terminal and run the following command:

    ```
    docker-compose up
    ```

![](/assets/docs/deploy-to-local/docker-compose-execution.png)

The **docker-compose up** command launches the server, watch the logs, wait for container to start.

When application is ready to accept the request, open **http://localhost:1881/**.

If your installation and setup was successful, you should see a page similar to the following

![](/assets/docs/deploy-to-local/ignite-runtime.png)

Copy this URL **http://localhost:1881/**, this URL will require to register your runtime in step [Complete Your Runtime Registration](#complete-your-runtime-registration)

### Complete Your Runtime Registration

To start the application development, register your application on registration page. 

1.	Select **Project** as start mode & Enter **http://localhost:1881/** on Ignite Runtime URL textbox

![](/assets/docs/deploy-to-local/select-runtime-environment.png)

2.	Click on **Test Connection** button to test and complete the registration process

3.	On Successful connection browser will be redirected to editor.

If your environment variable is correct, you should see a page similar to the following,

![](/assets/docs/deploy-to-local/create-project-page.png)

So far you have successfully setup **Ignite applicaiton** in your local system. Now to know how to manage application localy [visit here](/docs/getting-started/try-ignite/deploy-an-app/deploy-to-local/manage-application).