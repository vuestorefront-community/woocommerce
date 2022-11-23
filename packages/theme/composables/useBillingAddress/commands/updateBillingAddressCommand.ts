import { Context } from '@vue-storefront/core';
import { UpdateBillingAddressParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const updateBillingAddressCommand = {
  execute: async (
    context: Context,
    params: ComposableFunctionArgs<UpdateBillingAddressParams>
  ): Promise<any> => {
    // console.log('[WooCommerce] update billing address params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postBillingAddress(params);

    if (data.error) {
      throw new Error(
        data.message ||
          `An unknown error occurred with status code: ${data.data.status}`
      );
    }

    // console.log('[Result]:', { data });

    return data;
  }
};
