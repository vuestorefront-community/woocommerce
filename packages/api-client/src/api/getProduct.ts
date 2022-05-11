import { Context } from '@vue-storefront/core';

export async function getProduct(context: Context): Promise<any> {
  console.log('Fetching products');
  const url = new URL('/wp-json/vsf-wc-api/v1/products', context.config.api.url);

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);

  // Return data from the API
  return data;
}
