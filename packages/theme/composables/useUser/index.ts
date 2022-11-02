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

  // Get user state from localStorage
  if (process.client) {
    userStore.$patch({
      token: localStorage.getItem('pinia_user_token'),
      email: localStorage.getItem('pinia_user_email'),
      displayName: localStorage.getItem('pinia_user_display_name')
    });
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

      if (process.client) {
        localStorage.setItem('pinia_user_token', data.token);
        localStorage.setItem('pinia_user_email', data.user_email);
        localStorage.setItem('pinia_user_display_name', data.user_display_name);
      }
    } catch (err) {
      error.value.login = err;
      console.error('useUser/login', err);
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    userStore.$patch(
      {
        token: null,
        email: null,
        displayName: null
      }
    );

    localStorage.removeItem('pinia_user_token');
    localStorage.removeItem('pinia_user_email');
    localStorage.removeItem('pinia_user_display_name');
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
