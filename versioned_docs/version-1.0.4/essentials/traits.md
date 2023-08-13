---
sidebar_position: 4
---

# Traits

A common need for setting traits is manipulating an element's class list, its inline styles and data attributes.

:::info
 Traits are just like **properties** or **attributes** that get passed into elements and components.
:::

## Class Trait

These are simply `css` classes defined for elements like `<p>`, `<div>`, `<img>`.
```html
<p className = "classTrait"></p>
```
When using these classes, it is common to import them from `css` files.

```css
/*style.css*/
.classTraits{
    color: red;
}
```

```jsx
import "./style/style.css"
const App = <p className = "classTrait"></p>
```

The class names can also be stored in variables.

```jsx
import "./style/style.css"

const myVariable = "classTraits"
const App = <p className = {myVariable}></p>
```

## Style Trait

These are inline `css` styles defined for elements like `<p>`, `<h1>`, `<input>`.

```jsx
const App = <p style = {{color:"red"}}></p>
```
The styles can also be stored in variables as objects.

```jsx
import "./style/style.css"

const myStyleVariable = {color: "red"}
const App = <p style = {myStyleVariable}></p>
```

## Attribute Trait

These are traits that are not default `HTML` attributes like `href` or `src`. For example, when using a 3rd party library for styling HTML elements, It can have custom attributes for styling them.

```jsx
//role would be passed in a data trait
const App = <a href="https://lit.dev" role = "button">Go to Lit's Website</a>
```

`role` is a custom attribute, but by default velte will read this as a [`component trait`](./traits.md#data-trait). To fix this you need to tell velte it's an attribute trait.

```jsx
//role would be passed in an attribute trait
const App = <a href="https://lit.dev" v-attr:role = "button">Go to Lit's Website</a>
```

`v-attr:` directive stands for `velte-attribute`, this would tell velte it's an attribute trait.

## Event Trait

These traits are event handlers, when a user performs an action like `clicking on buttons`, `double clicking on buttons`, `hovers on images` and even `submitting a form`, these traits are used to perform actions based on what the user's actions.
To register an event trait on an element use the `v-on` directive which stands for `velte-on`

```jsx
const App = <button v-on:click={()=>console.log("You clicked me")}>Click me</button>
```

:::tip
 Use the Mustache syntax to pass in a callback function to perform an action: `{()=>actionFunction()}`, these can be methods in a [`class component`](../components/basics.md#class-components) or plain `Javascript` functions
:::


```jsx
//using plain Javascript functions
function sayHi(){
    console.log("Hi")
}

const App = <button v-on:click={()=>sayHi()}>Click me</button>
```

## Data Trait

These traits are commonly used to pass in a data into a component, it's what they where build for. They are not `attributes` or `directives`, just plain definitions. Data traits are commonly refered to as `traits` or `props` because they define properties of components or common elements.


```jsx
//passing data traits into component

const App = <CustomComponent myTrait="Hello World"/>
```

:::note
 The code snippet above passes `"Hello World"` into the `CustomComponent` component.
:::
