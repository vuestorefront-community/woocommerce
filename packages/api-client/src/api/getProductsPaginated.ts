import { Context, AgnosticFacetSearchParams } from '@vue-storefront/core';

const availableSortingOptions = {
  name_ASC: {
    order: 'ASC',
    orderby: 'name'
  },
  name_DESC: {
    order: 'DESC',
    orderby: 'name'
  },
  id_ASC: {
    order: 'ASC',
    orderby: 'id'
  },
  id_DESC: {
    order: 'DESC',
    orderby: 'id'
  },
  date_ASC: {
    order: 'ASC',
    orderby: 'date'
  },
  date_DESC: {
    order: 'DESC',
    orderby: 'date'
  },
  price_ASC: {
    order: 'ASC',
    orderby: 'price'
  },
  price_DESC: {
    order: 'DESC',
    orderby: 'price'
  }
};

export async function getProductsPaginated(context: Context, params: AgnosticFacetSearchParams): Promise<any> {
  // console.log('getProduct: Fetching products...');

  // Prepare getProduct query parameters
  const getProductParams = {
    page: params?.page || 1,
    limit: params?.itemsPerPage || 20,
    categories: params?.categorySlug || '',
    order: params?.sort ? availableSortingOptions[params.sort].order : availableSortingOptions.name_ASC.order,
    orderby: params?.sort ? availableSortingOptions[params.sort].orderby : availableSortingOptions.name_ASC.orderby,
    paginate: params?.paginate || false
  };

  // Add each filter to the list of parameters and combine filter values into comma separated string
  const attributes = params?.filters || {};

  Object.keys(attributes).forEach(key => {
    if (attributes[key].length > 0) {
      getProductParams[key] = attributes[key].join(',');
    }
  });

  const url = new URL('/wp-json/vsf-wc-api/v1/products', context.config.api.url);

  Object.keys(getProductParams || {}).forEach(key => {
    url.searchParams.set(key, getProductParams[key]);
  });

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);

  // Return data from the API
  return data;
}
