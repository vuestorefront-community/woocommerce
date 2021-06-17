import { Logger } from '@vue-storefront/core';
import { setContext } from 'apollo-link-context';
import { ConfigState } from '../../types/setup';
import {ApolloLink} from 'apollo-link';

export const authLinkFactory = ({ state }: {
  state: ConfigState;
}) => setContext((apolloReq, { headers }) => {
  Logger.debug('Apollo authLinkFactory', apolloReq.operationName);

  const token: string = state.getCustomerToken();

  if (token) {
    Logger.debug('Apollo authLinkFactory, finished, token: ', token);
  }

  return {
    headers: {
      ...headers,
      ...(token ? { 'woocommerce-session': `Session ${token}` } : {})
    }
  };
});

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const tokenLinkFactory = ({ state }: {
  state: ConfigState;
}) => new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const { response: { headers } } = context;
    const session = headers.get('woocommerce-session');
    if (session) {
      state.setCustomerToken(session);
    }
    return response;
  });
});
