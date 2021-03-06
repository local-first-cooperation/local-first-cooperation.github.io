# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm i
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Pushing to the `master` branch will run a deployment via github actions to update the `gh-pages` branch accordingly.
Publishing to IPFS needs to be done on your local `ipfs` node: recursively add the `npm run build` result, convert the resulting hash using `ipfs cid base32`, and finally update the link on the website.
