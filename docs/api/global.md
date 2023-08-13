---
sidebar_position: 1
---

# Global API

### VelteElement()
Returns a Virtual DOM Node for mounting to the DOM.
* Type
```js
function VelteElement(nodeName, {traits}, [...children]) : VNode
```
* For details, [see guide here](../essentials/application.md#velteelement)

### VelteRender()
Mounts a Virtual DOM Node to a HTML Root Element.
* Type
```js
function VelteRender(VNode, HTMLElement) : void
```
* For details, [see guide here](../essentials/application.md#mounting-the-app)

### VelteComponent
Base class which all Velte Class Components extend from.
* Type
```js
export class VelteComponent {
    constructor(traits: any)
    traits: any
    state: any
    reactToState(): void
    setState(updatedState: any): void
    onCreated(): void
    onBeforeMount(): void
    onMounted(): void
    onBeforeUpdate(): void
    onUpdated(): void
    onBeforeUnmount(): void
    onUnmounted(): void
    render(): void
    isVelteClassComponent: boolean
}
```

* For details, [see guide here](../components/basics.md#class-components)

### PureVelteComponent
Base class which all Pure Velte Class Components extend from.
* Type
```js
export class PureVelteComponent {
    constructor(traits: any)
    traits: any
    render(): void
    isPureVelteClassComponent: boolean
}
```

* For details, [see guide here](../components/pure.md)

### version
Retrives the current version of velte in use.
* Type `string`
* Example
```js
import { version } from "velte"

console.log(version)
```


