import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { PaymentMethod } from '../types';

/**
 * Errors that occured in the {@link usePaymentMethod|usePaymentMethod()} composable
 */
export interface UsePaymentMethodErrors {
  /**
   * Contains error if `get` method failed, otherwise is `null`
   */
  get: Error;
}

/**
 * Data and methods returned from the {@link usePaymentMethod|usePaymentMethod()} composable
 */
export interface UsePaymentMethodInterface {
  /**
   * Gets available payment methods
   *
   * @remarks
   *
   * Internally, it calls the {@link @vue-storefront/woocommerce-api#getPaymentMethod} API endpoint.
   */
  get(): void;

  /**
   * The address object containing the billing address
   */
  methods: ComputedRef<Array<PaymentMethod>>;

  /**
   * Indicates whether any of the methods is in progress
   */
  loading: Readonly<Ref<boolean>>;

  /**
   * Contains errors from any of the composable methods
   */
  error: Readonly<Ref<UsePaymentMethodErrors>>;
}
