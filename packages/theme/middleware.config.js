module.exports = {
  integrations: {
    woocommerce: {
      location: '@vue-storefront/woocommerce-api/server',
      configuration: {
        api: process.env.WOOCOMMERCE_GRAPHQL,
        wishlist: true
      }
    }
  }
};
