import ApolloClient from 'apollo-client';
import REMOVE_FROM_WISHLIST from './defaultMutation';

const removeFromWishlist = async (
  context,
  productId
): Promise<any> => {
  const input = { productId };
  const request = await (context.client as ApolloClient<any>).mutate<any>({
    mutation: REMOVE_FROM_WISHLIST,
    variables: { input }
  });

  return request;
};

export default removeFromWishlist;
