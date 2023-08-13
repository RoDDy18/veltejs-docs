---
sidebar_position: 2
---

# Quick Start Guide

:::info Prerequisites
The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with [this JavaScript overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview). Prior experience with other frameworks helps, but is not required.
:::

## Build Tools

A build setup allows us to use compile velte apps during development or for [production](/best-practice/deployment). The official velte build setup is based on [webpack](https://webpack.js.org/), a frontend build tool that is used to bundle assets and scripts into static assets.

## Other Build Tools

Other build tools can be used to compile velte apps :
* [Rollup](https://rollupjs.org/)
* [Parcel](https://parceljs.org/)
* [Gulp](https://gulpjs.com/)
* [Vite](https://vitejs.dev/)
* [Rspack](https://rspack.dev/)

:::info
These build tool would have to be configured manually to compile velte applications. 
:::

## Installation

### Custom Project
If you already have a project and you want to use velte in that project, run to install the latest version of velte to your current project:

```shell
npm install velte@1.0.4
```

### Starter Kit
If you are using the `velte-starter-kit`, run install all required dependencies including velte :

```shell
npm install
```

Serve the app, used during development :

```shell
npm run velte:serve
```

After development, build the app for production in the `dist` folder :

```shell
npm run velte:build
```

To get up and running with velte, grab the velte-starter-kit on GitHub:

* [velte-starter-kit](https://github.com/RoDDy18/velte-starter-kit)

:::caution
The `velte-starter-kit` is outdated and no longer maintained, it only supports `velte 1.0.4` currently. 
:::

### CLI Tool
Quickly bootstrap your new velte projects by installing and running the CLI

:::info
`velte 1.0.4` is not supported by the CLI, use the `velte-starter-kit` instead.
:::
