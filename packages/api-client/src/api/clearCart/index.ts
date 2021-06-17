import {RemoveItemsFromCartInput} from '../../types/GraphQL';
import ApolloClient from 'apollo-client';
import CLEAR_CART_MUTATION from './defaultMutation';

const clearCart = async (context): Promise<any> => {
  const input: RemoveItemsFromCartInput = {
    all: true
  };
  const request = await (context.client as ApolloClient<any>).mutate<any>({
    mutation: CLEAR_CART_MUTATION,
    variables: { input }
  });

  return request;
};

export default clearCart;
