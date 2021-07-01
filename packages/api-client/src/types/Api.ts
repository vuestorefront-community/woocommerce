import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';
import { ApiClientMethods } from '@vue-storefront/core';

import {
  Cart,
  ProductCategory,
  Product,
  Customer,
  AddToCartPayload,
  RemoveItemsFromCartPayload,
  UpdateItemQuantitiesPayload, Maybe, Scalars
} from './GraphQL';

export interface BaseSearch {
  limit?: number;
  offset?: number;
  sort?: string[];
}

export enum AttributeType {
  STRING = 'StringAttribute',
  DATE = 'DateAttribute',
  DATETIME = 'DateTimeAttribute',
  TIME = 'TimeAttribute',
  NUMBER = 'NumberAttribute',
  ENUM = 'EnumAttribute',
  LOCALIZED_ENUM = 'LocalizedEnumAttribute',
  LOCALIZED_STRING = 'LocalizedStringAttribute',
  MONEY = 'MoneyAttribute',
  BOOLEAN = 'BooleanAttribute'
}

export interface Filter {
  type: AttributeType;
  name: string;
  value: any;
}

export interface ProductWhereSearch extends BaseSearch {
  catId?: string | string[];
  skus?: string[];
  slug?: string;
  id?: string;
  key?: string;
  filters?: Filter[];
}

export interface CategoryWhereSearch extends BaseSearch {
  catId?: string;
  key?: string;
  slug?: string;
}

/** The payload for the Whishlist mutations */
export interface WhishlistPayload {
  wishlist: number[];
  clientMutationId?: Maybe<Scalars['String']>;
}

export type QueryResponse<K extends string, V> = ApolloQueryResult<Record<K, V>>;
export type MutationResponse<K extends string, V> = FetchResult<Record<K, V>>;
export type CartQueryResponse = QueryResponse<'cart', Cart>;
export type MeQueryResponse = QueryResponse<'customer', Customer>;
export type AddToCartMutationResponse = QueryResponse<'addToCart', AddToCartPayload>;
export type AddToWishlistMutationResponse = MutationResponse<'addToWishlist', WhishlistPayload>;
export type RemoveFromWishlistMutationResponse = MutationResponse<'removeFromWishlist', WhishlistPayload>;
export type ClearWishlistMutationResponse = MutationResponse<'clearWishlist', WhishlistPayload>;
export type UpdateCartMutationResponse = QueryResponse<'updateItemQuantities', UpdateItemQuantitiesPayload>;
export type CreateCartQueryResponse = ApolloQueryResult<{cart:Cart, customer:Customer}>;

interface ApiMethods {
  addToCart (productId: number, quantity: number): Promise<AddToCartMutationResponse>;
  addToWishlist (productId: number): Promise<AddToWishlistMutationResponse>;
  removeFromWishlist (productId: number): Promise<RemoveFromWishlistMutationResponse>;
  clearWishlist (productId: number): Promise<ClearWishlistMutationResponse>;
  updateCart (items : []): Promise<UpdateCartMutationResponse>;
  clearCart (): Promise<QueryResponse<'removeItemsFromCart', RemoveItemsFromCartPayload>>;
  getCart (cartId : string): Promise<CartQueryResponse>;
  getCategory (params): Promise<QueryResponse<'categories', ProductCategory>>;
  getMe (): Promise<MeQueryResponse>;
  getProduct (params): Promise<QueryResponse<'products', Product>>;
}

export type WoocommerceMethods = ApiClientMethods<ApiMethods>
