import { Context } from '@vue-storefront/core';
import type { GetOrderParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const getOrderCommand = {
  execute: async (
    context: Context,
    params: ComposableFunctionArgs<GetOrderParams>
  ): Promise<any> => {
    // console.log('[WooCommerce] get order params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.getOrder(params);

    // console.log('[Result]:', { data });

    return data;
  }
};
