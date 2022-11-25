import { Context } from '@vue-storefront/core';

export async function getPaymentMethod(context: Context): Promise<any> {
  // console.log('getPaymentMethod: Fetching payment methods...');

  const url = new URL('/wp-json/vsf-wc-api/v1/payment', context.config.api.url);

  // Use axios to send a GET request
  const { data } = await context.client.get(url.href);

  // Return data from the API
  return data;
}
