import {
  Context
} from '@vue-storefront/core';
import type { AddToCartParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const addToCartCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<AddToCartParams>): Promise<any> => {
    // console.log('[WooCommerce] add to cart params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postCart({ cartMethod: 'add', ...params});

    // console.log('[Result]:', { data });

    return data;
  }
};
