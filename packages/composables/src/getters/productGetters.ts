import {
  AgnosticPagination
} from '@vue-storefront/core';
import {
  AgnosticPrice,
  ProductGetters
} from '../types';
import type { Product, ProductFilter, ProductsResult } from '@vue-storefront/woocommerce-api';

function getProducts(productsResult: ProductsResult): Product[] {
  return productsResult?.products || [];
}

function getName(product: Product): string {
  return product?.title || 'Loading...';
}

function getSlug(product: Product): string {
  return product?.slug || 'no-slug';
}

function getPrice(product: Product): AgnosticPrice {
  return {
    regular: parseFloat(product?.price?.original || '0'),
    special: parseFloat(product?.price?.current || '0')
  };
}

function getGallery(product: Product): string[] {
  return [].concat(product?.coverImage || [], product?.images || []);
}

function getCoverImage(product: Product): string {
  return product?.coverImage || 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  return [
    {
      id: 1,
      type: 'simple',
      title: 'Black jacket',
      description: 'Some description',
      slug: 'black-jacket',
      price: {
        original: '12.34',
        current: '10.00'
      },
      sku: 'black-jacket',
      sales: 0,
      inStock: true,
      coverImage: 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg',
      parent: 0,
      featured: false,
      categories: [],
      images: [
        'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg'
      ],
      attributes: [],
      variants: []
    }
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(product: Product, filterByAttributeName?: string[]): any {
  const attributes = {};

  Object.values(product?.variants || {}).forEach((variant) => {
    Object.keys(variant.attributes).forEach((attName) => {
      if (!attributes[attName] || !attributes[attName].includes(variant.attributes[attName]))
        attributes[attName] = [...(attributes[attName] || []), variant.attributes[attName]].sort();
    });
  });

  return attributes;
}

function getConfigurations(product: Product): any {
  const configurations = [];

  Object.values(product?.variants || {}).forEach((variant) => {
    const currentProductConfig = {};
    Object.keys(variant.attributes).forEach((attName) => {
      currentProductConfig[attName] = variant.attributes[attName];
    });
    configurations.push(currentProductConfig);
  });
  return configurations;
}

function getFilteredAttributes(product: Product, filters: any = {}): any {
  const attributes = {};
  const configurations = getConfigurations(product);

  configurations.forEach((config) => {
    Object.keys(config).forEach((attribute) => {
      if (Object.keys(config).filter((c) => c !== attribute).reduce((total, curr) => (total && (!filters[curr] || filters[curr].includes(config[curr]))), true) && (!attributes[attribute] || !attributes[attribute].includes(config[attribute]))) {
        attributes[attribute] = [...(attributes[attribute] || []), config[attribute]].sort();
      }
    });
  });

  return attributes;
}

function getDescription(product: Product): string {
  return product?.description || '';
}

function getCategories(product: Product): string[] {
  return product?.categories || [];
}

function getId(product: Product): number {
  return product?.id || -1;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return 0;
}

function getSingleProduct(products: Product[]): Product {
  return products[0] || null;
}
function getPagination(productsResult: ProductsResult): AgnosticPagination {
  return {
    currentPage: productsResult?.page || 0,
    totalPages: productsResult?.pages || 1,
    totalItems: productsResult?.total || 20,
    itemsPerPage: productsResult?.perPage || 20,
    pageOptions: [20, 60, 100]
  };
}

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getProducts,
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategories,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating,
  getSingleProduct,
  getPagination,
  getConfigurations,
  getFilteredAttributes
};
