/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { getPaymentMethodsCommand } from './commands/getPaymentMethodsCommand';
import {
  UsePaymentMethodErrors,
  UsePaymentMethodInterface
} from './usePaymentMethod';
import { usePaymentMethodStore } from './usePaymentMethodStore';

/**
 * Allows the fetching of available payment methods and the selection of one.
 *
 * See the {@link UsePaymentMethodInterface} for a list of methods and values available in this composable.
 */
export function usePaymentMethod(): UsePaymentMethodInterface {
  const loading = ref(false);
  const error = ref<UsePaymentMethodErrors>({
    get: null
  });

  const paymentMethodStore = usePaymentMethodStore();

  const { app } = useContext();
  const context = app.$vsf;

  const get = async () => {
    try {
      loading.value = true;
      error.value.get = null;
      const response = await getPaymentMethodsCommand.execute(context);
      paymentMethodStore.$patch({ paymentMethods: response });
    } catch (err) {
      error.value.get = err;
      console.error('usePaymentMethod/get', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    get,
    methods: computed(() => paymentMethodStore.paymentMethods),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default usePaymentMethod;
export * from './usePaymentMethod';
