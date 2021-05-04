---
id: upgrade-runtime
title: Upgrade Runtime
sidebar_label: Upgrade Runtime
---

## Upgrade Existing Runtime

Make sure you have Docker, Git Client and the Heroku Toolbelt installed.

If you haven't already, clone Runtime

    git clone https://github.com/Cybergroup-Research/ignite-runtime-image.git
    cd ignite-runtime-image
    
From existing cloned repository, run the following

    cd ignite-runtime-image
    git pull origin master

If you haven't already, login to your Heroku account and follow the prompts to create a new SSH public key.

    $ heroku login

Now, to log into the container registry, you must have Docker set up in your local environment. You should see output when you run this command.

    $ docker ps

Next, log into the Heroku Container Registry.

    $ heroku container:login

To push your Docker-based app, build the Dockerfile in the current directory and push the Docker image

    $ docker build . -t <your-app-name>
    $ heroku container:push web --app <your-app-name>

Finally, release your container to your app!

    $ heroku container:release web --app <your-app-name>
    
That's it! Happy Low-Coding!