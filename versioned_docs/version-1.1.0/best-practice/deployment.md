---
sidebar_position: 2
---

# Production Deployment

## Using Build Tools

A build setup allows us to use compile velte apps during development or for [production](/best-practice/deployment). The official velte build setup is based on [webpack](https://webpack.js.org/), [Rspack](https://rspack.dev/) and [Vite](https://vitejs.dev/), frontend build tools that is used to bundle assets and scripts into static assets.<br/>
To build your project for production, run:

```shell
npm run build
```

The build output would be located in a newly created `dist` folder, stands for `distribution`. That is your finished project ready for hosting, If you make changes to your project, you can always run `npm run build` again to update the build.


