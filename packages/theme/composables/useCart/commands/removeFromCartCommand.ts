import {
  Context
} from '@vue-storefront/core';
import type { RemoveFromCartParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const removeFromCartCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<RemoveFromCartParams>): Promise<any> => {
    // console.log('[WooCommerce] remove from cart params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postCart({ cartMethod: 'remove', ...params});

    // console.log('[Result]:', { data });

    return data;
  }
};
