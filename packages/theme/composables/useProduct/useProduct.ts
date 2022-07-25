import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { Product, GetProductsPaginatedSearchParams, GetProductSingleSearchParams } from '../types';

/**
 * Errors that occured in the {@link useProduct|useProduct()} composable
 */
export interface UseProductErrors {

    /**
     * Contains error if `search` method failed, otherwise is `null`
     */
    search: Error;
}

/**
 * The params object accepted by the `getProductsPaginated` method in the {@link useProduct|useProduct()} composable
 */
export type UseProductGetPaginatedParams = ComposableFunctionArgs<GetProductsPaginatedSearchParams>;

/**
 * The params object accepted by the `getProductSingle` method in the {@link useProduct|useProduct()} composable
 */
export type UseProductGetSingleParams = ComposableFunctionArgs<GetProductSingleSearchParams>;

/**
 * Data and methods returned from the {@link useProduct|useProduct()} composable
 */
export interface UseProductInterface {

    /**
     * Fetches multiple products with pagination
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#getProduct} API endpoint.
     */
    getProductsPaginated(params: UseProductGetPaginatedParams): void;

    /**
     * Fetches a single product by ID
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#getProduct} API endpoint.
     */
    getProductSingle(params: UseProductGetSingleParams): void;

    /**
     * The list of paginated products
     *
     * @remarks
     *
     *
     */
    paginatedProducts: ComputedRef<Array<Product>>;

    /**
     * The list of paginated products
     *
     * @remarks
     *
     *
     */
    singleProduct: ComputedRef<Product>;

    /**
     * Indicates whether any of the methods is in progress
     */
    loading: Readonly<Ref<boolean>>;

    /**
     * Contains errors from any of the composable methods
     */
    error: Readonly<Ref<UseProductErrors>>;
}
