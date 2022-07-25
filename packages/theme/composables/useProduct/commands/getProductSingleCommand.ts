import {
  Context
} from '@vue-storefront/core';
import type { GetProductSingleSearchParams, Product } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const getProductSingleCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<GetProductSingleSearchParams>): Promise<Product> => {
    // console.log('[WooCommerce] get product single params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.getProduct(params);

    // console.log('[Result]:', { data });

    return data;
  }
};
