
export type CustomQuery = Record<string, string>;

export declare type ComposableFunctionArgs<T> = T & {
  customQuery?: CustomQuery;
};

export declare type Product = {
  id?: number,
  type?: string,
  title?: string,
  description?: string,
  slug?: string,
  price?: {
    original?: string,
    current?: string
  },
  sku?: string,
  sales?: number,
  inStock?: boolean,
  coverImage?: string,
  parent?: number,
  featured?: boolean,
  categories?: Array<string>,
  galleryImages?: Array<string>,
  attributes?: Record<string, string>,
  variants?: Array<Product>
}

export declare type GetProductsPaginatedSearchParams = {
  page?: number,
  itemsPerPage?: number,
  categorySlug?: string,
  sort?: string,
  filters?: Record<string, Array<string>>,
  paginate?: boolean
}

export declare type GetProductSingleSearchParams = {
  id: number
}

export declare type GetCategorySearchParams = Record<string, unknown>

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
