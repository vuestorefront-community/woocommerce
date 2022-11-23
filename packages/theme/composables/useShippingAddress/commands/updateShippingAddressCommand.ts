import { Context } from '@vue-storefront/core';
import { UpdateShippingAddressParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const updateShippingAddressCommand = {
  execute: async (
    context: Context,
    params: ComposableFunctionArgs<UpdateShippingAddressParams>
  ): Promise<any> => {
    // console.log('[WooCommerce] update shipping address params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postShippingAddress(params);

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
