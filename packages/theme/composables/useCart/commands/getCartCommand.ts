import {
  Context
} from '@vue-storefront/core';

export const getCartCommand = {
  execute: async (context: Context): Promise<any> => {
    const data = await context.$woocommerce.api.getCart();

    // console.log('[Result]:', { data });

    return data;
  }
};
