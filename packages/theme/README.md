# Starter theme for Vue Storefront 2

When searching for solutions, make sure you read the documentation for Vue Storefront 2 (also called "Next") and not v1!

## Local wordpress or use stage
Copy the .env.example in this directory to .env and modify endpoint. Make sure to enable GraphQL and GraphQL Woo plugin in Wordpress.

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

## Theming

Copy the files you want to override from the [base theme](https://github.com/vuestorefront/vue-storefront/tree/next/packages/core/nuxt-theme-module/theme) and place them in the same directory in this theme.

The files needed in the Woo theme that are not in the base theme are listed [here](https://docs.vuestorefront.io/v2/integrate/integration-guide.html#creating-a-theme).


### Official documentation

[Theming guide for VSF2](https://docs.vuestorefront.io/v2/guide/theme.html)
