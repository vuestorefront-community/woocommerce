import {
  Context
} from '@vue-storefront/core';
import type { UpdateCartParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const updateCartCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<UpdateCartParams>): Promise<any> => {
    // console.log('[WooCommerce] update cart params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postCart({ cartMethod: 'update', ...params});

    // console.log('[Result]:', { data });

    return data;
  }
};
