import {
  Context,
  useProductFactory,
  UseProductFactoryParams,
  AgnosticFacetSearchParams
} from '@vue-storefront/core';
import type { Product, ProductsResult } from '@vue-storefront/woocommerce-api';
import type {
  UseProductSearchParams as SearchParams
} from '../types';

const params: UseProductFactoryParams<ProductsResult, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params: AgnosticFacetSearchParams) => {
    params.paginate = true;

    const data = await context.$woocommerce.api.getProduct(params);
    return data;
  }
};

export const useProduct = useProductFactory<ProductsResult, SearchParams>(params);
