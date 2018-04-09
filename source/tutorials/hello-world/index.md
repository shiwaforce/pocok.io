---
title: Pocok Hello World
---

# Pocok Hello World
In this tutorial we will create Pocok Project, add it to our Pocok Repo, 
for this we will use simple nginx to serve our source html. 


### Step 1: Init Git Repository 

Before we start lets init git repository:
```
$:~ mkdir pocok-hello-world
$:~ cd pocok-hello-world
$:~ git init
```


### Step 2: Add source files

When git repository is ready lets add some source files to our project first,
so we will be able to see that our ngnix server is workink correctly.
Create `index.html` file inside `/source/www` folder:
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```


### Step 3: Configure Docker Compose

We recommend to split docker-compose files by services (one file - one service), 
this will help to make project more flexible. 
Create `dc-nginx.yaml` file inside `/docker` folder and map our source folder:
```
version: '3'

services:
  nginx:
    image: nginx:alpine
    ports:
      - 80:80
    volumes:
      - ../source/www:/var/www
```


### Step 4: Configure Nginx server

Let's adjust a little bit our nginx server so it better suit to our needs.
Create `nginx.conf` file in `/docker/config`:
```
events {
  worker_connections  4096;  ### Default: 1024
}

http {
  server {
    root /var/www;

    location / {
    }
  }
}
```
  
  
To tell our nginx server to use our config file we need to map it in our `/dockder/dc-nginx.yaml` file:
```
version: '3'

services:
  nginx:
    image: nginx:alpine
    ports:
      - 80:80
    volumes:
      - ./config/nginx.conf:/etc/nginx/nginx.conf:ro
      - ../source/www:/var/www
```


### Step 5: Configure Pocok Project

When docker compose is ready we can add it to our `pocok.yaml`:
```
version: '1.0'

plan:
  default:
    - docker/dc-nginx.yaml
```


### Step 6: Check your project

Finally we can check our project:
```
$:~ pocok up
```
Open "http://localhost" in your browser, if everything is ok you should see "Hello World!".

    

### Step 7: Create Pocok Repo

Create remote git repository on Github, Gitlab or Bitbucket, add it to your local Pocok config:
```
$:~ pocok repo add default https://git-repository-url
```
If everything is ok you should see something like this:
```
Actual config
-------------
Project name: None
Working directory: /Users/username/workspace
Mode: None
Offline: False
Always update: True
Config location: /Users/username/.pocok/config
Config:
-------
default:
    repositoryType: git
    server: https://git-repository-url
```


### Step 8: Add your project to your Pocok Repo
Now we can add our project to Pocok Repo, run this command in root folder of the project:
```
$:~ pocok project add . default
```
When your project is added you can publish your Pocok Repo:
```
$:~ pocok repo push
```
 

#### Pocok Hello World Example Project   
You can try Pocok Hello World Example project. Just add Pocok Repo:
```
$:~ pocok repo add pocok-examples https://github.com/shiwaforce/pocok-examples.git
```
List out all available projects:
```
$:~ pocok projects ls
```

Run Pocok Hello World Project:
```
$:~ pocok up pocok-example-hello-world
```
