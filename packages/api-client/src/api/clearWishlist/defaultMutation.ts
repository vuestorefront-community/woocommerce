import gql from 'graphql-tag';

const CLEAR_WISHLIST = gql`
  mutation CLEAR_WISHLIST($input: ClearWishlistInput!) {
    removeFromWishlist(input: $input) {
         wishlist
    }
  }
`;

export default CLEAR_WISHLIST;
