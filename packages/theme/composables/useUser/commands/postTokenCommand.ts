import {
  Context
} from '@vue-storefront/core';
import type { PostTokenParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const postTokenCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<PostTokenParams>): Promise<any> => {
    // console.log('[WooCommerce] login params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postToken(params);

    // console.log('[Result]:', { data });

    return data;
  }
};
