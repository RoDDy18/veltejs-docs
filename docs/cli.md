---
sidebar_position: 3
---

# CLI

Bootstrap your new velte projects with the official CLI tool `create-velte-app`

To install CLI globally, run:

```shell
npm i -g create-velte-app
```

## CLI Arguments

Below are the CLI arguments that can be parsed when bootstrapping your project:

```
'--git': Boolean,
'--yes': Boolean,
'--install': Boolean,
'--spa': Boolean,
'--state-managment': Boolean,
'--lint': Boolean,
'--css': Boolean,
'-g': '--git',
'-y': '--yes',
'-i': '--install',
'-s': '--spa',
'-m': '--state-managment',
'-l': '--lint',
'-c': '--css'
```

### `--git, -g`
This argument initializes git for your project.

### `--yes, -y`
This argument will skip all prompts and use the default prompt options.

### `--install, -i`
This argument will automatically install all project dependencies.

### `--spa, -s`
This argument will configure SPA with some preconfigured routes in your application.

### `--state-managment, -m`
This argument will configure a global state managment solution with some preconfigured states in your application.

### `--lint, -l`
This argument will configure a code linter for code quality.

### `--css, -c`
This argument will configure a pre build design system for your application with [Tailwind CSS](https://tailwindcss.com/).



## Bootstrapping a new Velte App

Let's quickly bootstrap a velte application with the CLI:

* Create a folder, ours will be called `test-app` and open your cmd with the folder directory.

```shell
mkdir test-app
cd test-app
```

* Run CLI and pass in `--install` or `-i`

```shell
create-velte-app --install
```

* Answer all prompts as required by your project

```
$ create-velte-app --install

Velte 2 - The Cordial JS Framework.

? Choose a version of Velte.js you would like to use for your project Velte v2 (rc)
? Please choose which project template to use rspack
? Initialize a git repository? No
? Add Router for Single Page App development? Yes
? Add VelX for state managment? Yes
? Add Tailwind CSS for design system? Yes
? Add ESLint for code quality? Yes
  √ Copying project files
  √ Installing project dependencies
DONE Project ready
```

* Great, your velte project has successfully been bootstrapped, now run to start the dev server on `localhost:3030` :

```shell
npm run dev
```

