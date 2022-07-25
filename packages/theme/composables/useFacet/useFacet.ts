import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { FacetSearchResult, GetFacetSearchParams } from '../types';

/**
 * Errors that occured in the {@link useFacet|useFacet()} composable
 */
export interface UseFacetErrors {

    /**
     * Contains error if `search` method failed, otherwise is `null`
     */
    search: Error;
}

/**
 * The params object accepted by the `getFacets` method in the {@link useFacet|useFacet()} composable
 */
export type UseFacetGetParams = ComposableFunctionArgs<GetFacetSearchParams>;

/**
 * Data and methods returned from the {@link useFacet|useFacet()} composable
 */
export interface UseFacetInterface {

    /**
     * Fetches facets
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#getFacet} API endpoint.
     */
    getFacets(params: UseFacetGetParams): void;

    /**
     * The list of facets
     *
     * @remarks
     *
     *
     */
    facets: ComputedRef<FacetSearchResult<any>>;

    /**
     * Indicates whether any of the methods is in progress
     */
    loading: Readonly<Ref<boolean>>;

    /**
     * Contains errors from any of the composable methods
     */
    error: Readonly<Ref<UseFacetErrors>>;
}
