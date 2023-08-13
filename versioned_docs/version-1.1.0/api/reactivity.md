---
sidebar_position: 3
---

# Reactivity

### setState()
Inherited from `VelteComponent`, performs shallow merge with `updatedState` and `currentState` then reconciles changes to virtual dom tree.
* Type
```js
setState({updatedState}) : void
```

* For details, [see guide here](../components/basics.md#setstate) and [here](../essentials/reactivity.md#thissetstate)

### reactToState()
Inherited from `VelteComponent`, calls `Velte.__updater()` to reconcile changes to virtual dom tree manually.
* Type
```js
reactToState() : void
```

* For details, [see guide here](../essentials/reactivity.md#thisreacttostate)


