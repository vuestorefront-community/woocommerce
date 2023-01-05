import { Context } from '@vue-storefront/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function postToken(context: Context, params: any): Promise<any> {
  // console.log('postLogin: Logging in user...');

  const url = new URL('/wp-json/jwt-auth/v1/token', context.config.api.url);

  // Get non-vsf cookies to pass along
  const cookies = Object.keys(context.req.cookies)
    .filter((key) => !key.startsWith('vsf-'))
    .map((key) => `${key}=${context.req.cookies[key]}`)
    .join('; ')
    .concat(';');

  // Use axios to send a POST request
  const { data, headers } = await context.client
    .post(url.href, params, {
      headers: {
        Cookie: cookies
      }
    })
    .catch((error) => ({
      data: { ...error.response.data, error: true },
      headers: error.response.headers
    }));

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

  if (data.token) {
    context.res.cookie('vsf-user-token', data.token);
    context.res.cookie('vsf-user-email', data.user_email);
    context.res.cookie('vsf-user-display-name', data.user_display_name);
  }

  // Return data from the API
  return data;
}
