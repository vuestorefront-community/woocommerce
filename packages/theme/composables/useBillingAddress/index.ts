/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { getBillingAddressCommand } from './commands/getBillingAddressCommand';
import { updateBillingAddressCommand } from './commands/updateBillingAddressCommand';
import {
  UseBillingAddressErrors,
  UseBillingAddressInterface,
  UseUpdateBillingAddressParams
} from './useBillingAddress';
import { useBillingAddressStore } from './useBillingAddressStore';

/**
 * Allows the fetching and updating of a user's billing address.
 *
 * See the {@link UseBillingAddressInterface} for a list of methods and values available in this composable.
 */
export function useBillingAddress(): UseBillingAddressInterface {
  const loading = ref(false);
  const error = ref<UseBillingAddressErrors>({
    get: null,
    update: null
  });

  const billingAddressStore = useBillingAddressStore();

  const { app } = useContext();
  const context = app.$vsf;

  const get = async () => {
    try {
      loading.value = true;
      error.value.get = null;
      const response = await getBillingAddressCommand.execute(context);
      billingAddressStore.$patch(response);
    } catch (err) {
      error.value.get = err;
      console.error('useBillingAddress/get', err);
    } finally {
      loading.value = false;
    }
  };

  const update = async (params: UseUpdateBillingAddressParams) => {
    // console.log('useBillingAddress/update', params);

    try {
      loading.value = true;
      error.value.update = null;
      await updateBillingAddressCommand.execute(context, params);
    } catch (err) {
      error.value.update = err;
      console.error('useBillingAddress/update', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    get,
    update,
    address: computed(() => billingAddressStore.$state),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useBillingAddress;
export * from './useBillingAddress';
