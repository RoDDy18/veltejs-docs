---
sidebar_position: 3
---

# Reactivity

:::caution
APIs tagged with `experimental` might change without a major version update.
:::

### setState()
Inherited from `VelteComponent`, performs deep recursive merge with `updatedState` and `currentState` then reconciles changes to virtual dom tree.
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

### createState() (Experimental)
Performs deep recursive merge with `defaultValue` and `newValue` and returns `[value, setValue]` for defining and updating states.
* Type
```js
createState(defaultValue: any): ((newValue: any) => any)[]
```

* For details, [see guide here](../essentials/reactivity.md#reactivity-with-createstate)


