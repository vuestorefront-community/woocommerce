import {
  Context
} from '@vue-storefront/core';
import type { Category, GetCategorySearchParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const getCategoriesCommand = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute: async (context: Context, params: ComposableFunctionArgs<GetCategorySearchParams>): Promise<Category[]> => {
    // console.log('[WooCommerce] get categories params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.getCategory();

    // console.log('[Result]:', { data });

    return data;
  }
};
