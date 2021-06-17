import GET_CART from './defaultQuery';
import ApolloClient from 'apollo-client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCart = async (context, cartId : string): Promise<any> => {
  const request = await (context.client as ApolloClient<any>).query<any>({
    query: GET_CART,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getCart;
