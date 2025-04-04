---
layout: Default.tsx
# tags:
#   - project
title: Build your own cloud provider
date: 2024-05-13T14:00:00.000Z
excerpt: Build your own cloud provider with openstack and gardener
---

# Build your own cloud provider

## Setup Guide

### Setup openstack

Have a look at the [Canonical Tutorial](https://microstack.run/docs/single-node-guided) for more details.

- Install Ubuntu 22.04
  - two interfaces needed
- install microstack
  ```bash
  sudo snap install openstack --channel 2023.1
  ```
- ensure prerequisites
  ```bash
  sunbeam prepare-node-script | bash -x && newgrp snap_daemon
  ```
- bootstrap cloud
  ```bash
  sunbeam cluster bootstrap
  ```
- configure microstack
  ```bash
  sunbeam configure --openrc demo-openrc
  ```

### Setup Talos Cluster

- seed cluster
- decided to also deploy the gardener frontend to the seed cluster, because we are only unsing one infrastructure

## Burn things into code using Pulumi
