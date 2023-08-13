---
sidebar_position: 3
---


# Component Events

:::tip
 Using events Listeners in components are the same as using them in elements. check out how to use [`event handlers`](../essentials/events.md)
:::

```jsx
const log = ()=> console.log("You cliked Me")

const App = <AnotherComponent v-on:click = {()=>log()} myTrait="Hello World"/>
```
