---
sidebar_position: 4
---

# VelX

VelX State Managment Base Class, all VelX stores inherit from, with `actions`, `mutations`, `state`, `devTools`, `strictMode`, `dispatch` for dispatching actions and `commit` for commiting mutations.

```js
class velX {
    constructor(params?: {
        actions: {}
        mutations: {}
        state: {}
        devTools?: boolean
        strictMode?: boolean
    })
    actions: {}
    mutations: {}
    state: any
    status: string
    devTools: boolean
    strictMode: boolean
    events: PubSub
    dispatch(actionKey: PropertyKey, payload?: any): boolean
    commit(mutationKey: PropertyKey, payload?: any): boolean
}
```