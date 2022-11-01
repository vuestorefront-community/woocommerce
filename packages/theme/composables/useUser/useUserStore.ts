import { defineStore } from 'pinia';
import type { User } from '../types';

export const useUserStore = defineStore('user', {
  state: (): User => ({
    token: null,
    email: null,
    displayName: null
  })
});
