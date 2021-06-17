/* eslint-disable @typescript-eslint/restrict-template-expressions */
import ApolloClient from 'apollo-client';
import fetch from 'isomorphic-fetch';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Logger } from '@vue-storefront/core';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';
import { Config } from '../../types/setup';

const createErrorHandler = () => onError((err) => {
  const {
    graphQLErrors,
    networkError
  } = err;
  if (graphQLErrors) {
    graphQLErrors.forEach(({
      message,
      locations,
      path
    }) => {
      if (!locations) {
        Logger.error(`[GraphQL error]: Message: ${message}, Path: ${path}`);
        return;
      }

      const parsedLocations = locations.map(({
        column,
        line
      }) => `[column: ${column}, line: ${line}]`);

      Logger.error(`[GraphQL error]: Message: ${message}, Location: ${parsedLocations.join(', ')}, Path: ${path}`);
    });
  }

  if (networkError) {
    Logger.error(`[Network error]: ${networkError}`);
  }
});

export const apolloLinkFactory = (settings: Config, handlers?: {
  authLink?: ApolloLink;
  tokenLink?: ApolloLink;
}) => {
  const baseAuthLink = handlers?.authLink || setContext((apolloReq, { headers }) => ({
    headers: {
      ...headers
    }
  }));
  const tokenLink = handlers?.tokenLink;

  const httpLink = createHttpLink({ uri: settings.api, fetch });

  const onErrorLink = createErrorHandler();

  return ApolloLink.from([onErrorLink, tokenLink.concat(baseAuthLink.concat(httpLink))]);
};

export const apolloClientFactory = (customOptions: Record<string, any>) => new ApolloClient({
  cache: new InMemoryCache(),
  ...customOptions
});
