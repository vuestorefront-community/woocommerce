import { defineStore } from 'pinia';
import type { FacetSearchResult } from '../types';

interface FacetState {
    facets: FacetSearchResult<any>
}

export const useFacetStore = defineStore('facets', {
  state: (): FacetState => ({
    facets: null
  })
});
