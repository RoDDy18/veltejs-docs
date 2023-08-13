---
sidebar_position: 9
---

# Lifecycle Hooks

Every velte component instance or DOM element goes through a series of initialization steps when it's created, mounted, updated or unmounted. Thus creating a lifecycle for every component. This gives you the ability to input code at any stage of the lifecycle to make components dynamic. For example, performing API calls in the `onCreated()` hook before the component is mounted.

:::tip
To use lifecycle hooks for function components effectively, `$hook` should be used on the function component's root element when returning jsx:

```jsx
const DisplayName = ({name}) =>{
    return(
        <div $hook={{
            onCreated : ()=>{
                console.log("Component Created")
            }
        }}>
            <p>{name}</p>
        </div>
    )
}
```
:::

## `onCreated()`

This hook is called after the component instance has set up reactive data and methods before the component is mounted.

```js title="Component.jsx"
//usage with class component
class Component extends VelteComponent{
    ...
    onCreated(){
        console.log("Component Created")
    }
    ...
}
```

```jsx title="Component.jsx"
//usage with function component
<Component $hook = {{
    onCreated : ()=>{
        console.log("Component Created")
    }
}}/>
```

```jsx title="Component.jsx"
//usage with DOM elements

<div $hook={{
    onCreated : ()=>{
        console.log("Element Created")
    }
}}>
    ...
</div>
```

## `onBeforeMount()`

This hook is called after the component instance has set up reactive data and methods before the component is mounted.

```js title="Component.jsx"
//usage with class component
class Component extends VelteComponent{
    ...
    onBeforeMount(){
        console.log("Component Before Mount")
    }
    ...
}
```

```jsx title="Component.jsx"
//usage with function component
<Component $hook = {{
    onBeforeMount : ()=>{
        console.log("Component Before Mount")
    }
}}/>
```

```jsx title="Component.jsx"
//usage with DOM elements

<div $hook={{
    onBeforeMount : ()=>{
        console.log("Element Before Mount")
    }
}}>
    ...
</div>
```

## `onMounted()`

This hook is called after all child components (if any) have been mounted and it's DOM tree has been created and inserted into the [root component](./application.md#the-root-component) (if any).

```js title="Component.jsx"
//usage with class component
class Component extends VelteComponent{
    ...
    onMounted(){
        console.log("Component Mounted")
    }
    ...
}
```

```jsx title="Component.jsx"
//usage with function component
<Component $hook = {{
    onMounted : ()=>{
        console.log("Component Mounted")
    }
}}/>
```

```jsx title="Component.jsx"
//usage with DOM elements

<div $hook={{
    onMounted : ()=>{
        console.log("Element Mounted")
    }
}}>
    ...
</div>
```

## `onBeforeUpdate()`

This hook is called before there is an update to it's DOM tree due to [reactive](essentials/reactivity#reactivity) state change.

```js title="Component.jsx"
//usage with class component
class Component extends VelteComponent{
    ...
    onBeforeUpdate(){
        console.log("Before Component Update")
    }
    ...
}
```

```jsx title="Component.jsx"
//usage with function component
<Component $hook = {{
    onBeforeUpdate : ()=>{
        console.log("Before Component Update")
    }
}}/>
```

```jsx title="Component.jsx"
//usage with DOM elements

<div $hook={{
    onBeforeUpdate : ()=>{
        console.log("Before Component Update")
    }
}}>
    ...
</div>
```

## `onUpdated()`

This hook is called after there is an update to it's DOM tree due to [reactive](essentials/reactivity#reactivity) state change.

```js title="Component.jsx"
//usage with class component
class Component extends VelteComponent{
    ...
    onUpdated(){
        console.log("Component Updated")
    }
    ...
}
```

```jsx title="Component.jsx"
//usage with function component
<Component $hook = {{
    onUpdated : ()=>{
        console.log("Component Updated")
    }
}}/>
```

```jsx title="Component.jsx"
//usage with DOM elements

<div $hook={{
    onUpdated : ()=>{
        console.log("Element Updated")
    }
}}>
    ...
</div>
```

:::danger
 Do not mutate component states in the `onUpdated()` hook, this will likely lead to an infinte update loop.
:::

## `onBeforeUnmount()`
This hook allows you to hook into the removal of an element. The hook is called once a vnode is to be removed from the DOM.

```js title="Component.jsx"
//usage with class component
class Component extends VelteComponent{
    ...
    onBeforeUnmount(){
        console.log("Component Before Unmount")
    }
    ...
}
```

```jsx title="Component.jsx"
//usage with function component
<Component $hook = {{
    onBeforeUnmount : ()=>{
        console.log("Component Before Unmount")
    }
}}/>
```

```jsx title="Component.jsx"
//usage with DOM elements

<div $hook={{
    onBeforeUnmount : ()=>{
       console.log("Element Before Unmount")
    }
}}>
    ...
</div>
```

## `onUnmounted()`
This hook is called when all it's DOM elements, child components (if any) if its parent is being removed from the DOM and it's reactive effects have been stopped.

```js title="Component.jsx"
//usage with class component
class Component extends VelteComponent{
    ...
    onUnmounted(){
        console.log("Component Unmounted")
    }
    ...
}
```

```jsx title="Component.jsx"
//usage with function component
<Component $hook = {{
    onUnmounted : ()=>{
        console.log("Component Unmounted")
    }
}}/>
```

```jsx title="Component.jsx"
//usage with DOM elements

<div $hook={{
    onUnmounted : ()=>{
      console.log("Element Unmounted")
    }
}}>
    ...
</div>
```
