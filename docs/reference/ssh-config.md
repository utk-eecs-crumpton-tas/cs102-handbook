---
sidebar_position: 5
draft: true
---

# SSH Config

This guide will show you how to type less when running `ssh` or `scp`.

Normally you have to type `ssh netid@hydra0.eecs.utk.edu` or `scp netid@hydra0.eecs.utk.edu:/path/to/file /path/to/file`

After changing your config, you will only need to use `ssh hydra0` or `scp hydra0:/path/to/file /path/to/file`

## Editing your `ssh` config

```txt
Host hydra* tesla*
  HostName %h.eecs.utk.edu
  User netid
```
