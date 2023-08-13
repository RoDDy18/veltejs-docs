---
sidebar_position: 3
---

# Reactivity

:::info
 velte's reactivity comes from `Velte.__updater()` in `@velte/dom` which takes in the `oldVnode` and `newVnode`  to render after [diffing](https://www.geeksforgeeks.org/explain-dom-diffing/) this makes velte intelligently choose what parts of your components needs to be re-rendered, which out re-rendering everything.
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