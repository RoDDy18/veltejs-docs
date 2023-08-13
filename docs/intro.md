---
sidebar_position: 1
slug: /
---

# Introduction

[![Velte banner](../static/img/velte-banner.png)](https://veltejs.cyclic.app)

## Welcome to Velte 2

* Lightweight
* Simple
* Scalable
* Event Driven
* Performant
* Out-of-the-box Proxy State Managment
* Deep (recursive) Merge State Updates via [mergician](https://www.npmjs.com/package/mergician)

## What is Velte?

Velte is a simple, lightweight and Event Driven frontend Javascript UI framework with a declarative, scalable and component-based model for developing User Interfaces. Powered by [snabbdom](https://www.npmjs.com/package/snabbdom), one of the fastest virtual DOM libraries out there, velte inherits it's splendid performance. It's modularity makes velte powerful out of the box!<br/>
Love using snabbdom? well, think of velte as high level framework wrapped around snabbdom.<br/>
Velte in no way tries to reinvent the wheel, It takes the wheel and makes it easier to roll with. In summary, It's your typical modern UI framework but friendlier.


## Why use Velte?

### Beginner friendly
If you're Just starting out as a frontend or fullstack developer, velte can be great practice.

### Simple and fast
Weighing in at around 5 KB, velte helps keep your bundle size small. Powered by [snabbdom](https://www.npmjs.com/package/snabbdom), rendering is blazing fast, because velte touches only the dynamic parts of your UI when updating — no need to rebuild an entire VDOM tree.

### Performant Components
Basically, you can have hundreds of components and still achieve great performance.

### Scalable
For small to medium sized web applications.

### Extensive
Velte can be used in conjunction with other libraries to increase productivity.

### Declarative
This helps make your code easier to understand and simpler to debug.

### Familiar Syntax
Velte's syntax is inspired by [React](https://react.dev/), [Lit.js](https://lit.dev/) and [Vue.js](https://vuejs.org/)

## Velte Components

Velte components can be authored in two different ways `classes` and `functions`. For example we have `<GettingStarted/>` created as a `Function Component` and `Class Component` below:

### Function Component

```jsx title="GettingStarted.jsx"
import {VelteElement} from "velte"

function GettingStarted() {
    return(
        <div className="card">
            <h2 className="title"><i className="fas fa-book"></i> Getting Started</h2>
            <p>You should read the documentation, it covers every bit of the library.</p>
            <a href="#" v-attr:role="button" className="button">Read the Docs</a>
        </div>
    )
}
```

### Class Component

```jsx title="GettingStarted.jsx"
import {VelteComponent,VelteElement} from "velte"

class GettingStarted extends VelteComponent{
    constructor(){
        this.state = {}
    }

    render(){
        return(
            <div className="card">
                <h2 className="title"><i className="fas fa-book"></i> Getting Started</h2>
                <p>You should read the documentation, it covers every bit of the library.</p>
                <a href="#" v-attr:role="button" className="button">Read the Docs</a>
            </div>
        )
    }
}
```