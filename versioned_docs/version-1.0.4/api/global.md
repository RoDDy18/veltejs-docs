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
class VelteComponent {...}
```

* For details, [see guide here](../components/basics.md#class-components)

### VELTE_VERSION
Retrives the current version of velte in use.
* Type `string`
* Example
```js
import { VELTE_VERSION } from "velte"

console.log(VELTE_VERSION)
```


