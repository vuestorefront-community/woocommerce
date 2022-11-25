export type CustomQuery = Record<string, string>;

export declare type ComposableFunctionArgs<T> = T & {
  customQuery?: CustomQuery;
};

export declare type Product = {
  id?: number;
  type?: string;
  title?: string;
  description?: string;
  slug?: string;
  price?: {
    original?: string;
    current?: string;
  };
  sku?: string;
  sales?: number;
  inStock?: boolean;
  coverImage?: string;
  parent?: number;
  featured?: boolean;
  categories?: Array<string>;
  galleryImages?: Array<string>;
  attributes?: Record<string, string>;
  variants?: Array<Product>;
};

export declare type GetProductsPaginatedSearchParams = {
  page?: number;
  itemsPerPage?: number;
  categorySlug?: string;
  sort?: string;
  filters?: Record<string, Array<string>>;
  paginate?: boolean;
};

export declare type GetProductSingleSearchParams = {
  id: number;
};

export declare type GetCategorySearchParams = Record<string, unknown>;

export declare type Category = {
  type?: string;
  id?: number;
  title?: string;
  description?: string;
  slug?: string;
  count?: number;
  parent_id?: number;
  category_slug_path?: string;
};

export interface GetFacetSearchParams {
  categorySlug?: string;
  rootCatSlug?: string;
  term?: string;
  page?: number;
  itemsPerPage?: number;
  sort?: string;
  filters?: Record<string, string[]>;
  metadata?: any;
  [x: string]: any;
}

export interface FacetSearchResult<S> {
  data: S;
  input: GetFacetSearchParams;
}

export interface PostRegisterParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface PostTokenParams {
  username: string;
  password: string;
}

export interface User {
  token: string;
  email: string;
  displayName: string;
}

export interface AddToCartParams {
  id: number;
  quantity?: number;
  cartMethod: string;
}

export interface UpdateCartParams {
  key: string;
  quantity: number;
  cartMethod: string;
}

export interface RemoveFromCartParams {
  key: string;
  cartMethod: string;
}

interface CartContents {
  key: string;
  quanityt: number;
  priceEach: string;
  priceTax: number;
  priceSubtotal: number;
  priceTotal: number;
  name: string;
  id: number;
  type: string;
  slug: string;
  sku: string;
  image: string;
}

export interface Cart {
  contents: CartContents;
}

export interface BillingAddress {
  firstName: string;
  lastname: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  postcode: string;
  state: string;
  phone: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShippingAddress extends BillingAddress {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateShippingAddressParams extends BillingAddress {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateBillingAddressParams extends BillingAddress {}

export interface PaymentMethod {
  id: string;
  title: string;
  description: string;
}

export interface PlaceOrderParams {
  paymentMethod: string;
  total: string;
}

export interface GetOrderParams {
  id: number;
}
