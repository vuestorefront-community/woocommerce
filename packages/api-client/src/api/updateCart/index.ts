import {UpdateItemQuantitiesInput} from '../../types/GraphQL';
import ApolloClient from 'apollo-client';
import UPDATE_CART from './defaultMutation';

const updateCart = async (context, items): Promise<any> => {
  const input: UpdateItemQuantitiesInput = {
    items
  };
  const request = await (context.client as ApolloClient<any>).mutate<any>({
    mutation: UPDATE_CART,
    variables: { input }
  });

  return request;
};

export default updateCart;
