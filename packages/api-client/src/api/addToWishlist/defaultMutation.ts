import gql from 'graphql-tag';

const ADD_TO_WISHLIST = gql`
  mutation ADD_TO_WISHLIST($input: AddToWishlistInput!) {
    addToWishlist(input: $input) {
         wishlist
    }
  }
`;

export default ADD_TO_WISHLIST;
