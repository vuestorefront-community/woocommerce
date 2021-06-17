/* istanbul ignore file */

import {
  Context,
  useCartFactory,
  UseCartFactoryParams
} from '@vue-storefront/core';
import type {Product, Cart, CartItem, Coupon, CartQueryResponse} from '@vue-storefront/woocommerce-api';
import {AddToCartMutationResponse, UpdateCartMutationResponse} from '../../../api-client/src';

const getCartItemByProduct = (currentCart: Cart, product) => {
  return (currentCart.contents && currentCart.contents.nodes)
    ? currentCart.contents.nodes.find((item) => item.product.node.databaseId === product.databaseId) : undefined;
};

/**
 * Get the updated items in the below format required for mutation input.
 *
 * [
 * { "key": "33e75ff09dd601bbe6dd51039152189", "quantity": 1 },
 * { "key": "02e74f10e0327ad868d38f2b4fdd6f0", "quantity": 1 },
 * ]
 *
 * Creates an array in above format with the newQty (updated Qty ).
 *
 */
export const getUpdatedItems = (products, newQty, cartKey) => {
  // Create an empty array.
  const updatedItems = [];

  // Loop through the product array.
  products.map((cartItem) => {

    // If you find the cart key of the product user is trying to update, push the key and new qty.
    if (cartItem.key === cartKey) {
      updatedItems.push({
        key: cartKey,
        quantity: parseInt(newQty)
      });

      // Otherwise just push the existing qty without updating.
    } else {
      updatedItems.push({
        key: cartItem.key,
        quantity: cartItem.quantity
      });
    }
  });

  // Return the updatedItems array with new Qtys.
  return updatedItems;
};

const factoryParams: UseCartFactoryParams<Cart, CartItem, Product, Coupon> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const apiState = context.$woocommerce.config.state;
    const customerToken = apiState.getCustomerToken();

    if (customerToken) {
      const cartResponse : CartQueryResponse = await context.$woocommerce.api.getCart('');
      return cartResponse.data.cart;
    }

    const emptyCart : Cart = {
      contents: {}
    };
    return emptyCart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    const cartResponse : AddToCartMutationResponse = await context.$woocommerce.api.addToCart(product.databaseId, quantity);
    return cartResponse.data.addToCart.cart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentCart, product, customQuery }) => {
    const items = getUpdatedItems(currentCart.contents.nodes, 0, product.key);
    const response: UpdateCartMutationResponse = await context.$woocommerce.api.updateCart(items);
    return response.data.updateItemQuantities.cart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    const items = getUpdatedItems(currentCart.contents.nodes, quantity, product.key);
    const response: UpdateCartMutationResponse = await context.$woocommerce.api.updateCart(items);
    return response.data.updateItemQuantities.cart;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }) => {
    await context.$woocommerce.api.clearCart();
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    console.log('Mocked: applyCoupon');
    return {updatedCart: {}, updatedCoupon: {}};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (context: Context, { currentCart, coupon, customQuery }) => {
    console.log('Mocked: removeCoupon');
    return {updatedCart: {}};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    return Boolean(currentCart && getCartItemByProduct(currentCart, product));
  }
};

export default useCartFactory<Cart, CartItem, Product, Coupon>(factoryParams);
