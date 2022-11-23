import { Context } from '@vue-storefront/core';

export const getBillingAddressCommand = {
  execute: async (context: Context): Promise<any> => {
    const data = await context.$woocommerce.api.getBillingAddress();

    // console.log('[Result]:', { data });

    return data;
  }
};
