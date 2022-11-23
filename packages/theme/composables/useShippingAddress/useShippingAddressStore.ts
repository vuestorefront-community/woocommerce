import { defineStore } from 'pinia';
import type { ShippingAddress } from '../types';

export const useShippingAddressStore = defineStore('shipping-address', {
  state: (): ShippingAddress => ({
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
