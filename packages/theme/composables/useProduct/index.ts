/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { getProductsPaginatedCommand } from './commands/getProductsPaginatedCommand';
import { getProductSingleCommand } from './commands/getProductSingleCommand';
import type {
  UseProductErrors,
  UseProductInterface,
  UseProductGetPaginatedParams,
  UseProductGetSingleParams
} from './useProduct';
import { useProductStore } from './useProductStore';

/**
 * Allows the fetching of a single or multiple products.
 *
 * See the {@link UseProductInterface} for a list of methods and values available in this composable.
 */
export function useProduct(): UseProductInterface {
  const loading = ref(false);
  const error = ref<UseProductErrors>({
    search: null
  });

  const productStore = useProductStore();

  const { app } = useContext();
  const context = app.$vsf;

  const getProductsPaginated = async (searchParams: UseProductGetPaginatedParams) => {
    // console.log(`useProduct/getProductsPaginated`, searchParams);
    Object.assign(searchParams, { paginate: true });

    try {
      loading.value = true;
      error.value.search = null;
      productStore.products = await getProductsPaginatedCommand.execute(context, searchParams);
    } catch (err) {
      error.value.search = err;
      console.error('useProduct/getProductsPaginated', err);
    } finally {
      loading.value = false;
    }

    return productStore.products;
  };

  const getProductSingle = async (searchParams: UseProductGetSingleParams) => {
    // console.log(`useProduct/getProductSingle`, searchParams);

    try {
      loading.value = true;
      error.value.search = null;
      productStore.product = await getProductSingleCommand.execute(context, searchParams);
    } catch (err) {
      error.value.search = err;
      console.error('useProduct/getProductSingle', err);
    } finally {
      loading.value = false;
    }

    return productStore.product;
  };

  return {
    getProductsPaginated,
    getProductSingle,
    paginatedProducts: computed(() => productStore.products),
    singleProduct: computed(() => productStore.product),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useProduct;
export * from './useProduct';
