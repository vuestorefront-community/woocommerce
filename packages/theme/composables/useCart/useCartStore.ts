import { defineStore } from 'pinia';
import type { Cart } from '../types';

export const useCartStore = defineStore('cart', {
  state: (): Cart => ({
    contents: null
  })
});
