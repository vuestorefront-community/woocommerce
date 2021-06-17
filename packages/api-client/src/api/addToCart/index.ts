import { AddToCartInput } from '../../types/GraphQL';
import ApolloClient from 'apollo-client';
import ADD_TO_CART from './defaultMutation';

const addToCart = async (
  context,
  productId: number,
  quantity: number
): Promise<any> => {
  const input: AddToCartInput = {
    productId,
    quantity
  };
  const request = await (context.client as ApolloClient<any>).mutate<any>({
    mutation: ADD_TO_CART,
    variables: { input }
  });

  return request;
};

export default addToCart;
