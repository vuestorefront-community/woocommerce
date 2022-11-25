import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { BillingAddress, UpdateBillingAddressParams } from '../types';

/**
 * Errors that occured in the {@link useBillingAddress|useBillingAddress()} composable
 */
export interface UseBillingAddressErrors {
  /**
   * Contains error if `get` method failed, otherwise is `null`
   */
  get: Error;

  /**
   * Contains error if `update` method failed, otherwise is `null`
   */
  update: Error;
}

/**
 * The params object accepted by the `update` method in the {@link useBillingAddress|useBillingAddress()} composable
 */
export type UseUpdateBillingAddressParams =
  ComposableFunctionArgs<UpdateBillingAddressParams>;

/**
 * Data and methods returned from the {@link useBillingAddress|useBillingAddress()} composable
 */
export interface UseBillingAddressInterface {
  /**
   * Gets the user's cart
   *
   * @remarks
   *
   * Internally, it calls the {@link @vue-storefront/woocommerce-api#getCart} API endpoint.
   */
  get(): void;

  /**
   * Update a user's billing address
   *
   * @remarks
   *
   * Internally, it calls the {@link @vue-storefront/woocommerce-api#postBillingAddress} API endpoint.
   */
  update(params: UseUpdateBillingAddressParams): void;

  /**
   * The address object containing the billing address
   */
  address: ComputedRef<BillingAddress>;

  /**
   * Indicates whether any of the methods is in progress
   */
  loading: Readonly<Ref<boolean>>;

  /**
   * Contains errors from any of the composable methods
   */
  error: Readonly<Ref<UseBillingAddressErrors>>;
}
