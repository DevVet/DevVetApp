# DevVet

This is the website that is under development for the DevVet Discord Community

## Setup environmnet

- `git clone https://github.com/DevVet/DevVetApp.git`
- `cd DevVetApp`
- `yarn` to install dependancies

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn dev

# or start the server and open the app in a new browser tab
yarn dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
yarn build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
