---
sidebar_position: 5
---

# Conditional Rendering

This is literally what it sounds like, **"I would only render something when a condition is true, if not i'll render something else"**. This makes our web apps more dynamic.<br/>

Example: rendering the dashboard when someone is logged in or a session is started, if a session is **NOT** started render the home page.

## The `<If>...</If>` tag

This tag is used to render or perform actions when a certain condition is met. It's like your regular `If statement` but with tags.

```jsx
//JSX for velte syntax

const App = (
    <If condition = {"insert condition here"}>
        {/*perform action here*/}
    </If>
)
```

```js
//Javascript

if("insert condition here"){
    //perform action here
}
```

:::info
 The `condition` trait is used to pass JavaScript expressions inside Mustaches to the `<If>` tag for use.
:::

Full example:

```jsx
//This renders the "Dashboard" component if login is true

const login = true

const App = (
    <If condition = {login}>
        <Dashboard/>
    </If>
)
```

Javascript expressions are welcome.

```jsx
//This also renders the "Dashboard" component if login is true
const login = true

const App = (
    <If condition = {login == true}>
        <Dashboard/>
    </If>
)
```

## The `<When>...</When>` tag

This tag functions exactly like the `<If/>` tag. It is used along with the `<Otherwise>` tag for conditional rendering.

```jsx
//The <When> tag functions like the <If> tag
const number = 0

const App = (
<When condition = {number == 0}>
    {number = number + 1}
</When>)
```

## The `<Otherwise>...</Otherwise>` tag

This tag functions exactly like an `else statement`. It is used along with the `<When>` tag for conditional rendering.

```jsx
//The <Otherwise> tag will execute it's body.
const number = 1

const App = (
<Choose>
    <When condition = {number == 0}>
        {number = number + 1}
    </When>
    <Otherwise>
        {console.log("number is not 0")}
    </Otherwise>
</Choose>
)
```

## The `<Choose>...</Choose>` tag

This tag is used to house the `<When>` and `<Otherwise>` tag.

```jsx
//The <Choose> tag houses <When> and <Otherwise>
const login = true

const loginDashboard = ()=>{
    return <Dashboard/>
}

const promptLogin = ()=>{
    return <Homepagelogin/>
}

const App = (
<Choose>
    <When condition = {login}>
        {loginDashboard()}
    </When>
    <Otherwise>
        {promptLogin()}
    </Otherwise>
</Choose>
)
```

:::tip
 You can have multiple `<When>` tags and **only ONE** `<Otherwise>` in one `<Choose>` tag as the root, this would simulate a `if...else if...else` condition or a `switch statement`
:::


```jsx
//Multiple cases in velte JSX syntax
const message = "Hello World"

const App = (
<Choose>
    <When condition = {message == "Hi"}>
        {console.log(`${message}`)}
    </When>
    <When condition = {message == "Hello World"}>
        {console.log(`${message}`)}
    </When>
    <Otherwise>
        {console.log(`${message}`)}
    </Otherwise>
</Choose>
)
```

```js
//Multiple cases in Javascript
const message = "Hello World"

if(message == "Hi"){
    console.log(`${message}`)
}else if (message == "Hello World"){
    console.log(`${message}`)
}else{
    console.log(`${message}`)
}
```

On an unrelated note :
## The `<with>...</With>` Tag

This tag is used to assign local variables :

```jsx
<With foo={ 47 } bar={ "test" }>
  <span>{ foo }</span>
  <span>{ bar }</span>
</With>
```