# Svelte Electron Template

This is a project template for [Svelte](https://svelte.dev) app with electron.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit zinsani/svelte-electron-template my-app
cd my-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd my-app
npm install
```

...then start electron

```bash
npm start
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build

To package app with electron-builder for windows platform

npm run dist
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

If you want to use `baseUrl` or `path` aliases within your `tsconfig`, you need to set up `@rollup/plugin-alias` to tell Rollup to resolve the aliases. For more info, see [this StackOverflow question](https://stackoverflow.com/questions/63427935/setup-tsconfig-path-in-svelte).
