import {
  ProductsSearchParams,
  FacetSearchResult,
  AgnosticFacet,
  AgnosticGroupedFacet,
  AgnosticCategoryTree,
  AgnosticSort,
  AgnosticPagination
} from '@vue-storefront/core';

import type { Facet } from '@vue-storefront/woocommerce-api';

export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = TODO;

export type UseFacetSearchParams = TODO;

export type UseProductSearchParams = ProductsSearchParams;

export type UseReviewSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type UseStoreFilterParams = TODO;

export type UseUserUpdateParams = TODO;

export type UseUserRegisterParams = TODO;

export type useUserOrderSearchParams = TODO;

export type AgnosticAttribute = Record<string, string>
export interface AgnosticBreadcrumb {
  text: string;
  link: string;
}
export interface AgnosticPrice {
  regular: number | null;
  special?: number | null;
}

export interface ProductGetters<PRODUCT, PRODUCT_FILTER> {
  getName: (product: PRODUCT) => string;
  getSlug: (product: PRODUCT) => string;
  getPrice: (product: PRODUCT) => AgnosticPrice;
  getGallery: (product: PRODUCT) => string[];
  getCoverImage: (product: PRODUCT) => string;
  getFiltered: (products: PRODUCT[], filters?: PRODUCT_FILTER) => PRODUCT[];
  getAttributes: (products: PRODUCT, filters?: Array<string>) => Array<Record<string, string>>;
  getDescription: (product: PRODUCT) => string;
  getCategories: (product: PRODUCT) => string[];
  getId: (product: PRODUCT) => number;
  getFormattedPrice: (price: number) => string;
  getTotalReviews: (product: PRODUCT) => number;
  getAverageRating: (product: PRODUCT) => number;
  getBreadcrumbs?: (product: PRODUCT) => AgnosticBreadcrumb[];
  [getterName: string]: any;
}

export interface FacetsGetters<SEARCH_DATA, RESULTS, CRITERIA = any> {
  getAll: (searchData: FacetSearchResult<SEARCH_DATA>, criteria?: CRITERIA) => AgnosticFacet[];
  getGrouped: (searchData: Facet[]) => AgnosticGroupedFacet[];
  getCategoryTree: (searchData: FacetSearchResult<SEARCH_DATA>) => AgnosticCategoryTree;
  getSortOptions: (searchData: FacetSearchResult<SEARCH_DATA>) => AgnosticSort;
  getProducts: (searchData: FacetSearchResult<SEARCH_DATA>) => RESULTS;
  getPagination: (searchData: FacetSearchResult<SEARCH_DATA>) => AgnosticPagination;
  getBreadcrumbs: (searchData: FacetSearchResult<SEARCH_DATA>) => AgnosticBreadcrumb[];
  [getterName: string]: (element: any, options?: any) => unknown;
}
