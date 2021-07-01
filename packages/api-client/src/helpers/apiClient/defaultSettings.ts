import { ClientConfig } from '../../types/setup';

export const defaultSettings: ClientConfig = {
  api: '',
  cookies: {
    currencyCookieName: 'vsf-currency',
    countryCookieName: 'vsf-country',
    localeCookieName: 'vsf-locale',
    sessionCookieName: 'wordpress_logged_in_vsf',
    customerCookieName: 'vsf-customer',
    storeCookieName: 'vsf-store'
  },
  currency: 'USD',
  wishlist: false,
  state: {
    getSession: () => '',
    setSession: () => {},
    getCustomerToken: () => '',
    setCustomerToken: () => {},
    getStore: () => '',
    setStore: () => {}
  },
  externalCheckout: {
    enable: false,
    syncUrlPath: '/vue/cart/sync',
    stores: {},
    cmsUrl: ''
  }
};
