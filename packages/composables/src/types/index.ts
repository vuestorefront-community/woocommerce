import type { Product } from '@vue-storefront/woocommerce-api';
export { UseCategory, UseProduct } from '@vue-storefront/core';

export type Address = Record<string, unknown>;

export type Category = Record<string, unknown>;

export type User = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type UserAddress = Record<string, unknown>;

export type Cart = Record<string, unknown>;

export type CartItem = Record<string, unknown>;

export type Coupon = Record<string, unknown>;

export type Product = Record<string, unknown>;

export type Order = Record<string, unknown>;

export type OrderItem = Record<string, unknown>;

export type Review = Record<string, unknown>;

export type Shipping = Record<string, unknown>;

export type ShippingMethod = Record<string, unknown>;

export type WishlistProduct = Record<string, unknown>;

export type Wishlist = Record<string, unknown>;

export type ProductsResponse = {
  data: Product[];
  total: number;
};

export type OrderSearchParams = Record<string, any>;

export type OrdersResponse = {
  data: any[];
  total: number;
};

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

export interface FacetResultsData {
  products: Product[];
  categories: Category[];
  facets: Record<string, Filter>;
  total: number;
  perPageOptions: number[];
  itemsPerPage: number;
}
