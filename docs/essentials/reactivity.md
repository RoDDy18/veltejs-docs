---
sidebar_position: 3
---

# Reactivity

:::info
 velte's reactivity comes from `reconcile()` in `@velte/dom` which takes in the `oldVnode` and `newVnode`  to render after [diffing](https://www.geeksforgeeks.org/explain-dom-diffing/) this makes velte intelligently choose what parts of your components needs to be re-rendered, which out re-rendering everything.
:::

## Reactivity on Class Components

:::tip
 Before going through this, you should understand how velte class components works. 
:::

### `this.setState()`

The responsibility of how to update the DOM whenever you call `this.setState()` lies in `@velte/dom` rather than `@velte/core`. When `this.setState()` is called, velte calls `Velte.__updater()` under the hood.

```js
this.setState({count: this.state.count + 1})
```

The value of `count` is updated and re-rendered where called.

```jsx
render(){
    return <p>{this.state.count}</p>
}
```

### `this.reactToState()`

What if you want to reactively re-render a property's change not in `this.state` or that isn't natively reactive?
call `this.reactToState()` on property change.

```jsx title="component.jsx"
//global stores are more complicated than this
//non reactive data
const globalStore = 1

...
render(){
    const onChange = ()=> {
        globalStore = globalStore + 1
        this.reactToState() //this would call Velte.__updater() to re-render change
    }
    return (
        <p>{globalStore}</p>
        <button v-on:click={this.onChange}>change</button>
    )
}

```

:::info
 `this` is called before accessing the different methods because we use `this` to reference the current component instance.
:::

## Reactivity with VelX Stores

For performance optimizations, Velte components don't automatically listen to store changes even though they are accessing within the component. They have to suscribe to the store instance.

To suscribe to the store instance, when [calling the component](../components/basics.md#calling-components), pass in `$store` as a trait to the component with the value of the store instance.

```jsx
<Component $store={store}/>
```
For details, [see guide here](../velx/intro.mdx)

## Reactivity with createState

States are the cornerstone of reactivity in Velte. They contain values that change over time; when you change a state's value, it automatically updates anything that uses it.

To create a state, let's import `createState` from `velte` and call it from our Counter component like this:

```js
const [count, setCount] = createState(0)
```

The argument passed to the create call is the initial value, and the return value is an array with two functions, a getter and a setter. By [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), we can name these functions whatever we like. In this case, we name the getter `count` and the setter `setCount`.

It is important to notice that the first returned value is a getter (a function returning the current value) and not the value itself. This is because the framework needs to keep track of where that signal is read so it can update things accordingly.

In this lesson, we'll use JavaScript's `setInterval` function to create a periodically incrementing counter. We can update our count state every second by adding this code to our Counter component:

```js
setInterval(() => setCount(count() + 1), 1000)
```

Each tick, we read the previous count, add 1, and set the new value.

```js
return <div>Count: {count()}</div>
```

To suscribe to a state change, when [calling the component](../components/basics.md#calling-components), pass in `$state` as a trait to the component with the value of the store instance.

```jsx
<PureComponent $state/>
```

:::info
Reactivity with `createState` is under development and is currently `experimental`
:::
