import { Logger } from '@vue-storefront/core';
import { Config } from '../../types/setup';
import { apolloLinkFactory } from './graphQlclient';
import { authLinkFactory, tokenLinkFactory } from './linkHandlers';

export const createWooConnection = (settings: Config): any => {
  Logger.debug('createWooConnection');

  const authLink = authLinkFactory({ state: settings.state, cookiesConfig: settings.cookies });
  const tokenLink = tokenLinkFactory({ state: settings.state, cookiesConfig: settings.cookies });

  const apolloLink = apolloLinkFactory(settings, {
    authLink,
    tokenLink
  });

  return {
    apolloLink
  };
};
