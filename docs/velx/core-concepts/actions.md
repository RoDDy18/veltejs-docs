---
sidebar_position: 2
---

# Actions

Actions are similar to mutations, the differences being that:

- Instead of mutating the state, actions commit mutations.
- Actions can contain arbitrary asynchronous operations.

Let's register a simple action:

``` js
const store = velX({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count = state.count + 1
    }
  },
  actions: {
    increment (context) {
      context.commit("increment")
    }
  }
})
```

Action handlers receive a context object which exposes the same set of methods/properties on the store instance, so you can call `context.commit` to commit a mutation, or access the state via `context.state`. We can even call other actions with `context.dispatch`. 

## Dispatching Actions

Actions are triggered with the `store.dispatch` method:

``` js
store.dispatch("increment")
```

This may look silly at first sight: if we want to increment the count, why don't we just call `store.commit("increment")` directly? Remember that **mutations have to be synchronous**. Actions don't. We can perform **asynchronous** operations inside an action:

``` js
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit("increment")
    }, 1000)
  }
}
```

Dispatching actions with a payload:
``` js
store.dispatch("increment", 10)
```
In this example, `10` is the payload we are passing into the action, and we are calling an action called `increment`, and that action is identified with it's action key `"increment"`


Actions support object payload format dispatch:

``` js
// dispatch with an object payload
store.dispatch("increment", {
  amount: 10
})
```

A more practical example of real-world actions would be an action to checkout a shopping cart, which involves **calling an async API** and **committing multiple mutations**:

``` js
actions: {
  checkout ({ commit, state }, products) {
    // save the items currently in the cart
    const savedCartItems = [...state.cart.added]
    // send out checkout request, and optimistically
    // clear the cart
    commit(CHECKOUT_REQUEST)
    // the shop API accepts a success callback and a failure callback
    shop.buyProducts(
      products,
      // handle success
      () => commit(CHECKOUT_SUCCESS),
      // handle failure
      () => commit(CHECKOUT_FAILURE, savedCartItems)
    )
  }
}
```

Note we are performing a flow of asynchronous operations, and recording the side effects (state mutations) of the action by committing them.

## Composing Actions

Actions are often asynchronous, so how do we know when an action is done? And more importantly, how can we compose multiple actions together to handle more complex async flows?

The first thing to know is that `store.dispatch` can handle Promise returned by the triggered action handler and it also returns Promise:

``` js
actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("someMutation")
        resolve()
      }, 1000)
    })
  }
}
```

Now you can do:

``` js
store.dispatch("actionA").then(() => {
  // ...
})
```

And also in another action:

``` js
actions: {
  // ...
  actionB ({ dispatch, commit }) {
    return dispatch("actionA").then(() => {
      commit("someOtherMutation")
    })
  }
}
```

Finally, if we make use of [async / await](https://tc39.github.io/ecmascript-asyncawait/), we can compose our actions like this:

``` js
// assuming `getData()` and `getOtherData()` return Promises

actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // wait for `actionA` to finish
    commit('gotOtherData', await getOtherData())
  }
}
```
