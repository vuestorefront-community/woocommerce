import { Context } from '@vue-storefront/core';

export const getPaymentMethodsCommand = {
  execute: async (context: Context): Promise<any> => {
    const data = await context.$woocommerce.api.getPaymentMethod();

    // console.log('[Result]:', { data });

    return data;
  }
};
