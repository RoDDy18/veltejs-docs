---
sidebar_position: 4
---

# Misc

### render()
Inherited from `VelteComponent`, returns velte elements, arrays, string, numbers, booleans, null or undefined.

* Type
```js
render() : void
```

* For details, [see guide here](../components/basics.md#render--inherited)

### PubSub
Publish / Subscription base class which all events inherits functionality from. `publish` to publish events and `subscribe` to subscribe to events.

* Type
```js
class PubSub {
    events: {};
    subscribe(event: propertyKey, callback?: () => void): any
    publish(event: propertyKey, data?: {}): any
}
```

* For details, [see guide here](../components/basics.md#render--inherited)

