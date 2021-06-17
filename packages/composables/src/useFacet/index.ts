import { useFacetFactory, FacetSearchResult, Context } from '@vue-storefront/core';
import { FacetResultsData } from './../types';
import type { Product } from '@vue-storefront/woocommerce-api';

// TODO: move to the config file
const ITEMS_PER_PAGE = [20, 40, 100];

const factoryParams = {
  search: async (context: Context, params: FacetSearchResult<FacetResultsData>): Promise<FacetResultsData> => {
    const itemsPerPage = params.input.itemsPerPage;

    const categories = [];
    const filters = [];

    const productResponse = await context.$woocommerce.api.getProduct({
      catId: 1,
      limit: itemsPerPage,
      offset: (params.input.page - 1) * itemsPerPage,
      filters
    });

    // Ths is how commercetools does it:
    // const enhancedProductResponse = enhanceProduct(productResponse, context);
    // const products = (enhancedProductResponse.data as any)._variants as ProductVariation[];
    const products = (productResponse.data?.products?.edges || []).map((item) : Product => item.node);

    const facets = null;
    // const facets = getFiltersFromProductsAttributes(products);

    return {
      products,
      categories,
      facets,
      total: 1,
      perPageOptions: ITEMS_PER_PAGE,
      itemsPerPage
    };
  }
};

export default useFacetFactory<FacetResultsData>(factoryParams);
