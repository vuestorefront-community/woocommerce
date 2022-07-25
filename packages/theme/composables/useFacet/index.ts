/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { getFacetsCommand } from './commands/getFacetsCommand';
import type {
  UseFacetErrors,
  UseFacetInterface,
  UseFacetGetParams
} from './useFacet';
import { useFacetStore } from './useFacetStore';

/**
 * Allows the fetching of facets.
 *
 * See the {@link UseFacetInterface} for a list of methods and values available in this composable.
 */
export function useFacet(): UseFacetInterface {
  const loading = ref(false);
  const error = ref<UseFacetErrors>({
    search: null
  });

  const facetStore = useFacetStore();

  const { app } = useContext();
  const context = app.$vsf;

  const getFacets = async (searchParams: UseFacetGetParams) => {
    // console.log(`useFacet/getFacets`, searchParams);
    Object.assign(searchParams, { paginate: true });

    try {
      loading.value = true;
      error.value.search = null;
      facetStore.facets = await getFacetsCommand.execute(context, searchParams);
    } catch (err) {
      error.value.search = err;
      console.error('useFacet/getFacets', err);
    } finally {
      loading.value = false;
    }

    return facetStore.facets;
  };

  return {
    getFacets,
    facets: computed(() => facetStore.facets),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useFacet;
export * from './useFacet';
