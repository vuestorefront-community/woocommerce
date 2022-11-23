/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { getShippingAddressCommand } from './commands/getShippingAddressCommand';
import { updateShippingAddressCommand } from './commands/updateShippingAddressCommand';
import {
  UseShippingAddressErrors,
  UseShippingAddressInterface,
  UseUpdateShippingAddressParams
} from './useShippingAddress';
import { useShippingAddressStore } from './useShippingAddressStore';

/**
 * Allows the fetching and updating of a user's shipping address.
 *
 * See the {@link UseShippingAddressInterface} for a list of methods and values available in this composable.
 */
export function useShippingAddress(): UseShippingAddressInterface {
  const loading = ref(false);
  const error = ref<UseShippingAddressErrors>({
    get: null,
    update: null
  });

  const shippingAddressStore = useShippingAddressStore();

  const { app } = useContext();
  const context = app.$vsf;

  const get = async () => {
    try {
      loading.value = true;
      error.value.get = null;
      const response = await getShippingAddressCommand.execute(context);
      shippingAddressStore.$patch(response);
    } catch (err) {
      error.value.get = err;
      console.error('useShippingAddress/get', err);
    } finally {
      loading.value = false;
    }
  };

  const update = async (params: UseUpdateShippingAddressParams) => {
    // console.log('useShippingAddress/update', params);

    try {
      loading.value = true;
      error.value.update = null;
      await updateShippingAddressCommand.execute(context, params);
    } catch (err) {
      error.value.update = err;
      console.error('useShippingAddress/update', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    get,
    update,
    address: computed(() => shippingAddressStore.$state),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useShippingAddress;
export * from './useShippingAddress';
