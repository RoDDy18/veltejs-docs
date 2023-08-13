---
sidebar_position: 1
---

# Application Structure

VelX doesn't really restrict how you structure your code. Rather, it enforces a set of high-level principles:

1. Application-level state is centralized in the store.

2. The only way to mutate the state is by committing **mutations**, which are synchronous transactions through **actions**.

4. Asynchronous logic should be encapsulated in, and can be composed with **actions**.

As long as you follow these rules, it's up to you how to structure your project. If your store file gets too big, simply start splitting the actions, mutations and states into separate files.