import gql from 'graphql-tag';

/**
 * GraphQL categories query.
 */
export const GET_CATEGORIES_QUERY = gql`query GET_CATEGORIES_QUERY{
	productCategories {
    edges {
      node {
        id
        slug
        name
        parent {
          node {
            id
          }
        }
        image {
          sourceUrl
          srcSet
        }
      }
    }
  }
}`;

