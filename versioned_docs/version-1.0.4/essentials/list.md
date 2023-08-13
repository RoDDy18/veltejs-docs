---
sidebar_position: 6
---

# List Rendering

This is simply looping through an array of items for rendering or performing functions.

## The `<For>...</For>` tag

This tag performs the action of the `for loop` and `while loop`, it is used for looping over arrays to get indexes, render array elements, perform actions based on the array element or what you want to do with the array elements.

```jsx
//<For> performs the action of the for loop and while loop

const names = ["Mike", "John", "Eliot"]

const App = (
    <For each="name" of={names}>
        {console.log(name)}
    </For>
)
```

:::info
 The `each` trait is a reference to the current item of the array which can be used within the body as variable. The `of` trait is used to define the array to iterate over. This can also be a collection (Immutable.js) or anything on which a function with the name map can be called.
:::

```jsx
//Output same as before

const App = (
    <For each="name" of={["Mike", "John", "Eliot"]}>
        {console.log(name)}
    </For>
)
```

### Rendering to DOM

The `<For>` tag can also return valid JSX for rendering to the browser.

```jsx
const App = (
    <For each="name" of={["Mike", "John", "Eliot"]}>
        <h1 key={name}>{name}</h1>
    </For>
)
```

:::info
 The `key` trait is used to pass in a unique id that uniquely identifies the element.
:::

```jsx
//alternative usage for the <For> tag

const item = [
    {"id":1,"title":"Game of thrones"}
    {"id":2,"title":"Flight (2012)"}
]

const App = (
    <For
        of={items}
        body={(item, index) => (
            <span key={item.id}>
            {index}. {item.title}
            </span>
        )}
    />
)
```

## `VelteReturn()`

`VelteReturn()` can be used to `return` out of loops in components.

```jsx

//inside class component
render(){
    return(
        <div>
            <For each="name" of={["Mike", "John", "Eliot"]}>
                {console.log(name)}
                <If condition={name == "John"}>
                    {this.VelteReturn()}
                </If>
            </For>
        </div>
    )
}
```
:::caution
 Calling return directly inside a `<For>` tag doesn't work and returns `undefined` if returning JSX.
:::

