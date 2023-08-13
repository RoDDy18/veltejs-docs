---
sidebar_position: 9
---

# Lifecycle Hooks

Every velte component instance goes through a series of initialization steps when it's created, mounted, updated or unmounted. Thus creating a lifecycle for every component. This gives you the ability to input code at any stage of the lifecycle to make components dynamic. For example, performing API calls in the `onCreated()` hook before the component is mounted.

## `onCreated()`

This hook is called after the component instance has set up reactive data and methods before the component is mounted.

```js title="component.jsx"
//Inside a class component
...
onCreated(){
    console.log("Component Created")
}
```

## `onBeforeMount()`

This hook is called after the component instance has set up reactive data and methods before the component is mounted.

```js title="component.jsx"
//Inside a class component
...
onBeforeMount(){
    console.log("Component Before Mount")
}
```

## `onMounted()`

This hook is called after all child components (if any) have been mounted and it's DOM tree has been created and inserted into the [root component](./application.md#the-root-component) (if any).

```js title="component.jsx"
//Inside a class component
...
onMounted(){
    console.log("Component Mounted")
}
```

## `onUpdated()`

This hook is called after there is an update to it's DOM tree due to [reactive](essentials/reactivity#reactivity) state change.

```js title="component.jsx"
//Inside a class component
...
onUpdated(){
    console.log("Component Updated")
}
```
:::danger
 Do not mutate component states in the `onUpdated()` hook, this will likely lead to an infinte update loop.
:::

## `onBeforeUnmount()`
This hook allows you to hook into the removal of an element. The hook is called once a vnode is to be removed from the DOM.

```js title="component.jsx"
//Inside a class component
...
onBeforeUnmount(){
    console.log("Component Before Unmount")
}
```

## `onUnmounted()`
This hook is called when all it's DOM elements, child components (if any) if its parent is being removed from the DOM and it's reactive effects have been stopped.

```js title="component.jsx"
//Inside a class component
...
onUnmounted(){
    console.log("Component Unmounted")
}
```
