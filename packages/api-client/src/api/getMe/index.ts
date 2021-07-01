import GET_ME, {GET_ME_WISHLIST} from './defaultQuery';
import ApolloClient from 'apollo-client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getMe = async (context): Promise<any> => {
  const { wishlist } = context.config;
  const request = await (context.client as ApolloClient<any>).query<any>({
    query: wishlist ? GET_ME_WISHLIST : GET_ME,
    fetchPolicy: 'no-cache'
  });

  return request;
};

export default getMe;
