import gql from 'graphql-tag';

const GET_ME = gql`
  query GET_ME {
    customer {
      firstName
      lastName
      email
      databaseId
    }
  }
`;

export const GET_ME_WISHLIST = gql`
  query GET_ME {
    customer {
      wishlist
      firstName
      lastName
      email
      databaseId
    }
  }
`;

export default GET_ME;
