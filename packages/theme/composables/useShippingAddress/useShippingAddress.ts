import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { ShippingAddress, UpdateShippingAddressParams } from '../types';

/**
 * Errors that occured in the {@link useShippingAddress|useShippingAddress()} composable
 */
export interface UseShippingAddressErrors {

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
 * The params object accepted by the `update` method in the {@link useShippingAddress|useShippingAddress()} composable
 */
export type UseUpdateShippingAddressParams = ComposableFunctionArgs<UpdateShippingAddressParams>;

/**
 * Data and methods returned from the {@link useShippingAddress|useShippingAddress()} composable
 */
export interface UseShippingAddressInterface {

    /**
     * Gets the user's cart
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#getCart} API endpoint.
     */
    get(): void;

    /**
     * Update a user's shipping address
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#postShippingAddress} API endpoint.
     */
    update(params: UseUpdateShippingAddressParams): void;

    /**
     * The address object containing the shipping address
     */
    address: ComputedRef<ShippingAddress>;

    /**
     * Indicates whether any of the methods is in progress
     */
    loading: Readonly<Ref<boolean>>;

    /**
     * Contains errors from any of the composable methods
     */
    error: Readonly<Ref<UseShippingAddressErrors>>;
}
