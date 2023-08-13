---
sidebar_position: 4
---

# Tooling

Various ways you can use velte for your next project.

## Online Playground

You can try velte online without any installations, try now :
- [Velte on CodeSandbox](https://codesandbox.io/p/sandbox/velte-rspack-y272lm)

## Starter kit

The starter kits are perfect for different types of projects, It scales well and the project structure is easy to understand, Every logic and assets goes in the `src` folder.

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

## Velte CLI
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

