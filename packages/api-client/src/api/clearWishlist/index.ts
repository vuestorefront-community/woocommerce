import ApolloClient from 'apollo-client';
import CLEAR_WISHLIST from './defaultMutation';

const clearWishlist = async (
  context,
  productId
): Promise<any> => {
  const input = { productId };
  const request = await (context.client as ApolloClient<any>).mutate<any>({
    mutation: CLEAR_WISHLIST,
    variables: { input }
  });

  return request;
};

export default clearWishlist;
