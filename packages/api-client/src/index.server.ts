import { createWooConnection } from './helpers/woocommerceLink';
import { defaultSettings } from './helpers/apiClient/defaultSettings';
import { apolloClientFactory } from './helpers/woocommerceLink/graphQlclient';
import { apiClientFactory, ApiClientExtension } from '@vue-storefront/core';
import { ClientInstance, Config } from './types/setup';
import getProduct from './api/getProduct';
import getCategory from './api/getCategory';
import getCart from './api/getCart';
import addToCart from './api/addToCart';
import clearCart from './api/clearCart';
import updateCart from './api/updateCart';
import getMe from './api/getMe';
import addToWishlist from './api/addToWishlist';
import removeFromWishlist from './api/removeFromWishlist';
import clearWishlist from './api/clearWishlist';
require('dotenv').config();

const onCreate = (settings: Config): { config: Config; client: ClientInstance } => {
  const config = {
    ...defaultSettings,
    ...settings,
    state: settings.state || defaultSettings.state
  } as unknown as Config;

  const { apolloLink } = createWooConnection(config);

  const client = apolloClientFactory({
    link: apolloLink,
    ...settings.customOptions
  });
  return {
    config,
    client
  };
};

const tokenExtension: ApiClientExtension = {
  name: 'tokenExtension',
  hooks: (req, res) => {
    return {
      beforeCreate: ({ configuration }) => {
        const sessionCookieName = configuration.cookies?.sessionCookieName || defaultSettings.cookies.sessionCookieName;
        const customerCookieName = configuration.cookies?.customerCookieName || defaultSettings.cookies.customerCookieName;
        const storeCookieName = configuration.cookies?.storeCookieName || defaultSettings.cookies.storeCookieName;

        return {
          ...configuration,
          state: {
            getSession: () => req.cookies[sessionCookieName],
            setSession: (id) => {
              if (!id) {
                // eslint-disable-next-line no-param-reassign
                delete req.cookies[sessionCookieName];
                return;
              }
              res.cookie(sessionCookieName, id);
            },
            getCustomerToken: () => req.cookies[customerCookieName] ? req.cookies[customerCookieName] : null,
            setCustomerToken: (token) => {
              if (!token) {
                // eslint-disable-next-line no-param-reassign
                delete req.cookies[customerCookieName];
                return;
              }
              res.cookie(customerCookieName, token);
            },
            getStore: () => req.cookies[storeCookieName],
            setStore: (id) => {
              if (!id) {
                // eslint-disable-next-line no-param-reassign
                delete req.cookies[storeCookieName];
                return;
              }
              res.cookie(storeCookieName, JSON.stringify(id));
            }
          }
        };
      }
    };
  }
};

const { createApiClient } = apiClientFactory({
  onCreate,
  api: {
    addToCart,
    addToWishlist,
    clearCart,
    clearWishlist,
    getProduct,
    getCategory,
    getCart,
    getMe,
    removeFromWishlist,
    updateCart
  },
  extensions: [tokenExtension]
});

export {
  createApiClient
};
