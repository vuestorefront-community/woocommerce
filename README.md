<div align="center">
<img src="https://user-images.githubusercontent.com/1626923/137092657-fb398d20-b592-4661-a1f9-4135db0b61d5.png" height="80px"/>  
</div>

### Stay connected

[![GitHub Repo stars](https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social)](https://github.com/vuestorefront/vue-storefront)
[![Twitter Follow](https://img.shields.io/twitter/follow/vuestorefront?style=social)](https://twitter.com/vuestorefront)
[![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social)](https://www.youtube.com/c/VueStorefront)
[![Discord](https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white)](https://discord.vuestorefront.io)

## Vue Storefront 2 integration with woocommerce

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Wordpress config
1. Install the following open source Wordpress Plugin into your WP store:
   - [Vue Storefront WooCommerce Integration](https://github.com/SwiftComZA/vsf-wc-api)

Note: This plugin is still in development and has no major release yet. The development of this plugin is being done in parallel with this integration.

## How to start?

1. Prepare your wordpress installation as above.

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

## How to start if you want to contribute?

Want to contribute? Ping us on `woocommerce` channel on [our Discord](https://discord.vuestorefront.io)!

### Requirements:
- NodeJS v14 or later

### Steps
1. Fork the repo
2. Clone your fork of the repo
    ```
    example:
    git clone https://github.com/vuestorefront/woocommerce.git
    cd woocommerce
    ```
3. Run `yarn` to install dependencies
4. Build dependencies `yarn build:api-client && yarn build:composables`
5. Run `yarn dev:theme` to run theme. You can find other commands in `package.json`

- If you need HMR on Api Client/Composables run `yarn dev:api-client` or `yarn dev:composables` on a separate terminal window.

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [woocommerce integration Documentation](https://docs.vuestorefront.io/woocommerce)
- [Community Chat](https://discord.vuestorefront.io)

## Support

If you have any questions about this integration we will be happy to answer them on `woocommerce` channel on [our Discord](discord.vuestorefront.io).

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/andreasradloff"><img src="https://avatars.githubusercontent.com/u/1256982?v=4?s=80" width="80px;" alt=""/><br /><sub><b>andreasradloff</b></sub></a><br /><a href="https://github.com/vuestorefront/woocommerce/commits?author=andreasradloff" title="Code">💻</a></td>
   <td align="center"><a href="https://github.com/jack-of-blades"><img src="https://avatars.githubusercontent.com/u/48649182?s=96&v=4" width="80px;" alt=""/><br /><sub><b>jack-of-blades</b></sub></a><br /><a href="https://github.com/vuestorefront/woocommerce/commits?author=jack-of-blades" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
