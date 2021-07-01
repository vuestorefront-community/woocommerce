import gql from 'graphql-tag';

const REMOVE_FROM_WISHLIST = gql`
  mutation REMOVE_FROM_WISHLIST($input: RemoveFromWishlistInput!) {
    removeFromWishlist(input: $input) {
         wishlist
    }
  }
`;

export default REMOVE_FROM_WISHLIST;
