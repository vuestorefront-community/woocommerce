import type { Ref, ComputedRef } from '@nuxtjs/composition-api';
import type { ComposableFunctionArgs } from '~/composables/types';
import type { PostRegisterParams, PostTokenParams, User } from '../types';

/**
 * Errors that occured in the {@link useUser|useUser()} composable
 */
export interface UseUserErrors {

    /**
     * Contains error if `register` method failed, otherwise is `null`
     */
    register: Error;

    /**
     * Contains error if `login` method failed, otherwise is `null`
     */
    login: Error;
}

/**
 * The params object accepted by the `register` method in the {@link useUser|useUser()} composable
 */
export type UseUserPostRegisterParams = ComposableFunctionArgs<PostRegisterParams>;

/**
 * The params object accepted by the `login` method in the {@link useUser|useUser()} composable
 */
export type UseUserPostTokenParams = ComposableFunctionArgs<PostTokenParams>;

/**
 * Data and methods returned from the {@link useUser|useUser()} composable
 */
export interface UseUserInterface {

    /**
     * Registers a new user
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#postRegister} API endpoint.
     */
    register(params: UseUserPostRegisterParams): void;

    /**
     * Logs a user in by fetching a JWT token
     *
     * @remarks
     *
     * Internally, it calls the {@link @vue-storefront/woocommerce-api#postLogin} API endpoint.
     */
    login(params: UseUserPostTokenParams): void;

    /**
     * Logs a user out
     */
    logout(): void;

    /**
     * The user object containing a token, email and display name
     *
     * @remarks
     *
     *
     */
    user: ComputedRef<User>;

    /**
     * Indicates whether any of the methods is in progress
     */
    loading: Readonly<Ref<boolean>>;

    /**
     * Contains errors from any of the composable methods
     */
    error: Readonly<Ref<UseUserErrors>>;
}
