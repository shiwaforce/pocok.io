---
title: Overview
---

# Overview
Pocok helps to organise and manage Docker, Docker-Compose, Kubernetes projects of any complexity using simple YAML config files to shorten the route from finding your project to initialising it in your local environment.

- Simple. Configure, run and switch between projects with a very simple command line interface.
- Flexibility. Manage, scale, maintain projects of any complexity with ease.
- Configure Once, Use Everywhere. Configure project once so the rest of your team will feel the value of zero configuration.

### Features
- Docker, Docker-Compose, Kubernetes, Helm support out of the box.
- Git, SVN support out of the box.
- Project Catalog, Multiple Catalogues. Create your own project catalog. Organise and your projects without additional tools.
- Multiple Plans. Create multiple plans for different environments or even environments for demo purposes. Switch between plans (environments) with ease.
- Simple Config Files. Pocok helps to split config files, so it is easy to maintain and scale them any time.
- Script Support (Hooks). Add additional scripts any time.   


### Pocok Project
Pocok project is basically git/svn project. Each Pocok Project should have `pocok.yaml` file and at least one `docker-compose.yaml` file.
`pocok.yaml` example:
```
version: '1.0'
maintainer: 'operations@shiwaforce.com'

environment:
  include: docker/conf.env

plan:
  demo:
    - docker/dc-nginx.yaml # - docker-compose file 
    - docker/dc-mysql-demo.yaml # - docker-compose file
    - docker/dc-node.yaml # - docker-compose file
    - docker/dc-phpmyadmin.yaml # - docker-compose file
  dev:
    - docker/dc-nginx.yaml # - docker-compose file
    - docker/dc-mysql-dev.yaml # - docker-compose file
    - docker/dc-node.yaml # - docker-compose file
    - docker/dc-phpmyadmin.yaml # - docker-compose file
```

### Pocok Plan
With Pocok plans you can configure multiple environments (development, production, demo, etc.) in your project
keeping configuration small, easy scalable, maintainable and reusable. 
  
#### Use Cases:
- useful for large scalable projects or with projects with big number of micro services.
- configure plans (environments) for different groups of developers, so they will be able to run only required services/containers keeping low usage of working machine resources.
- configure plans for demo purposes with predefined content, so any one in your team could demonstrate any project to the client with easy.


### Pocok Repo.
Pocok Repo - is a collection of Pocok Projects. 
With the help of Pocok Repo you will be able to organise and manage your projects in a simple way.
Pocok Repo example:
```
my-project-1:
  file: pocok.yaml
  git: ssh://git@git-server.com/my-project-1
my-project-2:
  file: pocok.yaml
  git: ssh://git@git-server.com/my-project-2
```


### Pocok Catalog
Pocok Catalog - is a collection of Pocok Repos. Add multiple Pocok Repos form same or different resources.
