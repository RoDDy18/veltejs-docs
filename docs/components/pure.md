---
sidebar_position: 5
---

# Pure Components

These are class components that only include a `render()` method that returns JSX to be rendered. To use reactive states with these components, use the [`changeState()`](../essentials/reactivity.md#reactivity-with-createstate) function. 

Re-rendering only takes place when a state's new value is different from it's old value, this happens through shallow state comparison.


```jsx title="PureComponent.jsx"
import { createState, PureVelteComponent } from "velte"

const [count, setCount] = createState(0)

class PureComponent extends PureVelteComponent{
    //only render method is supported
    render(){
        return (
            <p>{count()}</p>
        )
    }
}

```