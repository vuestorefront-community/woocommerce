/* istanbul ignore file */
import {
  Context,
  useWishlistFactory,
  UseWishlistFactoryParams
} from '@vue-storefront/core';
import { ref, Ref } from '@vue/composition-api';
import { Wishlist, WishlistProduct, Product } from '../types';
import useUser from '../useUser';
import {AddToWishlistMutationResponse, ClearWishlistMutationResponse} from '@vue-storefront/woocommerce-api';
import {RemoveFromWishlistMutationResponse} from '../../../api-client/src';

export const wishlist: Ref<Wishlist> = ref(null);

// @ts-ignore
const params: UseWishlistFactoryParams<Wishlist, WishlistProduct, Product> = {
  provide() {
    return {
      user: useUser()
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    return context.user.load().then(() => ({
      productIds: (context.user.user.value && context.user.user.value.wishlist) ? context.user.user.value.wishlist : []
    }));
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentWishlist, product }) => {
    const response : AddToWishlistMutationResponse = await context.$woocommerce.api.addToWishlist(product.databaseId);
    return { productIds: response.data.addToWishlist.wishlist };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentWishlist, product }) => {
    const response : RemoveFromWishlistMutationResponse = await context.$woocommerce.api.removeFromWishlist(product.databaseId);
    return { productIds: response.data.removeFromWishlist.wishlist };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentWishlist }) => {
    const response : ClearWishlistMutationResponse = await context.$woocommerce.api.clearWishlist();
    return { productIds: response.data.clearWishlist.wishlist };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInWishlist: (context: Context, { currentWishlist, product }) => currentWishlist.productIds.indexOf(parseInt(<any> product.databaseId)) !== -1
};

export default useWishlistFactory<Wishlist, WishlistProduct, Product>(params);
