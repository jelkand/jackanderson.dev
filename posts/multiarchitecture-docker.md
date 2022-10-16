---
title: 'Building a Multi Architecture Docker Image'
date: '2020-11-19T00:00:00Z'
category: 'DevOps'
description: 'Build an ARM image locally or in Github Actions'
tags:
  - 'docker'
  - 'arm'
  - 'github actions'
---

As an interesting side-quest to autoscaling on the Pis, I had to figure out how to build a Docker image for an ARM machine.

Typically when you run a `docker build` command, Docker will build the image to run on the x86 instruction set. For now, that's the most popular architecture, so it makes sense. But for Pis, or the newest Macs,
you'll need to build for ARM.

In my case, I also want to publish it with CI/CD, for which I'm using GitHub Actions. I'll run through how to do that too.

## Building locally

Docker for Mac does not support this out of the box, but installing the experimental version lets you get at it. [Their instructions](https://docs.docker.com/docker-for-mac/multi-arch/) are pretty good,
but this is my blog so I'll briefly run through the commands.

The `buildx` command is the core of this functionality.

```bash
docker buildx create --name pibuilder

docker buildx use pibuilder

docker buildx inspect --bootstrap

# similar syntax to the build command, with the platform flag available
docker buildx build --platform linux/arm/v7 -t jelkand/baas:latest --push .
```

Simple as. You can tag on a lot more platforms into that command, but that worked great for me.

## Building in GitHub Actions

Now, to automate it a bit, let's build it in GitHub Actions.

Docker provides a pretty rich set of pre-built actions you can use. This wasn't always the case--I replaced a third party 'Push to DockerHub'
action I was using. I'm always happier using something first party, especially if I'm passing a password or token through it.

The actions are largely self documenting, but I'll offer some brief commentary.

1. [QEMU](https://www.qemu.org/) is an emulator that enables building across architecture. Setting it up enables ARM stuff--try removing it and see what changes in the logged available platforms.
2. Buildx must be installed.
3. Of course you can skip the `echo` statements, but I found them informative and left them.
4. Note that Docker authenticates with a revokable token. I'm happy about that.

```yaml
name: Publish BaaS Image

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v1

      - name: Set up Docker Buildx
        id: Buildx
        uses: docker/setup-buildx-action@v1
        with:
          version: latest

      - name: Builder instance name
        run: echo ${{ steps.buildx.outputs.name }}

      - name: Available platforms
        run: echo ${{ steps.buildx.outputs.platforms }}

      - name: Login to DockerHub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v2
        with:
          context: .
          file: ./Dockerfile
          platforms: linux/386,linux/amd64,linux/arm/v7,linux/arm64
          push: true
          tags: jelkand/baas:latest
```

Happy building!
