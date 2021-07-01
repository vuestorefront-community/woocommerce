/* istanbul ignore file */

import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import {MeQueryResponse} from '../../../api-client/src';
import {Customer} from '@vue-storefront/woocommerce-api';

// @todo useUser

const params: UseUserFactoryParams<Customer, any, any> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    const apiState = context.$woocommerce.config.state;
    const session = apiState.getSession();

    if (session) {
      const response : MeQueryResponse = await context.$woocommerce.api.getMe();
      return response.data.customer;
    }

    return null;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    console.log('Mocked: logOut');
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    console.log('Mocked: updateUser');
    return <Customer> {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (context: Context, { email, password, firstName, lastName }) => {
    console.log('Mocked: register');
    return <Customer> {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    console.log('Mocked: logIn');
    return <Customer> {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    console.log('Mocked: changePassword');
    return <Customer> {};
  }
};

export default useUserFactory<Customer, any, any>(params);
