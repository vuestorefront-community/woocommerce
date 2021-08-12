import ApolloClient, { ApolloClientOptions } from 'apollo-client';
import {WoocommerceMethods} from './Api';

export interface Storage {
  set: (
    name: string,
    value: any
  ) => void;
  get: (name: string) => any;
  remove: (name: string) => any;
  removeAll: () => void;
}

export type ConfigState = {
  getSession(): string;
  setSession(id: string): void;
  getCustomerToken(): string;
  setCustomerToken(token: string): void;
  getStore(): string;
  setStore(id: string): void;
};

export interface ClientConfig {
  api: string;
  cookies: {
    currencyCookieName: string;
    countryCookieName: string;
    localeCookieName: string;
    sessionCookieName: string;
    customerCookieName: string;
    storeCookieName: string;
  },
  currency: string;
  wishlist: boolean;
  externalCheckout: {
    enable: boolean;
    cmsUrl: string;
    syncUrlPath: string;
    stores: Record<string, {
      cmsUrl: string;
    }>;
  };
  state: ConfigState;
}

export interface Config<T = any> extends ClientConfig {
  client?: ApolloClient<T>;
  storage: Storage;
  customOptions?: ApolloClientOptions<any>;
  overrides: WoocommerceMethods;
}

export type ClientInstance = ApolloClient<any>
