---
sidebar_position: 10
---

# Pub/Sub Events Pattern

The Publish/Subscribe pattern, sometimes known as pub/sub, is an architectural design pattern that enables publishers and subscribers to communicate with one another. In this arrangement, the publisher and subscriber rely on an event manager to send events from the publisher to the subscribers.

This is in use internally by Velte for communicating events to perform certain actions like reconciliation and VelX for managing state changes, actions and mutations. 

This functionality has also been provided for developing Event Driven Applications:

```js
import { PubSub } from "velte"
const event = new PubSub()
```

To Publish an event:

```js
...
event.publish("newEvent", payload)
```

We have successfully published an event called `newEvent` to our entire application with a `payload`, this can be any type of data.

Now to Subscribe to an event:

```js
...
event.subscribe("newEvent", (payload)=>{
    console.log(`I recieved the payload ${payload} from "newEvent"`)
})
```

So now, anytime `newEvent` is published, the subscribed part of our application to that named event, would run the callback function.