---
sidebar_position: 2
---

# Strict Mode

To enable strict mode, simply pass in `strictMode: true` when creating a VelX store:

```js
const store = new velX({
    ...
    strictMode: true
})
```

:::info
By default, strict mode is enabled, for code quality and predictability.
:::

In strict mode, whenever VelX state is mutated through a commit outside of an action handler, an error will be thrown. This ensures that all state mutations can be explicitly tracked by debugging tools.

If strict mode is turned off, you can freely mutate VelX states with a commit outside of an action handler.

:::info
By default, mutating VelX states directly return `falsish`, strict mode enabled or not.
:::