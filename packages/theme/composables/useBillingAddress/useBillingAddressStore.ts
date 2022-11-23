import { defineStore } from 'pinia';
import type { BillingAddress } from '../types';

export const useBillingAddressStore = defineStore('billing-address', {
  state: (): BillingAddress => ({
    firstName: null,
    lastname: null,
    addressLine1: null,
    addressLine2: null,
    city: null,
    country: null,
    postcode: null,
    state: null,
    phone: null
  })
});
