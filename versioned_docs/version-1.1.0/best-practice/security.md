---
sidebar_position: 3
---

# Security

## Report Vulnerabilities

When a vulnerability is reported, it becomes our immediate concern. 
We always ensure the issue gets fixed in a patch update if critical or the next update.

:::info
 vulnerabilities wold also be fixed for supported LTS versions.
:::

We recommend using the latest version of velte and it's official documentation to ensure your application remains secure as possible.


## How Velte Protects You

Since velte uses JSX for templating, all your content live inside JSX. This helps prevent risks of XSS exploits, JSX forces automatic escaping in expressions `{...}`.

:::tip
 we recommend using the `sanitize URL` npm package in your applications to protect against dangerous URI schemes.
:::





