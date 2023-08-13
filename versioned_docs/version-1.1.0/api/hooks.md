---
sidebar_position: 2
---

# Lifecycle Hooks

:::info
`velte 1.1.0` Lifecycle Hooks apply to only Velte Class Components.
:::

### onCreated()
This hook is invoked during the patch process when a new virtual node has been found. The hook is called before Snabbdom has processed the node in any way. I.e., before it has created a DOM node based on the vnode.

* Type
```js
onCreated() : void
```

* For details, [see guide here](../essentials/hooks.md#oncreated)

### onBeforeMounted()
This hook is invoked when a DOM element has been created based on a vnode.

* Type
```js
onBeforeMounted() : void
```

* For details, [See guide here](../essentials/hooks.md#onbeforemount)

### onMounted()
This hook is invoked once the DOM element for a vnode has been inserted into the document and the rest of the patch cycle is done. This means that you can do DOM measurements like using [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) in this hook safely, knowing that no elements will be changed afterwards that could affect the position of the inserted elements.

* Type
```js
onMounted() : void
```

* For details, [See guide here](../essentials/hooks.md#onmounted)

### onUpdated()
This hook is invoked when an element is being updated.

* Type
```js
onUpdated() : void
```

* For details, [See guide here](../essentials/hooks.md#onupdated)

### onBeforeUnmount()
Allows you to hook into the removal of an element. The hook is called once a vnode is to be removed from the DOM.

* Type
```js
onBeforeUnmount() : void
```

* For details, [See guide here](../essentials/hooks.md#onbeforeunmount)

### onUnmounted()
This hook is invoked on a virtual node when its DOM element is removed from the DOM or if its parent is being removed from the DOM.

* Type
```js
onUnmounted() : void
```

* For details, [See guide here](../essentials/hooks.md#onunmounted)