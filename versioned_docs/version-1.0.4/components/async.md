---
sidebar_position: 4
---


# Async components

:::info 
To use `async/await` functionality in velte, simple mark the function or method with the `async` keyword and perform your async tasks.
:::

```jsx title="FetchPokemon.js"
async function FetchPokemon ({character}){
    const url = `https://pokeapi.co/api/v2/pokemon/${character}`
    const req = fetch(url)
    const res = await req.json()
    return (<p>{res.abilities[0].ability.name}</p>)
}

const App = <FetchPokemon character = "ditto"/>
```