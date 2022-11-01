/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { getCartCommand } from './commands/getCartCommand';
import { addToCartCommand } from './commands/addToCartCommand';
import { updateCartCommand } from './commands/updateCartCommand';
import { removeFromCartCommand } from './commands/removeFromCartCommand';
import type {
  UseCartErrors,
  UseCartInterface,
  UseCartAddToCartParams,
  UseCartUpdateCartParams,
  UseCartRemoveFromCartParams
} from './useCart';
import { useCartStore } from './useCartStore';

/**
 * Allows fetching of the cart and adding products to the cart.
 *
 * See the {@link UseCartInterface} for a list of methods and values available in this composable.
 */
export function useCart(): UseCartInterface {
  const loading = ref(false);
  const error = ref<UseCartErrors>({
    get: null,
    add: null,
    update: null,
    remove: null
  });

  const cartStore = useCartStore();

  const { app } = useContext();
  const context = app.$vsf;

  const get = async () => {
    try {
      loading.value = true;
      error.value.get = null;
      const response = await getCartCommand.execute(context);
      cartStore.$patch({
        contents: response.contents
      });
    } catch (err) {
      error.value.get = err;
      console.error('useCart/get', err);
    } finally {
      loading.value = false;
    }
  };

  const add = async (params: UseCartAddToCartParams) => {
    // console.log('useCart/add', params);

    try {
      loading.value = true;
      error.value.add = null;
      const response = await addToCartCommand.execute(context, params);
      cartStore.$patch({
        contents: response.contents
      });
    } catch (err) {
      error.value.add = err;
      console.error('useCart/add', err);
    } finally {
      loading.value = false;
    }
  };

  const update = async (params: UseCartUpdateCartParams) => {
    // console.log('useCart/update', params);

    try {
      loading.value = true;
      error.value.update = null;
      const response = await updateCartCommand.execute(context, params);
      cartStore.$patch({
        contents: response.contents
      });
    } catch (err) {
      error.value.update = err;
      console.error('useCart/update', err);
    } finally {
      loading.value = false;
    }
  };

  const remove = async (params: UseCartRemoveFromCartParams) => {
    // console.log('useCart/remove', params);

    try {
      loading.value = true;
      error.value.remove = null;
      const response = await removeFromCartCommand.execute(context, params);
      cartStore.$patch({
        contents: response.contents
      });
    } catch (err) {
      error.value.remove = err;
      console.error('useCart/remove', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    get,
    add,
    update,
    remove,
    cart: computed(() => cartStore.$state),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useCart;
export * from './useCart';
