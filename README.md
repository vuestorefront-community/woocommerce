![Vue Storefront](https://camo.githubusercontent.com/48c886ac0703e3a46bc0ec963e20f126337229fc/68747470733a2f2f643968687267346d6e767a6f772e636c6f756466726f6e742e6e65742f7777772e76756573746f726566726f6e742e696f2f32383062313964302d6c6f676f2d76735f3062793032633062793032633030303030302e6a7067)

# WooCommerce integration for Vue Storefront Next

> **Disclaimer:** This project is still in beta phase and we are looking for contributors! Please write in the [Vue Storefront Discord](https://discord.vuestorefront.io/) 

This repository is a work in progress integration for [Vue Storefront Next](https://github.com/vuestorefront/vue-storefront/).

* [General integration documentation](https://docs.vuestorefront.io/v2/integrate/integration-guide.html) (WIP)


This repository is a monorepo containing three projects:

* **api-client** - communicates with a backend;
* **composables** - exposes composable functions used to retrieve data using `api-client` and to map them to universal data formats using `getters`;
* **theme** - `nuxt` project that glues everything together. It extends our core theme and uses `composables` to retrieve data.

## How to start?

1. Install the free open source Wordpress Plugin [WPGraphQL WooCommerce (WooGraphQL)](https://github.com/wp-graphql/wp-graphql-woocommerce) into your WP store

2. Copy .env.example to .env inside packages/theme and enter your wordpress site URL with GraphQL endpoint.

3. Install all required dependencies:

```sh
yarn install
```

5. (optional) Then you can verify if everything works properly by building all three projects:

```sh
yarn build
```

6. If everything built properly, you can start developing with:

```sh
yarn dev
```
