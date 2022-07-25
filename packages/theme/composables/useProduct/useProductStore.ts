import { defineStore } from 'pinia';
import type { Product } from '../types';

interface ProductState {
    products: Array<Product>,
    product: Product
}

export const useProductStore = defineStore('products', {
  state: (): ProductState => ({
    products: [],
    product: null
  })
});
