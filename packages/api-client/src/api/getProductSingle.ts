import { Context, AgnosticFacetSearchParams } from '@vue-storefront/core';

export async function getProductSingle(context: Context, params: AgnosticFacetSearchParams): Promise<any> {
  console.log('getProduct: Fetching single product...');

  const url = new URL(`/wp-json/vsf-wc-api/v1/products/${params.id}`, context.config.api.url);

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);

  // Return data from the API
  return data;
}
