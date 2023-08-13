---
sidebar_position: 2
---

# Production Deployment

## Using Build Tools


The official velte build setup is based on [webpack](https://webpack.js.org/), a frontend build tool that is used to bundle assets and scripts into static assets.
To build your project for production, run:

```bash
npm run velte:build
```

The build output would be located in a newly created `dist` folder, stands for `distribution`. That is your finished project ready for hosting, If you make changes to your project, you can always run `npm run velte:build` again to update the build.


