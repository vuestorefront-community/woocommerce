import {
  Context
} from '@vue-storefront/core';
import type { PostRegisterParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const postRegisterCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<PostRegisterParams>): Promise<any> => {
    // console.log('[WooCommerce] register params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.postRegister(params);

    if (data.error) {
      throw new Error(data.message || `An unknown error occurred with status code: ${data.data.status}`);
    }

    // console.log('[Result]:', { data });

    return data;
  }
};
