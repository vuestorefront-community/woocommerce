import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/woocommerce-api';
import {getVariantByAttributes} from './_utils';

type ProductVariantFilters = any

// TODO: Add interfaces for some of the methods in core
// Product

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductName = (product: Product): string => product?.name || 'Product\'s name';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductSlug = (product: Product): string => product.sku || 'product/' + product.id;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductPrice = (product): AgnosticPrice => {
  return {
    regular: parseFloat(product.price) || 0,
    special: parseFloat(product.salePrice) || 0
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductGallery = (product: Product): AgnosticMediaGalleryItem[] => {
  const original = product.image?.sourceUrl || 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg';

  return [
    {
      small: original,
      normal: original,
      big: original
    },
    {
      small: original,
      normal: original,
      big: original
    }
  ];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductCoverImage = (product: Product): string => product.image?.sourceUrl || 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductFiltered = (products: (Product)[], filters: ProductVariantFilters | any = {}): (Product)[] => {
  if (!products) {
    return [];
  }

  if (filters.attributes && Object.keys(filters.attributes).length > 0) {
    return [getVariantByAttributes(products, filters.attributes)];
  }

  if (filters.master) {
    // @todo implement master filtering?
    // return products.filter((product) => (product as any)._master);
  }

  return products;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAttributes = (products: (Product)[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  return {};
};

export const getProductDescription = (product: Product): any => (product as any)?.description || '';

export const getProductCategoryIds = (product: Product): string[] => (product as any)?.productCategories || '';

export const getProductId = (product: Product): string => (product as any)?.id || '';

export const getFormattedPrice = (price: number) => String(price);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductTotalReviews = (product: Product): number => 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAverageRating = (product: Product): number => 0;

const productGetters: ProductGetters<Product, ProductVariantFilters> = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getId: getProductId,
  getFormattedPrice: getFormattedPrice,
  getTotalReviews: getProductTotalReviews,
  getAverageRating: getProductAverageRating
};

export default productGetters;
