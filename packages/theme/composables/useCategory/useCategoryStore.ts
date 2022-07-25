import { defineStore } from 'pinia';
import type { Category } from '../types';

interface CategoryState {
    categories: Array<Category>
}

export const useCategoryStore = defineStore('categories', {
  state: (): CategoryState => ({
    categories: []
  })
});
