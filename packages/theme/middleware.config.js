module.exports = {
  integrations: {
    woocommerce: {
      location: '@vue-storefront/woocommerce-api/server',
      configuration: {
        api: {
          url: process.env.VSF_WC_API_URL
        }
      }
    }
  }
};
