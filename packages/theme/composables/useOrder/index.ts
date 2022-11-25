/* eslint-disable consistent-return */
import { readonly, ref, useContext } from '@nuxtjs/composition-api';
import { placeOrderCommand } from './commands/placeOrderCommand';
import { getOrderCommand } from './commands/getOrderCommand';
import type {
  UseOrderErrors,
  UseOrderInterface,
  UsePlaceOrderParams,
  UseGetOrderParams
} from './useOrder';

/**
 * Allows the placing of an order.
 *
 * See the {@link UseOrderInterface} for a list of methods and values available in this composable.
 */
export function useOrder(): UseOrderInterface {
  const loading = ref(false);
  const error = ref<UseOrderErrors>({
    place: null
  });

  const { app } = useContext();
  const context = app.$vsf;

  const place = async (params: UsePlaceOrderParams) => {
    console.log('useOrder/place', params);

    try {
      loading.value = true;
      error.value.place = null;
      const response = await placeOrderCommand.execute(context, params);
      return response;
    } catch (err) {
      error.value.place = err;
      console.error('useOrder/place', err);
    } finally {
      loading.value = false;
    }
  };

  const get = async (params: UseGetOrderParams) => {
    console.log('useOrder/get', params);

    try {
      loading.value = true;
      error.value.place = null;
      const response = await getOrderCommand.execute(context, params);
      return response;
    } catch (err) {
      error.value.place = err;
      console.error('useOrder/get', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    place,
    get,
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useOrder;
export * from './useOrder';
