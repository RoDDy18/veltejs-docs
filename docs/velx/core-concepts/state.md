---
sidebar_position: 1
---

# State

VelX uses a single state tree per instance - that is, this single object contains all your application level state and serves as the "single source of truth" per instance. This also means usually you will have only one store for each application. A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.

To define a state, we need to first create a VelX instance, then we define a `state` object. our states would then live inside this object as `key:value` pairs.

```js
import { velX } from "velte"

const store = new velX({
    state: {
        count : 0
    }
})
```

## Getting VelX State into Velte Components

So how do we display state inside the store in our Velte components? Since VelX stores are reactive, the simplest way to "retrieve" state from it is simply accessing the state from the store instance.

```jsx title="Counter.jsx"
import store from "../store/myStore"

const Counter =  ({})=>{
    return (<p>{store.state.count}</p>)
}
```

## Subscribing Velte Components to the Store

For performance optimizations, Velte components don't automatically listen to store changes even though they are accessing within the component. They have to suscribe to the store instance, in our case `store`

To suscribe to the store instance, when [calling the component](../../components/basics.md#calling-components), pass in `$store` as a trait to the component with the value of the store instance.

```jsx
<Counter $store={store}/>
```

Now, whenever `store.state.count` changes, it will cause the component to re-evaluate, and trigger associated DOM updates.

However, it is recommended to subscribe to the VelX store instance when calling the root component, instead of individual components because:

1. Unnecessary subscriptions would have an impact on performance, when scaling your application
2. All child components accessing state for the store also gets re-evaluated on state change

```jsx
//don't do this
<div>
    <Counter $store={store}/>
    <AnotherComponent $store={store}/>
</div>
```

Here's an example of subscribing to the VelX store instance on calling the root component:

```jsx title="Home.jsx"
import { VelteElement } from "velte"
import { Counter } from "../components/Counter"

const Home = ({}) =>{
    return (
        <div>
            <h1>Home Page</h1>
            <Counter/>
            <AnotherComponent/>
        </div>
    )
}

export default Home
```

```jsx title="App.jsx"
import { VelteRender } from "velte"
import Home from "./routes/home"
import store from "./store/myStore"

VelteRender(<Home $store={store}/>, document.getElementById("app"))

```

If `<AnotherComponent/>` also accesses data from the store, it would be re-evaluated automatically.

## Components Can Still Have Local State

Using VelX doesn't mean you should put all the state in VelX. Although putting more state into VelX makes your state mutations more explicit and debuggable, sometimes it could also make the code more verbose and indirect. If a piece of state strictly belongs to a single component, it could be just fine leaving it as local state. You should weigh the trade-offs and make decisions that fit the development needs of your app.