import {
  Context,
  useProductFactory,
  ProductsSearchParams,
  UseProductFactoryParams
} from '@vue-storefront/core';
import { ProductsResponse } from '../types';

const params: UseProductFactoryParams<ProductsResponse, any> = {
  productsSearch: async (context: Context, params: ProductsSearchParams): Promise<ProductsResponse> => {
    const { customQuery, ...searchParams } = params;

    const productResponse = await context.$woocommerce.api.getProduct(searchParams, customQuery);

    const data = productResponse.data?.products?.edges[0]?.node;

    return {
      ...data,
      total: 1
    };
  }
};

export default useProductFactory<ProductsResponse, any>(params);
