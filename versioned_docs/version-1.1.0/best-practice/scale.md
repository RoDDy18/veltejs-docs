---
sidebar_position: 1
---

# Scaling Up

To ensure your application scales well as it grows bigger, follow these tips:

## Project Structure


The starter kits' project structure was built for scaling. Meaning as your project gets bigger and bigger, project managment wouldn't be a pain in the butt.
Your entire application lives in the `src` directory and the entry point for your application is usually `src/App.jsx` this can be changed. 
- All components should live in the `src/components` directory.
- All styles should live in the `src/style` directory or `src/style.css`
- All assets should live in the `src/assets` directory.

## Single-File Components

It is recommended to keep all your project components separate in a single `.jsx` files in the `src/components` directory then export the function or class component with the `export` keyword. Import the component into your `.jsx` entry point or another component file.

Below is an example of a class component that has been exported for use else where.

```jsx title="Counter.jsx"
import { VelteComponent, VelteElement } from "velte"

export default class Counter extends VelteComponent{
    state = {
      count : 0
    }
  
    add = ()=> {
      this.setState({count: this.state.count + 1})
    }

    render(){
        return (
            <button v-on:click={this.add}>
        		Count is {this.state.count}
        	</button>
        )
    }
}

```

```jsx title="App.jsx"
import { VelteRender, VelteElement } from "velte"
import { Counter } from "./components/Counter"

const Home = ({})=>{
  return (
  	<div>
    	<h1>Home Page</h1>
         <Counter/>
    </div>
  )
}

VelteRender(<Home/>, document.getElementByID("app"))

```

:::note
The Class component `<Counter/>` from `Counter.jsx` component was imported into the entry file `App.jsx`, a Funcion component `<Home/>` was created and mounted to the DOM with `VelteRender`
:::
