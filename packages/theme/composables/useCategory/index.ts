/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { getCategoriesCommand } from './commands/getCategoriesCommand';
import type {
  UseCategoryErrors,
  UseCategoryInterface,
  UseCategorySearchParams
} from './useCategory';
import { useCategoryStore } from './useCategoryStore';

/**
 * Allows the fetching categories.
 *
 * See the {@link UseCategoryInterface} for a list of methods and values available in this composable.
 */
export function useCategory(): UseCategoryInterface {
  const loading = ref(false);
  const error = ref<UseCategoryErrors>({
    search: null
  });

  const categoryStore = useCategoryStore();

  const { app } = useContext();
  const context = app.$vsf;

  const getCategories = async (searchParams: UseCategorySearchParams) => {
    // console.log(`useCategory/getCategories`, searchParams);

    try {
      loading.value = true;
      error.value.search = null;
      categoryStore.categories = await getCategoriesCommand.execute(context, searchParams);
    } catch (err) {
      error.value.search = err;
      console.error('useCategory/getCategories', err);
    } finally {
      loading.value = false;
    }

    return categoryStore.categories;
  };

  return {
    getCategories,
    categories: computed(() => categoryStore.categories),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useCategory;
export * from './useCategory';
