---
sidebar_position: 1
---
# Rendering

## Client-Side Rendering

Client-side rendering is a reasonably new approach to rendering websites, and it didn't really become popular until JavaScript libraries started incorporating it.

When we talk about client-side rendering, it’s about rendering content in the browser using JavaScript. So instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser. Client-side rendering enables rich site interaction, fast website rendering after initial load, great for web applications and robust selection of Javascript libraries.

:::info
 Velte apps built with the `velte-starter-kit` are `Client Side Rendered`.
:::

## Static Site Generation

Static Site Generation (SSG), also referred to as pre-rendering, is a popular technique for building fast websites. If the data needed to server-render a page is the same for every user, then instead of rendering the page every time a request comes in, we can render it only once, ahead of time, during the build process. Pre-rendered pages are generated and served as static HTML files.

SSG retains the same performance characteristics of SSR apps: it provides great time-to-content performance. At the same time, it is cheaper and easier to deploy than SSR apps because the output is static HTML and assets.

:::info
 The `velte-starter-kit` does not build SSG websites by default.
:::

SSG is also great for content-based websites such as documentation sites or blogs. In fact, this website you are reading right now is statically generated.

## Server-Side Rendering

Server-side rendering (SSR) is the process of rendering web pages on a server and passing them to the browser (client-side), instead of rendering them in the browser. SSR sends a fully rendered page to the client; the client’s JavaScript bundle takes over and enables the SPA framework to operate.

This means that if your application is server-side rendered, the content is fetched from the server and passed to the browser to be displayed to the user. Client-side rendering is different: The user would have to navigate to the page before the browser fetches data from the server, meaning that the user would have to wait for some seconds to pass before the browser is served with the content for that page. Applications that have SSR enabled are called server-side-rendered applications.

:::info
 Velte does not currently support building SSR applications out of the box.
:::
