/* eslint-disable consistent-return */
import { readonly, ref, useContext, computed } from '@nuxtjs/composition-api';
import { postRegisterCommand } from './commands/postRegisterCommand';
import { postTokenCommand } from './commands/postTokenCommand';
import type {
  UseUserErrors,
  UseUserInterface,
  UseUserPostRegisterParams,
  UseUserPostTokenParams
} from './useUser';
import { useUserStore } from './useUserStore';
import { deleteCookie, getCookie } from '~/helpers/utils/cookieFunctions';

/**
 * Allows user authentication.
 *
 * See the {@link UseUserInterface} for a list of methods and values available in this composable.
 */
export function useUser(): UseUserInterface {
  const loading = ref(false);
  const error = ref<UseUserErrors>({
    register: null,
    login: null
  });

  const userStore = useUserStore();

  // Get user state from cookie
  if (process.client) {
    if (getCookie('vsf-user-token')) {
      userStore.$patch({
        token: decodeURIComponent(getCookie('vsf-user-token')),
        email: decodeURIComponent(getCookie('vsf-user-email')),
        displayName: decodeURIComponent(getCookie('vsf-user-display-name'))
      });
    } else {
      userStore.$patch({
        token: null,
        email: null,
        displayName: null
      });
    }
  }

  const { app } = useContext();
  const context = app.$vsf;

  const register = async (params: UseUserPostRegisterParams) => {
    // console.log('useUser/register', params);

    try {
      loading.value = true;
      error.value.register = null;
      await postRegisterCommand.execute(context, params);
    } catch (err) {
      error.value.register = err;
      console.error('useUser/register', err);
    } finally {
      loading.value = false;
    }
  };

  const login = async (params: UseUserPostTokenParams) => {
    // console.log('useUser/login', params);

    try {
      loading.value = true;
      error.value.login = null;
      const data = await postTokenCommand.execute(context, params);
      userStore.$patch({
        token: data.token,
        email: data.user_email,
        displayName: data.user_display_name
      });
    } catch (err) {
      error.value.login = err;
      console.error('useUser/login', err);
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    userStore.$patch({
      token: null,
      email: null,
      displayName: null
    });

    deleteCookie('vsf-user-token');
    deleteCookie('vsf-user-email');
    deleteCookie('vsf-user-display-name');
  };

  return {
    register,
    login,
    logout,
    user: computed(() => userStore),
    loading: readonly(loading),
    error: readonly(error)
  };
}

export default useUser;
export * from './useUser';
