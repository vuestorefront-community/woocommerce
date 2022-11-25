import { Context } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getOrder(context: Context, params: any): Promise<any> {
  console.log('getOrder: Fetching order...: ', params);

  const url = new URL(
    `/wp-json/vsf-wc-api/v1/order/${params.id}`,
    context.config.api.url
  );

  // Get non-vsf cookies to pass along
  const cookies = Object.keys(context.req.cookies)
    .filter((key) => !key.startsWith('vsf-'))
    .map((key) => `${key}=${context.req.cookies[key]}`)
    .join('; ')
    .concat(';');

  const requestHeaders = {
    Cookie: cookies
  };

  if (context.req.cookies['vsf-user-token']) {
    Object.assign(requestHeaders, {
      Authorization: `Bearer ${context.req.cookies['vsf-user-token']}`
    });
  }

  // Use axios to send a GET request
  const { data, headers } = await context.client.get(url.href, {
    headers: requestHeaders
  });

  // Get set-cookie header from response and pass along
  if (headers['set-cookie']) {
    // If in dev environment, remove 'secure' flag from header
    if (context.config.environment === 'development') {
      context.res.setHeader(
        'set-cookie',
        headers['set-cookie'].map((cookie) => cookie.replace('secure; ', ''))
      );
    } else {
      context.res.setHeader('set-cookie', headers['set-cookie']);
    }
  }

  // Return data from the API
  return data;
}
