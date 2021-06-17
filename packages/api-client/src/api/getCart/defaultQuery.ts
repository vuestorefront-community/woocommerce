import gql from 'graphql-tag';
import { CartFragment } from '../../fragments';

const GET_CART = gql`
  ${CartFragment}

  query GET_CART {
    cart {
    ...DefaultCart
    }
  }
`;

export default GET_CART;
