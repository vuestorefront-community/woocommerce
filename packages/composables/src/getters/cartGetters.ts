import {
  CartGetters,
  AgnosticPrice,
  AgnosticTotals,
  AgnosticCoupon,
  AgnosticDiscount,
  AgnosticAttribute
} from '@vue-storefront/core';
import type { Cart, CartItem } from '@vue-storefront/woocommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getItems(cart: any): CartItem[] {
  return cart.contents;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getItemName(item: any): string {
  return item.name;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getItemImage(item: any): string {
  return item.image;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getItemPrice(item: any): AgnosticPrice {
  return {
    regular: item.priceEach,
    special: item.priceEach
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getItemQty(item: any): number {
  return item.quantity;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getItemKey(item: any): string {
  return item.key;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes(item: CartItem, filterByAttributeName?: Array<string>): Record<string, AgnosticAttribute | string> {
  return {
    color: 'red'
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getItemSku(item: any): string {
  return item.sku;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getTotals(cart: any): AgnosticTotals {
  let total = 0;
  let subtotal = 0;
  // const special = 0;

  (cart?.contents || []).forEach((item) => {
    total += item.priceTotal;
    subtotal += item.priceSubtotal;
  });

  return {
    total: total,
    subtotal: subtotal,
    special: subtotal
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(cart: Cart): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function getTotalItems(cart: any): number {
  let total = 0;

  (cart?.contents || []).forEach((item) => {
    total += item.quantity;
  });

  return total;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoupons(cart: Cart): AgnosticCoupon[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDiscounts(cart: Cart): AgnosticDiscount[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-module-boundary-types
function isInCart(cart: any, product: number): boolean {
  let inCart = false;
  (cart?.contents || []).forEach((item) => {
    if (item.id === product) {
      inCart = true;
    }
  });

  return inCart;
}

export const cartGetters: CartGetters<Cart, CartItem> = {
  getTotals,
  getShippingPrice,
  getItems,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getItemSku,
  getFormattedPrice,
  getTotalItems,
  getCoupons,
  getDiscounts,
  getItemKey,
  isInCart
};
