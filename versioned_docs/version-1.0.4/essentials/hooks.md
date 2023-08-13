---
sidebar_position: 9
---

# Lifecycle Hooks

:::caution
 To use lifecycle hook in `velte 1.0.4`, it has to be inside a class component and **NOT** a function component, These hooks are inherited from `VelteComponent`.
:::


Every velte component instance goes through a series of initialization steps when it's created, mounted, updated and destroyed. Thus creating a lifecycle for every component. This gives you the ability to input code at any stage of the lifecycle to make components dynamic. For example, performing API calls in the `VelteCreated()` hook before the component is mounted.

## `VelteCreated()`

This hook is called after the component instance has set up reactive data and methods before the component is mounted.

```javascript title="component.js"
//Inside a class component
...
VelteCreated(){
    console.log("Component Created")
}
```

## `VelteMounted()`

This hook is called after all child components (if any) have been mounted and it's DOM tree has been created and inserted into the [root component](./application.md#the-root-component) (if any).

```javascript title="component.js"
//Inside a class component
...
VelteMounted(){
    console.log("Component Mounted")
}
```

## `VelteUpdated()`

This hook is called after there is an update to it's DOM tree due to [reactive](essentials/reactivity#reactivity) state change.

```javascript title="component.js"
//Inside a class component
...
VelteUpdated(){
    console.log("Component Updated")
}
```
:::danger
 Do not mutate component states in the `VelteUpdated()` hook, this will likely lead to an infinte update loop.
:::

## `VelteDestroyed()`

This hook is called after all it's child components (if any) have been destroyed and it's reactive effects have been stopped.

```javascript title="component.js"
//Inside a class component
...
VelteDestroyed(){
    console.log("Component Destroyed")
}
```
