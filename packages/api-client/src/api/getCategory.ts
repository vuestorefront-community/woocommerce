import { Context } from '@vue-storefront/core';

export async function getCategory(context: Context): Promise<any> {
  // console.log('getCategory: Fetching categories...');

  const url = new URL('/wp-json/vsf-wc-api/v1/categories', context.config.api.url);

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);

  // Return data from the API
  return data;
}
