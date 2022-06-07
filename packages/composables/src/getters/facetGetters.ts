import {
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  FacetsGetters,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import {
} from '../types';
import type { Facet, FacetSearchCriteria } from '@vue-storefront/woocommerce-api';


const availableSortingOptions = {
  'name_ASC': {
    order: 'ASC',
    orderby: 'name',
    label: 'Name from a to z'
  },
  'name_DESC': {
    order: 'DESC',
    orderby: 'name',
    label: 'Name from z to a'
  },
  // 'id_ASC': {
  //   order: 'ASC',
  //   orderby: 'id',
  //   label: 'ID in ASCENDING order'
  // },
  // 'id_DESC': {
  //   order: 'DESC',
  //   orderby: 'id',
  //   label: 'ID in DESCENDING order'
  // },
  'date_ASC': {
    order: 'ASC',
    orderby: 'date',
    label: 'Date from old to new'
  },
  'date_DESC': {
    order: 'DESC',
    orderby: 'date',
    label: 'Date from new to old'
  },
  'price_ASC': {
    order: 'ASC',
    orderby: 'price',
    label: 'Price from low to high'
  },
  'price_DESC': {
    order: 'DESC',
    orderby: 'price',
    label: 'Price from high to low'
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params: FacetSearchResult<any>, criteria?: FacetSearchCriteria): AgnosticFacet[] {
  var facets = [];

  Object.keys(params?.data || {}).forEach(key => {
    Object.keys(params?.data[key]?.values || {}).forEach(val => {
      facets.push({
        type: key,
        id: val,
        value: params.data[key].values[val].title,
        selected: (params.input?.filters[key] || []).includes(val),
        count: params.data[key].values[val].count
      })
    })
  })

  return facets;
}

function getGrouped(params: FacetSearchResult<any>): AgnosticGroupedFacet[] {
  var groupedFacet = Object.keys(params?.data || {}).map(key => {
    return {
      id: params.data[key].id,
      label: params.data[key].title,
      options: Object.keys(params?.data[key]?.values || {}).map(val => {
        return {
          type: params.data[key].id,
          id: val,
          value: params.data[key].values[val].title,
          selected: (params.input?.filters[key] || []).includes(val),
          count: params.data[key].values[val].count
        }
      })
    }
  })

  return groupedFacet;
}

function getSortOptions(params: FacetSearchResult<any>): any {
  return {
    options: Object.keys(availableSortingOptions).map(key => { return { key, label: availableSortingOptions[key].label } }),
    selected: params?.input?.sort || 'name_ASC'
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(params: FacetSearchResult<any>): AgnosticCategoryTree {
  return {
    label: '',
    slug: '',
    items: null,
    isCurrent: false,
    count: 0
  };
}

function getProducts(params: FacetSearchResult<any>): any {
  return params?.data?.products || [];
}

function getPagination(params: FacetSearchResult<any>): AgnosticPagination {
  return {
    currentPage: params?.input?.page || 0,
    totalPages: params?.data?.pages || 1,
    totalItems: params?.data?.total || 20,
    itemsPerPage: params?.input?.itemsPerPage || 20,
    pageOptions: [20, 60, 100]
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(params: FacetSearchResult<any>): AgnosticBreadcrumb[] {
  return [];
}

export const facetGetters: FacetsGetters<Facet, FacetSearchCriteria> = {
  getSortOptions,
  getGrouped,
  getAll,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination
};
