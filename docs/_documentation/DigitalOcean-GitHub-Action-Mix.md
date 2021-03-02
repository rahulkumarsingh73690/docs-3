---
title: Deploying to Digital Ocean Droplet directly via GitHub Actions and SSH
slug: do-github-action-mix-deployment
---

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/github-action-do-tutorial-header.png)

GitHub Actions are a great tool for automating builds, tests and deployments in a composable and flexible way. The ServiceStack tool `x mix` provides templates to incorporate into your existing applications and repositories.

We've created a mix template for building and deploying your ServiceStack app with GitHub Actions, GitHub Container Repository and Docker Compose all via SSH for a minimalist server hosting setup.

Specifically, we'll be `x mix build release-ghr-vanilla` which has GitHub actions configured ready to deploy your ServiceStack application when a new GitHub release is created. This can be run at the root of the project folder, for example if you wanted to create an empty web application you would run:
```
x new web DropletApp
# wait until creation finished
cd DropletApp
x mix build release-ghr-vanilla
# 'y' to process with writing files from x mix.
```

Once you want to deploy, we'll need to setup our Droplet server for deployments.

> `x mix release-*` are designed to be used with ServiceStack applications that were created with most `x new` project templates that follow the ServiceStack recommended project structure. They are designed to be a starting point that you can edit once created to suit your needs.

## Digital Ocean Droplets Host
In this tutorial, we'll be using a Digital Ocean Droplet as the target server and walk through the steps required to setup this automated deployment process for your ServiceStack application.

### Droplet Setup
Since we are deploying a simple ServiceStack application, we are going to use the cheapest `Basic Droplet` at $5USD/month. This is plenty to host even multiple low traffic ServiceStack applications but your use case might have different hardware requirements.

### Create your new droplet
The basic droplet we are going to create will have the following configuration.

- Distribution - Ubuntu 20.04 LTS
- Plan - Basic
- $5/month
- Datacenter region - Which ever suits your use case
- VPC - default
- Authentication - SSH keys, create a new one just for this server, follow the instructions on the right hand panel.

The rest of the options, leave as default.

### Create your new SSH key
If you ended up using an existing SSH key, now would be the time to create one specifically for deploying applications to this server, and only that function.

The reason this is important is because we will be using the private key within our GitHub Actions, which means the private key generated will be leaving your local computer and stored within GitHub Secrets. In the event that this key is compromised, we want to limit its function.

Digital Ocean has some excellent documentation for [this process here](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04).

### Enable floating IP
Once your Droplet is started, you'll want to `Enable Floating IP` so that we have a static public IP address to route to for a domain/subdomain.

## Docker setup
Now that our Droplet is running and has a public IP address, we'll want to setup Docker and docker-compose.

SSH into your Droplet using the appropriate SSH key and your preferred SSH client (straight `ssh`, Putty for Windows, etc).

Eg, with a Linux `ssh` client, the command would be `ssh root@<your_IP_or_domain>` as `root` is the default user setup when creating an Ubuntu droplet.
> Note the user may change depending on how your server is setup. See `man ssh` for more details/options.

### Install docker and docker-compose
Installing Docker for Ubuntu 20.04 can be done via the repository with some setup or via Docker provided convenience scripts. For a more detailed walk through, [DigitalOcean have a good write up here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04). Scripted included below for ease of use.

#### Docker via convenience script

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
> These scripts required sudo privileges, see [Docker notes regarding security](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script).
> Full repository based [script available here](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository).
> Docker is installed remoting under root in this example for simplification. Information of Docker security can be found in the [Docker docs](https://docs.docker.com/engine/security/#docker-daemon-attack-surface)

### Docker-compose install
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
Run `docker-compose --version` to confirm.
> See [DigitalOcean article](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04#step-1-%E2%80%94-installing-docker-compose) for details on ensuring you have the latest version installed.

### Get nginx reverse proxy and letsencrypt running
Now we have Docker and docker-compose installed on our new Droplet, we want to setup a nginx reverse proxy. This handles mapping a domain/subdomain requests to specific docker applications as well as TLS registration via LetEncrypt.

In the `x mix release-ghr-vanilla` template, we include `deploy/nginx-proxy-compose.yml` file which can be copied to the droplet and run.

Here is the nginx docker-compose file in full.

```yml
version: '2'

services:
  nginx-proxy:
    image: jwilder/nginx-proxy
    container_name: nginx-proxy
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - conf:/etc/nginx/conf.d
      - vhost:/etc/nginx/vhost.d
      - html:/usr/share/nginx/html
      - dhparam:/etc/nginx/dhparam
      - certs:/etc/nginx/certs:ro
      - /var/run/docker.sock:/tmp/docker.sock:ro
    network_mode: bridge

  letsencrypt:
    image: jrcs/letsencrypt-nginx-proxy-companion
    container_name: nginx-proxy-le
    restart: always
    environment:
      - DEFAULT_EMAIL=you@example.com
    volumes_from:
      - nginx-proxy
    volumes:
      - certs:/etc/nginx/certs:rw
      - acme:/etc/acme.sh
      - /var/run/docker.sock:/var/run/docker.sock:ro
    network_mode: bridge

volumes:
  conf:
  vhost:
  html:
  dhparam:
  certs:
  acme:

networks:
  default:
    external:
      name: webproxy
```

`scp` or just creating a new file via server text editor to copy the short YML file over. For this example, we are going to copy it straight to the `~/` (home) directory.

```
scp -i <path to private ssh key> ./nginx-proxy-compose.yml root@<server_floating_ip>:~/nginx-proxy-compose.yml
```

Once copied, we can use `docker-compose` to bring up the nginx reverse proxy.

```bash
docker-compose -f ~/nginx-proxy-compose.yml up -d
```

To confirm these are running, you can run `docker ps`.

> The external network named `webproxy` in the `nginx-proxy-compose.yml` is used by your docker applications for automatic LetsEncrypt registration.

## Domain setup
Now our droplet server is all setup to host our docker apps, we want to make referring to our server easier via setting up some DNS records.

Specifically, we want to create an `A` record pointing to our Floating IP of our droplet.
> You'll need to use whichever service you use to manage the DNS of your domains.

## GitHub Repository Setup
Now we are ready to deploy to our server, first we'll need an application to deploy!

We are going to use `x new web DropletApp` as a command to create a blank ServiceStack application.

Once this is created, we can navigate to the root directory of the project and use `x mix` to get started with our GitHub Actions.

```
x mix build release-ghr-vanilla
```

The `build` mix provides a GitHub Action that builds and tests our dotnet project. The `release-ghr-vanilla` provides a GitHub Action that uses Docker to package the application, pushes the Docker image to GitHub Container repository and deploys the application via SSH to our new Droplet.

Just like other `x mix` templates ServiceStack provides, these are *starting* points to help get things running quickly with known patterns. Unlike external dependencies, they just copy the templated code that is editable and not tied to any code generation service that will update these files.

Files provided by the `release-ghr-vanilla` are:

- **.github/workflows/release.yml** - Release GitHub Action Workflow
- **deploy/docker-compose-template.yml** - Templated docker-compose file used by the application
- **deploy/nginx-proxy-compose.yml** - File provided to get nginx reserve proxy setup as used by steps above.

Once these steps are done, we can push our application to a new repository in GitHub.
> The account or organization of your repository at the time of writing needs to "Enable improved container support". See [GitHub Docs](https://docs.github.com/en/packages/guides/enabling-improved-container-support) for details. 

### Create secrets
The `x mix` templates needs 6 pieces of information to perform the deployment.

- CR_PAT - GitHub Personal Token with read/write access to packages.
- DEPLOY_HOST - hostname used to SSH to, this can either be an IP address or subdomain with A record pointing to the server.
- DEPLOY_PORT - SSH port, usually 22
- DEPLOY_USERNAME - the username being logged into via SSH. Eg, `ubuntu`, `ec2-user`, `root` etc.
- DEPLOY_KEY - SSH private key used to remotely access deploy server/app host.
- LETSENCRYPT_EMAIL - Email address for your TLS certificate generation

The `CR_PAT` can be created via your [GitHub Settings->Developer Settings->Personal access tokens page](https://github.com/settings/tokens/), and selecting the `write:packages` permission. Copy the token somewhere secure, so we can use it when creating the secrets.
> Both the creation of the token and use in secrets are only available on creation, so if you want/need to reuse this, note it down somewhere secure like your password manager for reuse.

Repository secrets can be created under Settings->Secrets.

### Tag release
To kick off any new deployment, we use GitHub Releases.

Provide a version number and name, the version will be used to tag the Docker image in GHCR.io.

Go to the Actions tab in your repository to see the progress of your deployment.

> The initial deployment might take upto a minute for LetEncrypt to generate and use the certificate with your domain.
> If you are having problems with your app hosting, be sure to check the logs in the nginx and your app docker containers for any startup issues.