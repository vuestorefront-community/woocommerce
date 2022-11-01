import { Context } from '@vue-storefront/core';

export async function getCart(context: Context): Promise<any> {
  console.log('getCart: Fetching cart...');

  const url = new URL('/wp-json/vsf-wc-api/v1/cart', context.config.api.url);

  // Get non-vsf cookies to pass along
  const cookies = Object.keys(context.req.cookies).filter((key) => !key.startsWith('vsf-'))
    .map((key) => `${key}=${context.req.cookies[key]}`).join('; ').concat(';');

  // Use axios to send a GET request
  const { data, headers } = await context.client.get(url.href, {
    headers: {
      Cookie: cookies
    }
  });

  // Get set-cookie header from response and pass along
  if (headers['set-cookie']) {
    // If in dev environment, remove 'secure' flag from header
    if (context.config.environment === 'development') {
      context.res.setHeader('set-cookie', headers['set-cookie'].map((cookie) => cookie.replace('secure; ', '')));
    } else {
      context.res.setHeader('set-cookie', headers['set-cookie']);
    }
  }

  // Return data from the API
  return data;
}
