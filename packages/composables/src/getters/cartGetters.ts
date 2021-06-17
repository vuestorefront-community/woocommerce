import { CartGetters, AgnosticPrice, AgnosticTotals, AgnosticCoupon, AgnosticDiscount } from '@vue-storefront/core';
import { Cart, LineItem } from '@vue-storefront/woocommerce-api';
import {getProductGallery} from './productGetters';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItems = (cart: Cart): any[] => {
  if (!cart || !cart.contents) {
    return [];
  }

  return cart.contents.nodes.map(item => ({
    _id: item.key,
    _description: item.product.node.description,
    _categoriesRef: [
      '1',
      '2'
    ],
    images: getProductGallery(item.product.node),
    ...item
  }));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemName = (product: any): string => product.product.node.name || 'Product\'s name';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemImage = (product: any): string => product?.images[0] || 'https://s3-eu-west-1.amazonaws.com/commercetools-maximilian/products/081223_1_large.jpg';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemPrice = (product: any): AgnosticPrice => {
  return {
    regular: parseFloat(product.subtotal),
    special: parseFloat(product.subtotal)
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemQty = (product: LineItem): number => product.quantity;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemAttributes = (product: LineItem, filterByAttributeName?: Array<string>) => ({ color: 'red' });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartItemSku = (product: any): string => product.product.node.sku || 'some-sku';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartTotals = (cart: Cart): AgnosticTotals => {
  return {
    total: parseFloat(cart.total),
    subtotal: parseFloat(cart.subtotal)
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartShippingPrice = (cart: Cart): number => 0;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCartTotalItems = (cart: Cart): number => {
  return cart && cart.contents ? cart.contents.itemCount : 0;
};

export const getFormattedPrice = (price: number) => String(price);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCoupons = (cart: Cart): AgnosticCoupon[] => [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDiscounts = (cart: Cart): AgnosticDiscount[] => [];

const cartGetters: CartGetters<Cart, LineItem> = {
  getTotals: getCartTotals,
  getShippingPrice: getCartShippingPrice,
  getItems: getCartItems,
  getItemName: getCartItemName,
  getItemImage: getCartItemImage,
  getItemPrice: getCartItemPrice,
  getItemQty: getCartItemQty,
  getItemAttributes: getCartItemAttributes,
  getItemSku: getCartItemSku,
  getFormattedPrice: getFormattedPrice,
  getTotalItems: getCartTotalItems,
  getCoupons,
  getDiscounts
};

export default cartGetters;
