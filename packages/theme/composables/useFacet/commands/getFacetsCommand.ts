import {
  Context
} from '@vue-storefront/core';
import type { FacetSearchResult, GetFacetSearchParams } from '../../types';
import { ComposableFunctionArgs } from '~/composables/types';

export const getFacetsCommand = {
  execute: async (context: Context, params: ComposableFunctionArgs<GetFacetSearchParams>): Promise<FacetSearchResult<any>> => {
    // console.log('[WooCommerce] get facets params input:', JSON.stringify(params, null, 2));

    const data = await context.$woocommerce.api.getFacet(params);

    // console.log('[Result]:', { data });

    return { data, input: params };
  }
};
