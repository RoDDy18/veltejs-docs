---
sidebar_position: 11
---

# Fragments

A common pattern in Velte is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

A common pattern is for a component to return a list of children. Take this example React snippet:

```jsx title="Table.jsx"
const Table = ()=> {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    )
}
```

`<Columns />` would need to return multiple `<td>` elements in order for the rendered HTML to be valid. If a parent div was used inside the render() of `<Columns />`, then the resulting HTML will be invalid.

```jsx title="Columns.jsx"
const Columns = ()=> {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    )
}
```

results in a `<Table />` output of:

```jsx
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

Fragments solve this problem.

## Usage

To use fragments in Velte, we use the `v-wrap` tag:

```jsx title="Columns.jsx"
const Columns = ()=> {
    return (
      <v-wrap>
        <td>Hello</td>
        <td>World</td>
      </v-wrap>
    )
}
```

which results in a correct `<Table />` output of:

```jsx
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>

```