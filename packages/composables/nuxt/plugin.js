import { integrationPlugin } from '@vue-storefront/core';
import defaultConfig from '@vue-storefront/woocommerce/nuxt/defaultConfig';
import { mapConfigToSetupObject } from '@vue-storefront/woocommerce/nuxt/helpers';


const moduleOptions = JSON.parse('<%= JSON.stringify(options) %>');

export default integrationPlugin(({ app, integration }) => {
  const sessionCookieName = moduleOptions.cookies?.sessionCookieName || defaultConfig.cookies.sessionCookieName;
  const customerCookieName = moduleOptions.cookies?.customerCookieName || defaultConfig.cookies.customerCookieName;
  const storeCookieName = moduleOptions.cookies?.storeCookieName || defaultConfig.cookies.storeCookieName;

  const getSession = () => app.$cookies.get(sessionCookieName);

  const setSession = (id) => {
    if (!id) {
      //app.$cookies.remove(sessionCookieName);
      return;
    }
    app.$cookies.set(sessionCookieName, id);
  };

  const getCustomerToken = () => app.$cookies.get(customerCookieName);

  const setCustomerToken = (token) => {
    if (!token) {
      //app.$cookies.remove(customerCookieName);
      return;
    }
    app.$cookies.set(customerCookieName, token);
  };

  const getStore = () => app.$cookies.get(storeCookieName);

  const setStore = (id) => {
    if (!id) {
      app.$cookies.remove(storeCookieName);
      return;
    }
    app.$cookies.set(storeCookieName, id);
  };

  const settings = mapConfigToSetupObject({
    moduleOptions,
    app,
    additionalProperties: {
      state: {
        getSession,
        setSession,
        getCustomerToken,
        setCustomerToken,
        getStore,
        setStore,
      },
    }
  });

  integration.configure('woocommerce', settings);
});
