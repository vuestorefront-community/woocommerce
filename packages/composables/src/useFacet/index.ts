import {
  Context,
  useFacetFactory,
  FacetSearchResult
} from '@vue-storefront/core';
import type {
  UseFacetSearchParams as SearchParams
} from '../types';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<SearchParams>) => {
    params.input = params?.input || {};

    params.input.facet = true;

    const data = await context.$woocommerce.api.getProduct(params.input);
    return data;
  }
};

export const useFacet = useFacetFactory<SearchParams>(factoryParams);
