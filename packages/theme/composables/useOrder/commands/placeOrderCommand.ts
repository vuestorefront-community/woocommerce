import { Context } from '@vue-storefront/core';
import type { PlaceOrderParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const placeOrderCommand = {
  execute: async (
    context: Context,
    params: ComposableFunctionArgs<PlaceOrderParams>
  ): Promise<any> => {
    // console.log('[WooCommerce] place order params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postOrder(params);

    // console.log('[Result]:', { data });

    return data;
  }
};
