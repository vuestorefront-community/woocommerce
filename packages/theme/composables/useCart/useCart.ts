import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { AddToCartParams, UpdateCartParams, RemoveFromCartParams, Cart } from '../types';

/**
 * Errors that occured in the {@link useCart|useCart()} composable
 */
export interface UseCartErrors {

    /**
     * Contains error if `get` method failed, otherwise is `null`
     */
    get: Error;

    /**
     * Contains error if `add` method failed, otherwise is `null`
     */
    add: Error;

    /**
     * Contains error if `update` method failed, otherwise is `null`
     */
    update: Error;

    /**
     * Contains error if `remove` method failed, otherwise is `null`
     */
    remove: Error;
}

/**
 * The params object accepted by the `add` method in the {@link useCart|useCart()} composable
 */
export type UseCartAddToCartParams = ComposableFunctionArgs<AddToCartParams>;

/**
 * The params object accepted by the `update` method in the {@link useCart|useCart()} composable
 */
export type UseCartUpdateCartParams = ComposableFunctionArgs<UpdateCartParams>;

/**
 * The params object accepted by the `remove` method in the {@link useCart|useCart()} composable
 */
export type UseCartRemoveFromCartParams = ComposableFunctionArgs<RemoveFromCartParams>;

/**
 * Data and methods returned from the {@link useCart|useCart()} composable
 */
export interface UseCartInterface {

    /**
     * Gets the user's cart
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#getCart} API endpoint.
     */
    get(): void;

    /**
     * Adds a product to the user's cart
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#postCart} API endpoint.
     */
    add(params: UseCartAddToCartParams): void;

    /**
     * Update a product's quantity in the user's cart
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#postCart} API endpoint.
     */
    update(params: UseCartUpdateCartParams): void;

    /**
     * Removes a product from the user's cart
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#postCart} API endpoint.
     */
    remove(params: UseCartRemoveFromCartParams): void;

    /**
     * The cart object containing the cart contents
     *
     * @remarks
     *
     *
     */
    cart: ComputedRef<Cart>;

    /**
     * Indicates whether any of the methods is in progress
     */
    loading: Readonly<Ref<boolean>>;

    /**
     * Contains errors from any of the composable methods
     */
    error: Readonly<Ref<UseCartErrors>>;
}
