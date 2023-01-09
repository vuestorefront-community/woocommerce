import { Context, AgnosticFacetSearchParams } from '@vue-storefront/core';

export async function getFacet(
  context: Context,
  params: AgnosticFacetSearchParams
): Promise<any> {
  // console.log('getFacet: Fetching facets');

  // Prepare getProduct query parameters
  const getProductParams = {
    categories: params?.categorySlug || ''
  };

  if (params.id) {
    Object.assign(getProductParams, { id: params.id });
  }

  // Add each filter to the list of parameters and combine filter values into comma separated string
  const attributes = params?.filters || {};

  Object.keys(attributes).forEach((key) => {
    if (attributes[key].length > 0) {
      getProductParams[key] = attributes[key].join(',');
    }
  });

  const url = new URL('/wp-json/vsf-wc-api/v1/facets', context.config.api.url);

  Object.keys(getProductParams || {}).forEach((key) => {
    url.searchParams.set(key, getProductParams[key]);
  });

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);

  // Return data from the API
  return data;
}
