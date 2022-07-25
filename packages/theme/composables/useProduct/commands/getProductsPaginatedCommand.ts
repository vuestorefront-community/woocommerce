import {
  Context
} from '@vue-storefront/core';
import type { GetProductsPaginatedSearchParams, Product } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const getProductsPaginatedCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<GetProductsPaginatedSearchParams>): Promise<Array<Product>> => {
    // console.log('[WooCommerce] get products paginated params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.getProduct(params);

    // console.log('[Result]:', { data });

    return data;
  }
};
