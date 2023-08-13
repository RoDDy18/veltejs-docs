---
sidebar_position: 1
slug: /
---

# Introduction

# What is Velte?

Velte is a small, performant and easy-to-use frontend JavaScript framework with a declarative and component-based model building on top of standard HTML, CSS, and JavaScript for developing User Interfaces. velte in no way tries to reinvent the wheel, It takes the wheel and makes it easier to roll with. In summary, It's your typical modern framework or library but friendlier.

## Why use Velte?

>I have no idea. What started off as a joke with friends ended up with me rewriting the entire library to improve and implement more features.
**Emmanuel Oni (creator)**

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

```jsx title="GettingStarted.js"
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

```jsx title="GettingStarted.js"
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