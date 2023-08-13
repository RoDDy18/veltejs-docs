---
sidebar_position: 2
---

# Quick Start Guide

:::info Prerequisites
The rest of the documentation assumes basic familiarity with HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics and then come back! You can check your knowledge level with [this JavaScript overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview). Prior experience with other frameworks helps, but is not required.
:::

## Build Tools

A build setup allows us to use compile velte apps during development or for [production](/best-practice/deployment). The official velte build setup is based on [webpack](https://webpack.js.org/), [Rspack](https://rspack.dev/) and [Vite](https://vitejs.dev/), frontend build tools that is used to bundle assets and scripts into static assets.

## Other Build Tools

Other build tools can be used to compile velte apps :
* [Rollup](https://rollupjs.org/)
* [Parcel](https://parceljs.org/)
* [Gulp](https://gulpjs.com/)

:::info
These build tool would have to be configured manually to compile velte applications. 
:::

## Installation & Usage

### Online Playground

You can try velte online without any installations, try now :
- [Velte on CodeSandbox](https://codesandbox.io/p/sandbox/velte-rspack-y272lm)

### Custom Project
If you already have a project and you want to use velte in that project, run to install the latest version of velte to your current project:

```shell
npm install velte@1.1.0
```

### Starter Kit
If you are using the starter kits, run install all required dependencies including velte :

```shell
npm install
```

Serve the app, used during development :

```shell
npm run dev
```

After development, build the app for production in the `dist` folder :

```shell
npm run build
```

To get up and running with velte, grab the starter kits on GitHub:

* [velte-webpack-starter](https://github.com/RoDDy18/velte-webpack-starter)
* [velte-rspack-starter](https://github.com/RoDDy18/velte-rspack-starter)
* [velte-vite-starter](https://github.com/RoDDy18/velte-vite-starter) (Experimental)

### CLI Tool
Quickly bootstrap your new velte projects by installing and running the CLI

* Install CLI globally

```shell
npm i -g create-velte-app
```

* Create test app with default arguments

```shell
mkdir test-app
cd test-app
create-velte-app --yes --git --install
```

* or Run CLI without installation

```shell
npx create-velte-app --yes --git --install
```