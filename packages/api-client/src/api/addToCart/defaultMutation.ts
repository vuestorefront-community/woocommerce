import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

const ADD_TO_CART = gql`
  ${CartFragment}
  
  mutation ADD_TO_CART($input: AddToCartInput!) {
    addToCart(input: $input) {
         cart {
        ...DefaultCart
        }
    }
  }
`;

export default ADD_TO_CART;
