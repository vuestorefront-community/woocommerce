import { UserGetters } from '@vue-storefront/core';
import type { User } from '@vue-storefront/woocommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFirstName(user: User): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getLastName(user: User): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFullName(user: User): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getEmailAddress(user: any): string {
  return user.email;
}

export const userGetters: UserGetters<User> = {
  getFirstName,
  getLastName,
  getFullName,
  getEmailAddress
};
