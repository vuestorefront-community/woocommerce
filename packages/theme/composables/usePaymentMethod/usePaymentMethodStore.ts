import { defineStore } from 'pinia';
import type { PaymentMethod } from '../types';

export const usePaymentMethodStore = defineStore('payment-method', {
  state: (): Array<PaymentMethod> => []
});
