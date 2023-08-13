---
sidebar_position: 2
---

# Getting Started

At the center of every VelX application is the **store**. A "store" is basically a container that holds your application **state**. There are two things that make a VelX store different from a plain global object:

1. VelX stores are reactive. When Velte components retrieve state from it, they will reactively and efficiently update if the store's state changes.

2. You cannot directly mutate the store's state. The only way to change a store's state is by explicitly **dispatching actions** that will **commit mutations**. This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.

:::info
VelX comes with `velte 2.x` out of the box with no additional dependencies required.
:::

## The Simplest Store

After importing VelX from Velte, let's create a store. It is pretty straightforward - just provide an initial state object, some actions and some mutations:

```js
import { velX } from "velte"

const store = new velX({
    state: {
        count : 0
    },
    actions : {
        increment(context) {
            context.commit('increment')
        }
    },
    mutations: {
        increment(state) {
            state.count = state.count + 1
            return state
        }
    }
})

export default store
```

Now, you can access the state object as `store.state`, and trigger a state change with the `store.dispatch` method:

```js
store.dispatch('increment')

console.log(store.state.count) // -> 1
```

Again, the reason we are dispatching an action instead of changing `store.state.count` directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation or take state snapshots.