---
sidebar_position: 1
---


# Creating a Velte Application

velte applications are structured with components made with [JSX](../essentials/syntax.md#jsx) and Javascript.

```jsx
const app = <h1>This is JSX</h1>
```

JSX is simply HTML in Javascript. To use JSX in velte, you need to import `VelteElement` from `velte`.

```jsx
import {VelteElement} from "velte"

const app = <h1>This is JSX</h1>
```

## `VelteElement()`

When you write JSX it gets converted to `VelteElement` which returns a vnode, then this is added to the VDOM then mounted to the DOM.

```jsx
//JSX
const app = <h1>This is JSX</h1>
//VelteElement
VelteElement("h1", null, "This is JSX")
```
## Mounting The App

:::tip
You should always import `VelteRender` from `velte` when creating an app instance.
:::

## `VelteRender()`

When you call `VelteRender()` in a `.js` file, we are creating an app instance to render to the DOM.

```html title="index.html"
<!--HTML File VelteRender Renders to-->
<div id="app"></div>
```

```javascript title="app.js"
//document.getElementById("app") references the element with an ID "app"
//so this should be unique
VelteRender(app, document.getElementById("app"))
```

:::tip
You are not limited to a single app instance for your entire application, multiple application instances can co-exist.
:::

## The Root Component

What if you have many JSX tags or components to render?

```jsx title="app.js"
//this won't work
import {VelteElement,VelteRender} from "velte"

const app1 = <h1>This is JSX</h1>
const app2 = <h1>This is JSX</h1>

VelteRender(app1, document.getElementById("app"))
VelteRender(app2, document.getElementById("app"))
```

The first time you call `VelteRender()`, we call the `reconcile()` function on a real DOM node in our case `document.getElementById("app")`. When you call the `VelteRender()` more than once on the same element, you are calling it with the VDOM node the first `VelteRender()` returns when called for the first time. So how do we fix this problem? `Root Components`.<br/>
Every app requires a __Root Component__ that can contain other components.

```jsx title="app.js"
//this will work
import {VelteElement,VelteRender} from "velte"

const app1 = (
    <div>
        <h1>This is JSX</h1> 
        <h1>This is also JSX</h1>
    </div>
)

VelteRender(app1, document.getElementById("app"))

```
:::note
 We wrapped the two `<h1>` tags in a `<div>` because, when adding multiple tags to JSX snippet it needs to be grouped.
:::