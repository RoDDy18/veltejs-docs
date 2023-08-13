---
sidebar_position: 7
---

# Event handling

when a user performs an action like `clicking on buttons`, `double clicking on buttons`, `hovers on images` and even `submitting a form`, our application can react to those actions known as `events`.<br/>

To get started with event handling in velte we use [`event traits`](./traits.md#event-trait)

All event traits in velte start with the `v-on` directive which stands for `velte-on`.

:::caution
 You cannot use `velte-on` as a replacment for `v-on`
:::

## Mouse Events

### `v-on:click`
### `v-on:doubleClick`
### `v-on:contextMenu`
### `v-on:mouseDown`
### `v-on:mouseEnter`
### `v-on:mouseLeave`
### `v-on:mouseMove`
### `v-on:mouseOut`
### `v-on:mouseOver`
### `v-on:mouseUp`
### `v-on:drag`
### `v-on:dragEnd`
### `v-on:dragEnter`
### `v-on:dragExit`
### `v-on:dragLeave`
### `v-on:dragOver`
### `v-on:dragStart`
### `v-on:drop`

## Keyboard Events

### `v-on:keyDown`
### `v-on:keyPress`
### `v-on:keyUp`

## Clipboard Events

### `v-on:cut`
### `v-on:copy`
### `v-on:paste`

## Form Events

### `v-on:input`
### `v-on:submit`
### `v-on:change`

## Focus Events

### `v-on:focus`
### `v-on:blur`

## UI Wheel Events

### `v-on:scroll`
### `v-on:wheel`

## Selection Events

### `v-on:select`

## Touch Events

### `v-on:touchCancel`
### `v-on:touchEnd`
### `v-on:touchMove`
### `v-on:touchStart`
