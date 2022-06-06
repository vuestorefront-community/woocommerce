import {
  FacetsGetters,
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticGroupedFacet,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import type { Facet, FacetSearchCriteria } from '@vue-storefront/woocommerce-api';


const availableSortingOptions = {
  'name_ASC': {
    order: 'ASC',
    orderby: 'name'
  },
  'name_DESC': {
    order: 'DESC',
    orderby: 'name'
  },
  'id_ASC': {
    order: 'ASC',
    orderby: 'id'
  },
  'id_DESC': {
    order: 'DESC',
    orderby: 'id'
  },
  'date_ASC': {
    order: 'ASC',
    orderby: 'date'
  },
  'date_DESC': {
    order: 'DESC',
    orderby: 'date'
  },
  'price_ASC': {
    order: 'ASC',
    orderby: 'price'
  },
  'price_DESC': {
    order: 'DESC',
    orderby: 'price'
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params: FacetSearchResult<any>, criteria?: FacetSearchCriteria): AgnosticFacet[] {
  var attributes = {};

  var facets = [];

  (params?.data?.products || []).forEach(product => {
    if (product?.type != 'variation') {
      Object.keys(product.attributes).forEach(key => {
        if (!(key in attributes)) {
          attributes[key] = product.attributes[key].split(",").map((val) => val.trim())

          product.attributes[key].split(",").forEach(value => {
            facets.push({
              type: 'attribute',
              id: key,
              value: value.trim(),
              attrName: key,
            })
          })
        }
        else {
          product.attributes[key].split(",").forEach(attribute => {
            if (!attributes[key].includes(attribute.trim())) {
              attributes[key].push(attribute.trim())
              facets.push({
                type: 'attribute',
                id: key,
                value: attribute.trim(),
                attrName: key,
              })
            }
          })
        }
      })
    }
  })
  return facets;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGrouped(params: FacetSearchResult<any>, criteria?: FacetSearchCriteria): AgnosticGroupedFacet[] {
  var attributes = {};

  (params?.data?.products || []).forEach(product => {
    if (product?.type != 'variation') {
      Object.keys(product.attributes).forEach(key => {
        if (!(key in attributes)) {
          attributes[key] = product.attributes[key].split(",").map((val) => val.trim())
        }
        else {
          product.attributes[key].split(",").forEach(attribute => {
            if (!attributes[key].includes(attribute.trim())) {
              attributes[key].push(attribute.trim())
            }
          })
        }
      })
    }
  })

  var groupedFacet = Object.keys(attributes).map(key => {
    return {
      id: key,
      label: key,
      options: attributes[key].map(val => {
        return {
          type: key,
          id: val,
          value: val,
        }
      })
    }
  })

  return groupedFacet;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSortOptions(params: FacetSearchResult<any>): any {
  return {
    options: Object.keys(availableSortingOptions).map(key => key),
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProducts(params: FacetSearchResult<any>): any {
  return params?.data?.products || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
