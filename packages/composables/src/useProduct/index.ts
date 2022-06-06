import {
  Context,
  useProductFactory,
  UseProductFactoryParams,
  AgnosticFacetSearchParams
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/woocommerce-api';
import type {
  UseProductSearchParams as SearchParams
} from '../types';

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params: AgnosticFacetSearchParams) => {
    const data = await context.$woocommerce.api.getProduct(params);
    return data;
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
