---
sidebar_position: 2
---

# Component Traits

Component traits are simply [`data traits`](../essentials/traits.md#data-trait) for passing data into a component, nothing special. They are not [`attributes`](../essentials/traits.md#attribute-trait) or [`directives`](../essentials/syntax.md#directives), just plain definitions.

## Function Component Traits

```jsx title="component.jsx"
function CustomComponent ({myTrait}){
    return (<p>{myTrait}</p>)
}
```

```jsx title="app.jsx"
const App = <CustomComponent myTrait="Hello World"/>
```

`myTrait` is a data trait for our component.<br/>
Traits in function components are passed in as `parameters` during component decleration and `arguments` when calling the component.

## Class Component Traits

```jsx title="app.jsx"
const App = <AnotherComponent myTrait="Hello World"/>
```

```jsx title="component.jsx"
export class AnotherComponent extends VelteComponent{
    constructor(traits){
        super(traits)
        ...
    }

    ...
}
```

Passing in `traits` as a paramenter and calling `super(traits)` enables the data trait funtionality for class components. To use the traits passed into the component, we can access them the same way we can access [`this.state.data`](../components/basics.md#component-states)


```jsx title="app.jsx"
const App = <AnotherComponent myTrait="Hello World"/>
```

```jsx title="component.jsx"
export class AnotherComponent extends VelteComponent{
    constructor(traits){
        super(traits)
        ...
    }

    render(){
        return <p>{this.traits.myTrait}</p>
    }
}
```

Calling `this.traits.myTrait` access the value of `myTrait` when passed in as a data trait. 



