import { Context } from '@vue-storefront/core';

export const getShippingAddressCommand = {
  execute: async (context: Context): Promise<any> => {
    const data = await context.$woocommerce.api.getShippingAddress();

    // console.log('[Result]:', { data });

    return data;
  }
};
