---
sidebar_position: 2
---

# Lifecycle Hooks (Experimental)

:::info
`velte 1.0.4` Lifecycle Hooks apply to only Velte Class Components.
:::

:::caution
APIs tagged with `experimental` might change without a major version update.
:::

### VelteCreated()
This hook is invoked during the patch process when a new virtual node has been found.

* Type
```js
VelteCreated() : void
```

* For details, [see guide here](../essentials/hooks.md#veltecreated)

### VelteMounted()
This hook is invoked when a DOM element has been created based on a vnode.

* Type
```js
VelteMounted() : void
```

* For details, [See guide here](../essentials/hooks.md#veltemounted)

### VelteUpdated()
This hook is invoked when an element is being updated.

* Type
```js
VelteUpdated() : void
```

* For details, [See guide here](../essentials/hooks.md#velteupdated)

### VelteDestroyed()
This hook is invoked when an element is directly being removed from the DOM.

* Type
```js
VelteDestroyed() : void
```

* For details, [See guide here](../essentials/hooks.md#veltedestroyed)