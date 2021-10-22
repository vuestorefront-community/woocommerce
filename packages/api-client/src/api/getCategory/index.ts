import gql from 'graphql-tag';
import { GET_CATEGORIES_QUERY } from './defaultQuery';
import { ProductCategory } from '../../types/GraphQL';
import ApolloClient from 'apollo-client';
import { CustomQuery } from '@vue-storefront/core';

export interface CategoryData {
  categories: ProductCategory;
}

const getCategory = async (context, params, customQuery?: CustomQuery) => {
  const { acceptLanguage } = context.config;
  const defaultVariables = params ? {
    limit: params.limit,
    offset: params.offset,
    acceptLanguage
  } : { acceptLanguage };

  const { categories } = context.extendQuery(customQuery,
    { categories: { query: GET_CATEGORIES_QUERY, variables: defaultVariables } }
  );

  const request = await (context.client as ApolloClient<any>).query<CategoryData>({
    query: gql`${categories.query}`,
    variables: categories.variables,
    fetchPolicy: 'no-cache'
  });
  return request;
};

export default getCategory;
