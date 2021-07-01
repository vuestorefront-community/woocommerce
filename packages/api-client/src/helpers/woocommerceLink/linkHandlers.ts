import { Logger } from '@vue-storefront/core';
import { setContext } from 'apollo-link-context';
import { ConfigState } from '../../types/setup';
import { ApolloLink } from 'apollo-link';
import { parse as parseCookie } from 'cookie';

export const authLinkFactory = ({ state, cookiesConfig }: {
  state: ConfigState;
  cookiesConfig: any
}) => setContext((apolloReq, { headers }) => {
  Logger.debug('Apollo authLinkFactory', apolloReq.operationName);

  const token: string = state.getCustomerToken();
  const session: string = state.getSession();
  const { sessionCookieName } = cookiesConfig;

  if (token) {
    Logger.debug('Apollo authLinkFactory, finished, token: ', token);
  }

  return {
    headers: {
      ...headers,
      ...(token ? { 'woocommerce-session': `Session ${token}` } : {}),
      ...(session ? { cookie: `${sessionCookieName}=${session}` } : {})
    }
  };
});

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const tokenLinkFactory = ({ state, cookiesConfig }: {
  state: ConfigState;
  cookiesConfig: any
}) => new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const { response: { headers } } = context;
    const wooSession = headers.get('woocommerce-session');

    if (wooSession) {
      state.setCustomerToken(wooSession);
    }

    const cookieHeader = headers.get('set-cookie');
    if (cookieHeader) {
      const { sessionCookieName } = cookiesConfig;
      const cookies = parseCookie(cookieHeader);
      if (cookies[sessionCookieName]) state.setSession(cookies[sessionCookieName]);
    }

    return response;
  });
});
