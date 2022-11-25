import type { Ref } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { PlaceOrderParams, GetOrderParams } from '../types';

/**
 * Errors that occured in the {@link useOrder|useOrder()} composable
 */
export interface UseOrderErrors {
  /**
   * Contains error if `place` method failed, otherwise is `null`
   */
  place: Error;
}

/**
 * The params object accepted by the `place` method in the {@link useOrder|useOrder()} composable
 */
export type UsePlaceOrderParams = ComposableFunctionArgs<PlaceOrderParams>;

/**
 * The params object accepted by the `get` method in the {@link useOrder|useOrder()} composable
 */
export type UseGetOrderParams = ComposableFunctionArgs<GetOrderParams>;

/**
 * Data and methods returned from the {@link useOrder|useOrder()} composable
 */
export interface UseOrderInterface {
  /**
   * Places an order
   *
   * @remarks
   *
   * Internally, it calls the {@link @vue-storefront/woocommerce-api#postOrder} API endpoint.
   */
  place(params: UsePlaceOrderParams): any;

  /**
   * Fetches an order
   *
   * @remarks
   *
   * Internally, it calls the {@link @vue-storefront/woocommerce-api#getOrder} API endpoint.
   */
  get(params: UseGetOrderParams): any;

  /**
   * Indicates whether any of the methods is in progress
   */
  loading: Readonly<Ref<boolean>>;

  /**
   * Contains errors from any of the composable methods
   */
  error: Readonly<Ref<UseOrderErrors>>;
}
