---
sidebar_position: 3
---

# Routing

This is used in making single page applications, literally with only one HTML page. When the user makes a request for a new page like `/about` , The router would remove the "current page" and display the about page information on the same HTML page.

:::info
The velte starter kits use [`@kodnificent/sparouter`](https://www.npmjs.com/package/@kodnificent/sparouter) for SPA Routing, you can configure velte with any router of your choice.
:::

## The Router Configuration

All Router configurations live in the `src/router/index.js` file, and it is imported into the `src/App.jsx` file for initialization.

```js title="src/router/index.js"
import SPARouter from "@kodnificent/sparouter"

const options = {
    historyMode : true,
    caseInsensitive: false
}

export const router = new SPARouter(options)

export const query = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})
```

The `router` variable creates a new SPA Router with the `options` object where you can set either `historyMode` or `caseInsensitive` tp true or false.<br/>

The  `query` variable let's use access queries from the current route, for passing into our routes.

## Setting up the Router

```js title="src/App.jsx"
import { VelteElement, VelteRender } from "velte"
import {router, query} from "./router"
...


router.get("/", function(req, router){
    renderPage(Layout(<Home/>))
}).setName("Home")

router.get("/about", function(req, router){
    renderPage(Layout(<About/>))
}).setName("About")

router.notFoundHandler(function(){
    renderPage(Layout(<NotFound/>))
})

const renderPage = (page)=>{
    VelteRender(page, document.getElementById("app"))
}

router.init()
```

In the `App.jsx`, we configure all our required routes for our application, the defaults are `/` for the Home Page, `/about` for the About Page and a `404` route for all routes that don't exist in our application.<br/>

We define routes by accessing the `router` instance we created in `src/router/index.js` and call the `get()` method on that instance and pass in the name of the route and a callback function that performs a specific action when the route is active, in our case, rendering different routes.<br/>

The `renderPage` function, takes in the page to render and calls `VelteRender` and mounts the application to the DOM.<br/>

The we initialize our router and all routes by calling the `init()` method on our router instance.

:::tip
Learn how to set up advanced routes from the `@kodnificent/sparouter` documentation. [See docs here.](https://github.com/kodnificent/sparouter/blob/master/API.md)
:::


