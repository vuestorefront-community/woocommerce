import { CustomQuery } from '@vue-storefront/core';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';
import { PRODUCT_QUERY } from './defaultQuery';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProduct(context, params, customQuery?: CustomQuery) {
  const { acceptLanguage } = context.config;
  const defaultVariables = params ? {
    where: { ...params.where, supportedTypesOnly: true },
    first: 20,
    limit: params.limit,
    offset: params.offset,
    acceptLanguage
  } : { acceptLanguage };

  const { products } = context.extendQuery(customQuery,
    { products: { query: PRODUCT_QUERY, variables: defaultVariables } }
  );

  const request = await (context.client as ApolloClient<any>).query<any>({
    query: gql`${products.query}`,
    variables: products.variables,
    fetchPolicy: 'no-cache'
  });

  return request;
}

