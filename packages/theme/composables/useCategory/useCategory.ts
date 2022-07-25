import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { Category, GetCategorySearchParams } from '../types';

/**
 * Errors that occured in the {@link useCategory|useCategory()} composable
 */
export interface UseCategoryErrors {

    /**
     * Contains error if `search` method failed, otherwise is `null`
     */
    search: Error;
}

/**
 * The params object accepted by the `getCategories` method in the {@link useCategory|useCategory()} composable
 */
export type UseCategorySearchParams = ComposableFunctionArgs<GetCategorySearchParams>;

/**
 * Data and methods returned from the {@link useCategory|useCategory()} composable
 */
export interface UseCategoryInterface {

    /**
     * Fetches categories
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#getCategories} API endpoint.
     */
    getCategories(params: UseCategorySearchParams): void;

    /**
     * The list of categories
     *
     * @remarks
     *
     *
     */
    categories: ComputedRef<Array<Category>>;

    /**
     * Indicates whether any of the methods is in progress
     */
    loading: Readonly<Ref<boolean>>;

    /**
     * Contains errors from any of the composable methods
     */
    error: Readonly<Ref<UseCategoryErrors>>;
}
