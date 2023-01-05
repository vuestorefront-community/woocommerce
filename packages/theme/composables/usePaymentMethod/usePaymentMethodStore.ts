import { defineStore } from 'pinia';
import type { PaymentMethod } from '../types';

interface PaymentMethodState {
  paymentMethods: Array<PaymentMethod>;
}

export const usePaymentMethodStore = defineStore('payment-method', {
  state: (): PaymentMethodState => ({
    paymentMethods: []
  })
});
