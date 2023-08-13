---
sidebar_position: 3
---

# Dev Tools

To enable dev tools, simply pass in `devTools: true` when creating a VelX store:

```js
const store = new velX({
    ...
    devTools: true
})
```

:::info
By default, dev tools is disabled, it should only be used during development for debugging and observing states, actions and mutations.
:::

All dev tools does is to log out data to the console, when an action handler is called, a state changed or a mutation is invoked.

