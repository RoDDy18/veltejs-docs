---
sidebar_position: 2
---

# Velte's Syntax

Velte uses an HTML-based template syntax [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) that allows you to declaratively bind the rendered DOM to the underlying component instance's data. All velte templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

Under the hood, velte compiles the templates into highly-optimized JavaScript code. Combined with the reactivity system, velte intelligently figures out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.

## JSX

JSX is an open standard and it is not restricted to React in any way so we can use it velte without React and it is fairly easy to understand. JSX is simply HTML in Javascript but with superpowers.


## Text Interpolation

The most basic form of data binding is text interpolation using the "Mustache" syntax.

```jsx
<span>counter : {count}</span>
```

The mustache tag gets replaced by the value of `count` property from the corresponding component instance. It will also be updated whenever the `count` property changes.

```jsx
<p>Message : {text}</p>
```

`text` can also be a trait passed into the corresponding component instance.

Mustaches can also be used inside HTML attributes. They can refer to variables or functions.

```jsx
{/*variable*/}
<h1 className = {logo}>LOGO</h1>
{/*function*/}
<h1 className = {returnLogo()}>LOGO</h1>
```

:::tip
 single tag elements in velte and JSX must end with `/`. Like
`<img/>`, `<br/>`, `<hr/>`
:::

## Using JavaScript Expressions

velte supports the full power of JavaScript expressions inside Mustaches:

```js
{number + 20}
{answer : "YES" ? "NO"}
{text.reverse()}
{increment()}
{()=>console.log("IIFEs")()}
```

These expressions will be evaluated as JavaScript in the data scope of the current component instance.

## Expressions Only

JSX only supports Javascript expressions and not statements or definitions.

```js
//This won't work
{let bar = "foo"}
{if (a) {return a}}
```

## Directives

Directives are special traits some with the `v-` prefix. ` v ` for `velte`.
These directives are used to pass in `trait attributes` on an element.<br/>
- `v-attr for attribute trait`<br/>
- `v-on for event trait`

```jsx
<h1 v-attr:role="button" v-on:click={doSomething()}></h1>
```

## Classes and Styles

### Classes

You can add class names directly to your HTML elements.
```html
<p className = "myStyleName"></p>
```

### Styles

You can also add inline styles directly to your HTML elements.

```jsx
<p style = {{color:"red"}}></p>
<img src="./image.png" width={800} height={180}/>
```





