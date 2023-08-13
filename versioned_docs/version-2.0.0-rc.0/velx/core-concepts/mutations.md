---
sidebar_position: 3
---

# Mutations

The only way to actually change state in a VelX store is by committing a mutation. VelX mutations are very similar to events: each mutation has a string type and a handler. The handler function is where we perform actual state modifications, and it will receive the state as the first argument:

```js
import { velX } from "velte"

const store = new velX({
    state: {
        count : 1
    },
    mutations: {
        increment(state) {
            //mutate state
            state.count = state.count + 1
            return state
        }
    }
})
```


You cannot directly call a mutation handler. Think of it more like event registration: "When a mutation with type increment is triggered, call this handler." To invoke a mutation handler, you need to call an [action](actions.md) with a mutation key. If a mutation is found with that key, the mutation runs. 

:::note
`increment` is the name of the mutation key in our example above.
:::

## Mutations with Payload
You can pass an additional argument to mutation handlers, which is called the payload for the mutation:

```js
...
mutations: {
    increment(state, payload) {
        //mutate state
        state.count = state.count + payload
        return state
    }
}
```

In some cases, the payload should be an object so that it can contain multiple fields, and the recorded mutation will also be more descriptive:

```js
//triggering an action to call a mutation
store.dispatch("increment", {
    amount: 10
})
```

```js
...
mutations: {
    increment(state, payload) {
        //mutate state
        state.count = state.count + payload.amount
        return state
    }
}
```

## Using Constants for Mutation Keys

It is a commonly seen pattern to use constants for mutation types in various Flux implementations. This allows the code to take advantage of tooling like linters, and putting all constants in a single file allows your collaborators to get an at-a-glance view of what mutations are possible in the entire application:

```js title="mutation_key.js"
export const SOME_MUTATION = "SOME_MUTATION"
```

```js title="store.js"
import { velX } from "velte"
import { SOME_MUTATION } from "./mutation_key"

const store = new velX({
    state: { ... },
    mutations: {
        // we can use the ES2015 computed property name feature
        // to use a constant as the function name
        [SOME_MUTATION] (state) {
            //mutate state
            return state
        }
    }
})
```