import gql from 'graphql-tag';

/**
 * GraphQL categories query.
 */
const GET_CATEGORIES_QUERY = gql`query {
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

export default GET_CATEGORIES_QUERY;
