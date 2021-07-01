import ApolloClient from 'apollo-client';
import ADD_TO_WISHLIST from './defaultMutation';

const addToWishlist = async (
  context,
  productId
): Promise<any> => {
  const input = { productId };
  const request = await (context.client as ApolloClient<any>).mutate<any>({
    mutation: ADD_TO_WISHLIST,
    variables: { input }
  });

  return request;
};

export default addToWishlist;
