export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

/** Input for the addCartItems mutation */
export interface AddCartItemsInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Cart items to be added */
  items?: Maybe<Array<Maybe<CartItemInput>>>;
}

/** The payload for the addCartItems mutation */
export interface AddCartItemsPayload {
  added?: Maybe<Array<Maybe<CartItem>>>;
  cart?: Maybe<Cart>;
  cartErrors?: Maybe<Array<Maybe<CartItemError>>>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the addFee mutation */
export interface AddFeeInput {
  /** Fee amount */
  amount?: Maybe<Scalars['Float']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Unique name for the fee. */
  name: Scalars['String'];
  /** The tax class for the fee if taxable. */
  taxClass?: Maybe<TaxClassEnum>;
  /** Is the fee taxable? */
  taxable?: Maybe<Scalars['Boolean']>;
}

/** The payload for the addFee mutation */
export interface AddFeePayload {
  cart?: Maybe<Cart>;
  cartFee?: Maybe<CartFee>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the addToCart mutation */
export interface AddToCartInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<Scalars['String']>;
  /** Cart item product database ID or global ID */
  productId: Scalars['Int'];
  /** Cart item quantity */
  quantity?: Maybe<Scalars['Int']>;
  /** Cart item product variation attributes */
  variation?: Maybe<Array<Maybe<ProductAttributeInput>>>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<Scalars['Int']>;
}

/** The payload for the addToCart mutation */
export interface AddToCartPayload {
  cart?: Maybe<Cart>;
  cartItem?: Maybe<CartItem>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Coupon applied to the shopping cart. */
export interface AppliedCoupon {
  /** Coupon code */
  code: Scalars['String'];
  /** Discount applied with this coupon */
  discountAmount: Scalars['String'];
  /** Taxes on discount applied with this coupon */
  discountTax: Scalars['String'];
}


/** Coupon applied to the shopping cart. */
export interface AppliedCouponDiscountAmountArgs {
  excludeTax?: Maybe<Scalars['Boolean']>;
}

/** Input for the applyCoupon mutation */
export interface ApplyCouponInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Code of coupon being applied */
  code: Scalars['String'];
}

/** The payload for the applyCoupon mutation */
export interface ApplyCouponPayload {
  applied?: Maybe<AppliedCoupon>;
  cart?: Maybe<Cart>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export interface Avatar {
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a
   * 404 instead of a default image), &#039;retro&#039; (8bit),
   * &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face),
   * &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;,
   * &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039;
   * (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;,
   * &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
}

/**
 * What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are
 * judged in that order. Default is the value of the 'avatar_rating' option
 */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X'
}

/** Product backorder enumeration */
export enum BackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES'
}

/** The cart object */
export interface Cart {
  /** Coupons applied to the cart */
  appliedCoupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  /** Available shipping methods for this order. */
  availableShippingMethods?: Maybe<Array<Maybe<ShippingPackage>>>;
  /** Shipping method chosen for this order. */
  chosenShippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the Cart type and the CartItem type */
  contents?: Maybe<CartToCartItemConnection>;
  /** Cart contents tax */
  contentsTax?: Maybe<Scalars['String']>;
  /** Cart contents total */
  contentsTotal?: Maybe<Scalars['String']>;
  /** Cart discount tax */
  discountTax?: Maybe<Scalars['String']>;
  /** Cart discount total */
  discountTotal?: Maybe<Scalars['String']>;
  /** Do display prices include taxes */
  displayPricesIncludeTax?: Maybe<Scalars['Boolean']>;
  /** Cart fee tax */
  feeTax?: Maybe<Scalars['String']>;
  /** Cart fee total */
  feeTotal?: Maybe<Scalars['String']>;
  /** Additional fees on the cart. */
  fees?: Maybe<Array<Maybe<CartFee>>>;
  /** Is cart empty */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /** Is customer shipping address needed */
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  /** Cart shipping tax */
  shippingTax?: Maybe<Scalars['String']>;
  /** Cart shipping total */
  shippingTotal?: Maybe<Scalars['String']>;
  /** Cart subtotal */
  subtotal?: Maybe<Scalars['String']>;
  /** Cart subtotal tax */
  subtotalTax?: Maybe<Scalars['String']>;
  /** Cart total after calculation */
  total?: Maybe<Scalars['String']>;
  /** Cart total tax amount */
  totalTax?: Maybe<Scalars['String']>;
  /** Cart total taxes itemized */
  totalTaxes?: Maybe<Array<Maybe<CartTax>>>;
}


/** The cart object */
export interface CartContentsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CartToCartItemConnectionWhereArgs>;
}

/** An error that occurred when updating the cart */
export interface CartError {
  /** Reason for error */
  reasons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Type of error */
  type: CartErrorType;
}

/** Cart error type enumeration */
export enum CartErrorType {
  InvalidCartItem = 'INVALID_CART_ITEM',
  InvalidCoupon = 'INVALID_COUPON',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD'
}

/** An additional fee */
export interface CartFee {
  /** Fee amount */
  amount?: Maybe<Scalars['Float']>;
  /** Fee ID */
  id: Scalars['ID'];
  /** Fee name */
  name: Scalars['String'];
  /** Fee tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Is fee taxable? */
  taxable?: Maybe<Scalars['Boolean']>;
  /** Fee total */
  total?: Maybe<Scalars['Float']>;
}

/** A item in the cart */
export interface CartItem {
  /** Object meta data */
  extraData?: Maybe<Array<Maybe<MetaData>>>;
  /** CartItem ID */
  key: Scalars['ID'];
  /** Connection between the CartItem type and the Product type */
  product?: Maybe<CartItemToProductConnectionEdge>;
  /** Quantity of the product */
  quantity?: Maybe<Scalars['Int']>;
  /** Item&#039;s subtotal */
  subtotal?: Maybe<Scalars['String']>;
  /** Item&#039;s subtotal tax */
  subtotalTax?: Maybe<Scalars['String']>;
  /** Item&#039;s tax */
  tax?: Maybe<Scalars['String']>;
  /** Item&#039;s total */
  total?: Maybe<Scalars['String']>;
  /** Connection between the CartItem type and the ProductVariation type */
  variation?: Maybe<CartItemToProductVariationConnectionEdge>;
}


/** A item in the cart */
export interface CartItemExtraDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Error that occurred when adding an item to the cart. */
export interface CartItemError extends CartError {
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<Scalars['String']>;
  /** Cart item product database ID or global ID */
  productId: Scalars['Int'];
  /** Cart item quantity */
  quantity?: Maybe<Scalars['Int']>;
  /** Reason for error */
  reasons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Type of error */
  type: CartErrorType;
  /** Cart item product variation attributes */
  variation?: Maybe<Array<Maybe<ProductAttributeOutput>>>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<Scalars['Int']>;
}

/** Cart item quantity */
export interface CartItemInput {
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<Scalars['String']>;
  /** Cart item product database ID or global ID */
  productId: Scalars['Int'];
  /** Cart item quantity */
  quantity?: Maybe<Scalars['Int']>;
  /** Cart item product variation attributes */
  variation?: Maybe<Array<Maybe<ProductAttributeInput>>>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<Scalars['Int']>;
}

/** Cart item quantity */
export interface CartItemQuantityInput {
  /** Cart item being updated */
  key: Scalars['ID'];
  /** Cart item's new quantity */
  quantity: Scalars['Int'];
}

/** Connection between the CartItem type and the Product type */
export interface CartItemToProductConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Product>;
}

/** Connection between the CartItem type and the ProductVariation type */
export interface CartItemToProductVariationConnectionEdge {
  /** Attributes of the variation. */
  attributes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /** The nodes of the connection, without the edges */
  node?: Maybe<ProductVariation>;
}

/** An itemized cart tax item */
export interface CartTax {
  /** Tax amount */
  amount?: Maybe<Scalars['String']>;
  /** Tax Rate ID */
  id: Scalars['ID'];
  /** Is tax compound? */
  isCompound?: Maybe<Scalars['Boolean']>;
  /** Tax label */
  label: Scalars['String'];
}

/** Connection between the Cart type and the CartItem type */
export interface CartToCartItemConnection {
  /** Edges for the CartToCartItemConnection connection */
  edges?: Maybe<Array<Maybe<CartToCartItemConnectionEdge>>>;
  /** Total number of items in the cart. */
  itemCount?: Maybe<Scalars['Int']>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<CartItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
  /** Total number of different products in the cart */
  productCount?: Maybe<Scalars['Int']>;
}

/** An edge in a connection */
export interface CartToCartItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<CartItem>;
}

/** Arguments for filtering the CartToCartItemConnection connection */
export interface CartToCartItemConnectionWhereArgs {
  /** Limit results to cart items that require shipping */
  needsShipping?: Maybe<Scalars['Boolean']>;
}

/** Product catalog visibility enumeration */
export enum CatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE'
}

/** The category type */
export interface Category extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, HierarchicalTermNode, MenuItemLinkable {
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId?: Maybe<Scalars['Int']>;
  /** Connection between the category type and the category type */
  children?: Maybe<CategoryToCategoryConnection>;
  /** Connection between the category type and the ContentNode type */
  contentNodes?: Maybe<CategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  posts?: Maybe<CategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** The category type */
export interface CategoryAncestorsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The category type */
export interface CategoryChildrenArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
}


/** The category type */
export interface CategoryContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToContentNodeConnectionWhereArgs>;
}


/** The category type */
export interface CategoryEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The category type */
export interface CategoryEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The category type */
export interface CategoryPostsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToPostConnectionWhereArgs>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the category type and the category type */
export interface CategoryToAncestorsCategoryConnection {
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToAncestorsCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Category>;
}

/** Connection between the category type and the category type */
export interface CategoryToCategoryConnection {
  /** Edges for the CategoryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Category>;
}

/** Arguments for filtering the CategoryToCategoryConnection connection */
export interface CategoryToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the category type and the ContentNode type */
export interface CategoryToContentNodeConnection {
  /** Edges for the CategoryToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export interface CategoryToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the category type and the category type */
export interface CategoryToParentCategoryConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Category>;
}

/** Connection between the category type and the post type */
export interface CategoryToPostConnection {
  /** Edges for the CategoryToPostConnection connection */
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CategoryToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Arguments for filtering the CategoryToPostConnection connection */
export interface CategoryToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the category type and the Taxonomy type */
export interface CategoryToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** Input for the checkout mutation */
export interface CheckoutInput {
  /** Create new customer account */
  account?: Maybe<CreateAccountInput>;
  /** Order billing address */
  billing?: Maybe<CustomerAddressInput>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Order customer note */
  customerNote?: Maybe<Scalars['String']>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  isPaid?: Maybe<Scalars['Boolean']>;
  /** Order meta data */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Payment method ID. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Ship to a separate address */
  shipToDifferentAddress?: Maybe<Scalars['Boolean']>;
  /** Order shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Order shipping method */
  shippingMethod?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Order transaction ID */
  transactionId?: Maybe<Scalars['String']>;
}

/** The payload for the checkout mutation */
export interface CheckoutPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  order?: Maybe<Order>;
  redirect?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
}

/** A Comment object */
export interface Comment extends Node, DatabaseIdentifier {
  /**
   * User agent used to post the comment. This field is equivalent to
   * WP_Comment-&gt;comment_agent and the value matching the
   * &quot;comment_agent&quot; column in SQL.
   */
  agent?: Maybe<Scalars['String']>;
  /**
   * The approval status of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_approved and the value matching the
   * &quot;comment_approved&quot; column in SQL.
   */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<CommentToCommenterConnectionEdge>;
  /**
   * IP address for the author. This field is equivalent to
   * WP_Comment-&gt;comment_author_IP and the value matching the
   * &quot;comment_author_IP&quot; column in SQL.
   */
  authorIp?: Maybe<Scalars['String']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  commentId?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
  /**
   * Content of the comment. This field is equivalent to
   * WP_Comment-&gt;comment_content and the value matching the
   * &quot;comment_content&quot; column in SQL.
   */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /**
   * Date the comment was posted in local time. This field is equivalent to
   * WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   */
  date?: Maybe<Scalars['String']>;
  /**
   * Date the comment was posted in GMT. This field is equivalent to
   * WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column
   */
  dateGmt?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /**
   * Karma value for the comment. This field is equivalent to
   * WP_Comment-&gt;comment_karma and the value matching the
   * &quot;comment_karma&quot; column in SQL.
   */
  karma?: Maybe<Scalars['Int']>;
  /** Connection between the Comment type and the Comment type */
  parent?: Maybe<CommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<CommentToCommentConnection>;
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and
   * the value matching the &quot;comment_type&quot; column in SQL.
   */
  type?: Maybe<Scalars['String']>;
}


/** A Comment object */
export interface CommentContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A Comment object */
export interface CommentParentArgs {
  where?: Maybe<CommentToParentCommentConnectionWhereArgs>;
}


/** A Comment object */
export interface CommentRepliesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CommentToCommentConnectionWhereArgs>;
}

/** A Comment Author object */
export interface CommentAuthor extends Node, Commenter {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email for the comment author */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
}

/** Connection between the Comment type and the Comment type */
export interface CommentToCommentConnection {
  /** Edges for the CommentToCommentConnection connection */
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CommentToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the CommentToCommentConnection connection */
export interface CommentToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Connection between the Comment type and the Commenter type */
export interface CommentToCommenterConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Commenter>;
}

/** Connection between the Comment type and the ContentNode type */
export interface CommentToContentNodeConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<ContentNode>;
}

/** Connection between the Comment type and the Comment type */
export interface CommentToParentCommentConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the CommentToParentCommentConnection connection */
export interface CommentToParentCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** The author of a comment */
export interface Commenter {
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by true/false approval of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID'
}

/** Nodes used to manage content */
export interface ContentNode {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn't exist or is greater than
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post->guid and the guid column in the "post_objects" database
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post->post_name field
   * and the post_name column in the database for the "post_objects" table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** URI path for the resource */
  uri: Scalars['String'];
}


/** Nodes used to manage content */
export interface ContentNodeEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** Nodes used to manage content */
export interface ContentNodeEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the ContentNode type and the ContentType type */
export interface ContentNodeToContentTypeConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<ContentType>;
}

/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLastConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<User>;
}

/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLockConnectionEdge {
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The nodes of the connection, without the edges */
  node?: Maybe<User>;
}

/** Connection between the ContentNode type and the EnqueuedScript type */
export interface ContentNodeToEnqueuedScriptConnection {
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentNodeToEnqueuedScriptConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>;
}

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export interface ContentNodeToEnqueuedStylesheetConnection {
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentNodeToEnqueuedStylesheetConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>;
}

/** A union of Content Node Types that support revisions */
export type ContentRevisionUnion = Post | Page;

/** The template assigned to a node of content */
export interface ContentTemplate {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
}

/** An Post Type object */
export interface ContentType extends Node, UniformResourceIdentifiable {
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the post-type object. */
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  /**
   * Whether a content type is intended for use publicly either via the admin
   * interface or by front-end users. While the default settings of
   * exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are
   * inherited from public, each does not rely on this relationship and controls a
   * very specific intention.
   */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /**
   * Where to show the content type in the admin menu. To work, $show_ui must be
   * true. If true, the post type is shown in its own top level menu. If false, no
   * menu is shown. If a string of an existing top level menu (eg.
   * &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type
   * will be placed as a sub-menu of that.
   */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
}


/** An Post Type object */
export interface ContentTypeConnectedTaxonomiesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** An Post Type object */
export interface ContentTypeContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
}

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  Product = 'PRODUCT',
  /** The Type of Content object */
  ProductVariation = 'PRODUCT_VARIATION',
  /** The Type of Content object */
  ShopCoupon = 'SHOP_COUPON',
  /** The Type of Content object */
  ShopOrder = 'SHOP_ORDER',
  /** The Type of Content object */
  ShopOrderRefund = 'SHOP_ORDER_REFUND'
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the ContentType type and the ContentNode type */
export interface ContentTypeToContentNodeConnection {
  /** Edges for the ContentTypeToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentTypeToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export interface ContentTypeToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the ContentType type and the Taxonomy type */
export interface ContentTypeToTaxonomyConnection {
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  edges?: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ContentTypeToTaxonomyConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Taxonomy>;
}

/** Countries enumeration */
export enum CountriesEnum {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

/** A coupon object */
export interface Coupon extends Node {
  /** Amount off provided by the coupon */
  amount?: Maybe<Scalars['Float']>;
  /** Coupon code */
  code?: Maybe<Scalars['String']>;
  /** The ID of the coupon in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Date coupon created */
  date?: Maybe<Scalars['String']>;
  /** Date coupon expires */
  dateExpiry?: Maybe<Scalars['String']>;
  /** Explanation of what the coupon does */
  description?: Maybe<Scalars['String']>;
  /** Type of discount */
  discountType?: Maybe<DiscountTypeEnum>;
  /** Only customers with a matching email address can use the coupon */
  emailRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Excluding sale items mean this coupon cannot be used on items that are on sale (or carts that contain on sale items) */
  excludeSaleItems?: Maybe<Scalars['Boolean']>;
  /** Connection between the Coupon type and the productCategory type */
  excludedProductCategories?: Maybe<CouponToExcludedProductCategoriesConnection>;
  /** Connection between the Coupon type and the Product type */
  excludedProducts?: Maybe<CouponToExcludedProductsConnection>;
  /** Does this coupon grant free shipping? */
  freeShipping?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier for the coupon */
  id: Scalars['ID'];
  /** Individual use means this coupon cannot be used in conjunction with other coupons */
  individualUse?: Maybe<Scalars['Boolean']>;
  /** The number of products in your cart this coupon can apply to (for product discounts) */
  limitUsageToXItems?: Maybe<Scalars['Int']>;
  /** Maximum spend amount that must be met before this coupon can be used  */
  maximumAmount?: Maybe<Scalars['Float']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Minimum spend amount that must be met before this coupon can be used */
  minimumAmount?: Maybe<Scalars['Float']>;
  /** Date coupon modified */
  modified?: Maybe<Scalars['String']>;
  /** Connection between the Coupon type and the productCategory type */
  productCategories?: Maybe<CouponToProductCategoryConnection>;
  /** Connection between the Coupon type and the Product type */
  products?: Maybe<CouponToProductConnection>;
  /** How many times the coupon has been used */
  usageCount?: Maybe<Scalars['Int']>;
  /** Amount of times this coupon can be used globally */
  usageLimit?: Maybe<Scalars['Int']>;
  /** Amount of times this coupon can be used by a customer */
  usageLimitPerUser?: Maybe<Scalars['Int']>;
  /** Connection between the Coupon type and the Customer type */
  usedBy?: Maybe<CouponToCustomerConnection>;
}


/** A coupon object */
export interface CouponExcludedProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToExcludedProductCategoriesConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponExcludedProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToExcludedProductsConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A coupon object */
export interface CouponProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToProductCategoryConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToProductConnectionWhereArgs>;
}


/** A coupon object */
export interface CouponUsedByArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToCustomerConnectionWhereArgs>;
}

/** Error that occurred when applying a coupon to the cart. */
export interface CouponError extends CartError {
  /** Coupon code of the coupon the failed to be applied */
  code: Scalars['String'];
  /** Reason for error */
  reasons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Type of error */
  type: CartErrorType;
}

/** The Type of Identifier used to fetch a single Coupon. Default is ID. */
export enum CouponIdTypeEnum {
  /** Coupon code. */
  Code = 'CODE',
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** a coupon line object */
export interface CouponLine {
  /** Line&#039;s Coupon code */
  code?: Maybe<Scalars['String']>;
  /** Line&#039;s Coupon */
  coupon?: Maybe<Coupon>;
  /** The ID of the order item in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Line&#039;s Discount total */
  discount?: Maybe<Scalars['String']>;
  /** Line&#039;s Discount total tax */
  discountTax?: Maybe<Scalars['String']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
}


/** a coupon line object */
export interface CouponLineMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Coupon type and the Customer type */
export interface CouponToCustomerConnection {
  /** Edges for the CouponToCustomerConnection connection */
  edges?: Maybe<Array<Maybe<CouponToCustomerConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Customer>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToCustomerConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Customer>;
}

/** Arguments for filtering the CouponToCustomerConnection connection */
export interface CouponToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  order?: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
}

/** Connection between the Coupon type and the productCategory type */
export interface CouponToExcludedProductCategoriesConnection {
  /** Edges for the CouponToExcludedProductCategoriesConnection connection */
  edges?: Maybe<Array<Maybe<CouponToExcludedProductCategoriesConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToExcludedProductCategoriesConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Arguments for filtering the CouponToExcludedProductCategoriesConnection connection */
export interface CouponToExcludedProductCategoriesConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Coupon type and the Product type */
export interface CouponToExcludedProductsConnection {
  /** Edges for the CouponToExcludedProductsConnection connection */
  edges?: Maybe<Array<Maybe<CouponToExcludedProductsConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToExcludedProductsConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the CouponToExcludedProductsConnection connection */
export interface CouponToExcludedProductsConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the Coupon type and the productCategory type */
export interface CouponToProductCategoryConnection {
  /** Edges for the CouponToProductCategoryConnection connection */
  edges?: Maybe<Array<Maybe<CouponToProductCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Arguments for filtering the CouponToProductCategoryConnection connection */
export interface CouponToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Coupon type and the Product type */
export interface CouponToProductConnection {
  /** Edges for the CouponToProductConnection connection */
  edges?: Maybe<Array<Maybe<CouponToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CouponToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the CouponToProductConnection connection */
export interface CouponToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Customer account credentials */
export interface CreateAccountInput {
  /** Customer password */
  password: Scalars['String'];
  /** Customer username */
  username: Scalars['String'];
}

/** Input for the createCategory mutation */
export interface CreateCategoryInput {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The name of the category object to mutate */
  name: Scalars['String'];
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createCategory mutation */
export interface CreateCategoryPayload {
  /** The created category */
  category?: Maybe<Category>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the createComment mutation */
export interface CreateCommentInput {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
}

/** The payload for the createComment mutation */
export interface CreateCommentPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server
   * will not return the comment to a non authenticated user, but a success message
   * can be returned if the create succeeded, and the client can optimistically add
   * the comment to the client cache
   */
  success?: Maybe<Scalars['Boolean']>;
}

/** Input for the createMediaItem mutation */
export interface CreateMediaItemInput {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>;
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
}

/** The payload for the createMediaItem mutation */
export interface CreateMediaItemPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
}

/** Input for the createOrder mutation */
export interface CreateOrderInput {
  /** Order billing address */
  billing?: Maybe<CustomerAddressInput>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Coupons codes to be applied to order */
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Currency the order was created with, in ISO format. */
  currency?: Maybe<Scalars['String']>;
  /** Order customer ID */
  customerId?: Maybe<Scalars['Int']>;
  /** Note left by customer during checkout. */
  customerNote?: Maybe<Scalars['String']>;
  /** Order shipping lines */
  feeLines?: Maybe<Array<Maybe<FeeLineInput>>>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  isPaid?: Maybe<Scalars['Boolean']>;
  /** Order line items */
  lineItems?: Maybe<Array<Maybe<LineItemInput>>>;
  /** Order meta data */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Parent order ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** Payment method ID. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Payment method title. */
  paymentMethodTitle?: Maybe<Scalars['String']>;
  /** Order shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Order shipping lines */
  shippingLines?: Maybe<Array<Maybe<ShippingLineInput>>>;
  /** Order status */
  status?: Maybe<OrderStatusEnum>;
  /** Order transaction ID */
  transactionId?: Maybe<Scalars['String']>;
}

/** The payload for the createOrder mutation */
export interface CreateOrderPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Int']>;
}

/** Input for the createPage mutation */
export interface CreatePageInput {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
}

/** The payload for the createPage mutation */
export interface CreatePagePayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
}

/** Input for the createPostFormat mutation */
export interface CreatePostFormatInput {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createPostFormat mutation */
export interface CreatePostFormatPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
}

/** Input for the createPost mutation */
export interface CreatePostInput {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** The payload for the createPost mutation */
export interface CreatePostPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
}

/** Input for the createProductCategory mutation */
export interface CreateProductCategoryInput {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_cat object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_cat object to mutate */
  name: Scalars['String'];
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createProductCategory mutation */
export interface CreateProductCategoryPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_cat */
  productCategory?: Maybe<ProductCategory>;
}

/** Input for the createProductTag mutation */
export interface CreateProductTagInput {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_tag object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createProductTag mutation */
export interface CreateProductTagPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_tag */
  productTag?: Maybe<ProductTag>;
}

/** Input for the createProductType mutation */
export interface CreateProductTypeInput {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_type object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_type object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createProductType mutation */
export interface CreateProductTypePayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_type */
  productType?: Maybe<ProductType>;
}

/** Input for the createShippingClass mutation */
export interface CreateShippingClassInput {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_shipping_class object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_shipping_class object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createShippingClass mutation */
export interface CreateShippingClassPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_shipping_class */
  shippingClass?: Maybe<ShippingClass>;
}

/** Input for the createTag mutation */
export interface CreateTagInput {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createTag mutation */
export interface CreateTagPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
}

/** Input for the createUser mutation */
export interface CreateUserInput {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
}

/** The payload for the createUser mutation */
export interface CreateUserPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
}

/** Input for the createVisibleProduct mutation */
export interface CreateVisibleProductInput {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_visibility object */
  description?: Maybe<Scalars['String']>;
  /** The name of the product_visibility object to mutate */
  name: Scalars['String'];
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the createVisibleProduct mutation */
export interface CreateVisibleProductPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_visibility */
  visibleProduct?: Maybe<VisibleProduct>;
}

/** A customer object */
export interface Customer extends Node {
  /** Return the date customer billing address properties */
  billing?: Maybe<CustomerAddress>;
  /** Has customer calculated shipping? */
  calculatedShipping?: Maybe<Scalars['Boolean']>;
  /** The ID of the customer in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Return the date customer was created */
  date?: Maybe<Scalars['String']>;
  /** Return the customer&#039;s display name. */
  displayName?: Maybe<Scalars['String']>;
  /** Connection between the Customer type and the DownloadableItem type */
  downloadableItems?: Maybe<CustomerToDownloadableItemConnection>;
  /** Return the customer&#039;s email. */
  email?: Maybe<Scalars['String']>;
  /** Return the customer&#039;s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Has calculated shipping? */
  hasCalculatedShipping?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier for the customer */
  id: Scalars['ID'];
  /** Return the date customer was last updated */
  isPayingCustomer?: Maybe<Scalars['Boolean']>;
  /** Is customer VAT exempt? */
  isVatExempt?: Maybe<Scalars['Boolean']>;
  /** Return the customer&#039;s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Gets the customers last order. */
  lastOrder?: Maybe<Order>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Return the date customer was last updated */
  modified?: Maybe<Scalars['String']>;
  /** Return the number of orders this customer has. */
  orderCount?: Maybe<Scalars['Int']>;
  /** Connection between the Customer type and the Order type */
  orders?: Maybe<CustomerToOrderConnection>;
  /** Connection between the Customer type and the Refund type */
  refunds?: Maybe<CustomerToRefundConnection>;
  /** Return the customer&#039;s user role. */
  role?: Maybe<Scalars['String']>;
  /** A JWT token that can be used in future requests to for WooCommerce session identification */
  sessionToken?: Maybe<Scalars['String']>;
  /** Return the date customer shipping address properties */
  shipping?: Maybe<CustomerAddress>;
  /** Return how much money this customer has spent. */
  totalSpent?: Maybe<Scalars['Float']>;
  /** Return the customer&#039;s username. */
  username?: Maybe<Scalars['String']>;
}


/** A customer object */
export interface CustomerDownloadableItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToDownloadableItemConnectionWhereArgs>;
}


/** A customer object */
export interface CustomerMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A customer object */
export interface CustomerOrdersArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToOrderConnectionWhereArgs>;
}


/** A customer object */
export interface CustomerRefundsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToRefundConnectionWhereArgs>;
}

/** A customer address object */
export interface CustomerAddress {
  /** Address 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address 2 */
  address2?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<CountriesEnum>;
  /** E-mail */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Zip Postal Code */
  postcode?: Maybe<Scalars['String']>;
  /** State */
  state?: Maybe<Scalars['String']>;
}

/** Customer address information */
export interface CustomerAddressInput {
  /** Address 1 */
  address1?: Maybe<Scalars['String']>;
  /** Address 2 */
  address2?: Maybe<Scalars['String']>;
  /** City */
  city?: Maybe<Scalars['String']>;
  /** Company */
  company?: Maybe<Scalars['String']>;
  /** Country */
  country?: Maybe<CountriesEnum>;
  /** E-mail */
  email?: Maybe<Scalars['String']>;
  /** First name */
  firstName?: Maybe<Scalars['String']>;
  /** Last name */
  lastName?: Maybe<Scalars['String']>;
  /** Clear old address data */
  overwrite?: Maybe<Scalars['Boolean']>;
  /** Phone */
  phone?: Maybe<Scalars['String']>;
  /** Zip Postal Code */
  postcode?: Maybe<Scalars['String']>;
  /** State */
  state?: Maybe<Scalars['String']>;
}

/** Field to order the connection by */
export enum CustomerConnectionOrderbyEnum {
  /** Order by customer email */
  Email = 'EMAIL',
  /** Order by customer ID */
  Id = 'ID',
  /** Order by include field */
  Include = 'INCLUDE',
  /** Order by customer display name */
  Name = 'NAME',
  /** Order by customer registration date */
  RegisteredDate = 'REGISTERED_DATE',
  /** Order by customer username */
  Username = 'USERNAME'
}

/** Connection between the Customer type and the DownloadableItem type */
export interface CustomerToDownloadableItemConnection {
  /** Edges for the CustomerToDownloadableItemConnection connection */
  edges?: Maybe<Array<Maybe<CustomerToDownloadableItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<DownloadableItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToDownloadableItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<DownloadableItem>;
}

/** Arguments for filtering the CustomerToDownloadableItemConnection connection */
export interface CustomerToDownloadableItemConnectionWhereArgs {
  /** Limit results to downloadable items that can be downloaded now. */
  active?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that are expired. */
  expired?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that have downloads remaining. */
  hasDownloadsRemaining?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Customer type and the Order type */
export interface CustomerToOrderConnection {
  /** Edges for the CustomerToOrderConnection connection */
  edges?: Maybe<Array<Maybe<CustomerToOrderConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Order>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToOrderConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Order>;
}

/** Arguments for filtering the CustomerToOrderConnection connection */
export interface CustomerToOrderConnectionWhereArgs {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<OrdersOrderbyInput>>>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<Array<Maybe<OrderStatusEnum>>>;
}

/** Connection between the Customer type and the Refund type */
export interface CustomerToRefundConnection {
  /** Edges for the CustomerToRefundConnection connection */
  edges?: Maybe<Array<Maybe<CustomerToRefundConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Refund>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface CustomerToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Refund>;
}

/** Arguments for filtering the CustomerToRefundConnection connection */
export interface CustomerToRefundConnectionWhereArgs {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Object that can be identified with a Database ID */
export interface DatabaseIdentifier {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
}

/** Date values */
export interface DateInput {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
}

/** Filter the connection based on input */
export interface DateQueryInput {
  /** Nodes should be returned after this date */
  after?: Maybe<DateInput>;
  /** Nodes should be returned before this date */
  before?: Maybe<DateInput>;
  /** Column to query against */
  column?: Maybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars['String']>;
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>;
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars['Int']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars['Boolean']>;
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars['Int']>;
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<RelationEnum>;
  /** Second (0 to 59) */
  second?: Maybe<Scalars['Int']>;
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars['Int']>;
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>;
}

/** The template assigned to the node */
export interface DefaultTemplate extends ContentTemplate {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
}

/** Input for the deleteCategory mutation */
export interface DeleteCategoryInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the category to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteCategory mutation */
export interface DeleteCategoryPayload {
  /** The deteted term object */
  category?: Maybe<Category>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
}

/** Input for the deleteComment mutation */
export interface DeleteCommentInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The deleted comment ID */
  id: Scalars['ID'];
}

/** The payload for the deleteComment mutation */
export interface DeleteCommentPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The deleted comment object */
  comment?: Maybe<Comment>;
  /** The deleted comment ID */
  deletedId?: Maybe<Scalars['ID']>;
}

/** Input for the deleteMediaItem mutation */
export interface DeleteMediaItemInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteMediaItem mutation */
export interface DeleteMediaItemPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted mediaItem */
  deletedId?: Maybe<Scalars['ID']>;
  /** The mediaItem before it was deleted */
  mediaItem?: Maybe<MediaItem>;
}

/** Input for the deleteOrder mutation */
export interface DeleteOrderInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Delete or simply place in trash. */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** Order global ID */
  id?: Maybe<Scalars['ID']>;
  /** Order WP ID */
  orderId?: Maybe<Scalars['Int']>;
}

/** Input for the deleteOrderItems mutation */
export interface DeleteOrderItemsInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Order global ID */
  id?: Maybe<Scalars['ID']>;
  /** ID Order items being deleted */
  itemIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order WP ID */
  orderId?: Maybe<Scalars['Int']>;
}

/** The payload for the deleteOrderItems mutation */
export interface DeleteOrderItemsPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
}

/** The payload for the deleteOrder mutation */
export interface DeleteOrderPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
}

/** Input for the deletePage mutation */
export interface DeletePageInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the page to delete */
  id: Scalars['ID'];
}

/** The payload for the deletePage mutation */
export interface DeletePagePayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  page?: Maybe<Page>;
}

/** Input for the deletePostFormat mutation */
export interface DeletePostFormatInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID'];
}

/** The payload for the deletePostFormat mutation */
export interface DeletePostFormatPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  postFormat?: Maybe<PostFormat>;
}

/** Input for the deletePost mutation */
export interface DeletePostInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the post to delete */
  id: Scalars['ID'];
}

/** The payload for the deletePost mutation */
export interface DeletePostPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The object before it was deleted */
  post?: Maybe<Post>;
}

/** Input for the deleteProductCategory mutation */
export interface DeleteProductCategoryInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the productCategory to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteProductCategory mutation */
export interface DeleteProductCategoryPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  productCategory?: Maybe<ProductCategory>;
}

/** Input for the deleteProductTag mutation */
export interface DeleteProductTagInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the productTag to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteProductTag mutation */
export interface DeleteProductTagPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  productTag?: Maybe<ProductTag>;
}

/** Input for the deleteProductType mutation */
export interface DeleteProductTypeInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the productType to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteProductType mutation */
export interface DeleteProductTypePayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  productType?: Maybe<ProductType>;
}

/** Input for the deleteReview mutation */
export interface DeleteReviewInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Whether the product review should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>;
  /** The ID of the target product review */
  id: Scalars['ID'];
}

/** The payload for the deleteReview mutation */
export interface DeleteReviewPayload {
  /** The affected product review ID */
  affectedId?: Maybe<Scalars['ID']>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The product rating of the affected product review */
  rating?: Maybe<Scalars['Float']>;
  /** The affected product review */
  review?: Maybe<Comment>;
}

/** Input for the deleteShippingClass mutation */
export interface DeleteShippingClassInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the shippingClass to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteShippingClass mutation */
export interface DeleteShippingClassPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  shippingClass?: Maybe<ShippingClass>;
}

/** Input for the deleteTag mutation */
export interface DeleteTagInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the tag to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteTag mutation */
export interface DeleteTagPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  tag?: Maybe<Tag>;
}

/** Input for the deleteUser mutation */
export interface DeleteUserInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID'];
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<Scalars['ID']>;
}

/** The payload for the deleteUser mutation */
export interface DeleteUserPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the user that you just deleted */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deleted user object */
  user?: Maybe<User>;
}

/** Input for the deleteVisibleProduct mutation */
export interface DeleteVisibleProductInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the visibleProduct to delete */
  id: Scalars['ID'];
}

/** The payload for the deleteVisibleProduct mutation */
export interface DeleteVisibleProductPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the deleted object */
  deletedId?: Maybe<Scalars['ID']>;
  /** The deteted term object */
  visibleProduct?: Maybe<VisibleProduct>;
}

/** Coupon discount type enumeration */
export enum DiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT'
}

/** The discussion setting type */
export interface DiscussionSettings {
  /** Tillåt att andra skickar in kommentarer på nya inlägg. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Tillåt notiser om nya länkar från andra bloggar (pingback och trackback) för nya artiklar. */
  defaultPingStatus?: Maybe<Scalars['String']>;
}

/** A downloadable item */
export interface DownloadableItem {
  /** The date the downloadable item expires */
  accessExpires?: Maybe<Scalars['String']>;
  /** ProductDownload of the downloadable item */
  download?: Maybe<ProductDownload>;
  /** Downloadable item unique identifier */
  downloadId: Scalars['String'];
  /** Number of times the item can be downloaded. */
  downloadsRemaining?: Maybe<Scalars['Int']>;
  /** Name of the downloadable item. */
  name?: Maybe<Scalars['String']>;
  /** Product of downloadable item. */
  product?: Maybe<Product>;
  /** Download URL of the downloadable item. */
  url?: Maybe<Scalars['String']>;
}

/** Input for the emptyCart mutation */
export interface EmptyCartInput {
  clearPersistentCart?: Maybe<Scalars['Boolean']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** The payload for the emptyCart mutation */
export interface EmptyCartPayload {
  cart?: Maybe<Cart>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCart?: Maybe<Cart>;
}

/** Asset enqueued by the CMS */
export interface EnqueuedAsset {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
}

/** Script enqueued by the CMS */
export interface EnqueuedScript extends Node, EnqueuedAsset {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
}

/** Stylesheet enqueued by the CMS */
export interface EnqueuedStylesheet extends Node, EnqueuedAsset {
  /** @todo */
  args?: Maybe<Scalars['Boolean']>;
  /** Dependencies needed to use this asset */
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Extra information needed for the script */
  extra?: Maybe<Scalars['String']>;
  /** The handle of the enqueued asset */
  handle?: Maybe<Scalars['String']>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** The source of the asset */
  src?: Maybe<Scalars['String']>;
  /** The version of the enqueued asset */
  version?: Maybe<Scalars['String']>;
}

/** A external product object */
export interface ExternalProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  /** Connection between the Product type and the ProductAttribute type */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<Scalars['Float']>;
  /** External product Buy button text */
  buttonText?: Maybe<Scalars['String']>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the product in the database */
  databaseId: Scalars['Int'];
  /** Date product created */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Connection between the ExternalProduct type and the VariationAttribute type */
  defaultAttributes?: Maybe<ExternalProductToVariationAttributeConnection>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** External product url */
  externalUrl?: Maybe<Scalars['String']>;
  /** If the product is featured */
  featured?: Maybe<Scalars['Boolean']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** Connection between the Product type and the MediaItem type */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the GlobalProductAttribute type */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the product */
  id: Scalars['ID'];
  /** Main image */
  image?: Maybe<MediaItem>;
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the LocalProductAttribute type */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Date product last updated */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is product on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Parent product */
  parent?: Maybe<Product>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** Product&#039;s active price */
  price?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the productCategory type */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** Connection between the Product type and the productTag type */
  productTags?: Maybe<ProductToProductTagConnection>;
  /** Connection between the Product type and the productType type */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /** Can product be purchased? */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Product&#039;s regular price */
  regularPrice?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<ProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the Comment type */
  reviews?: Maybe<ProductToCommentConnection>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /** Product&#039;s sale price */
  salePrice?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the shippingClass type */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /** Product short description */
  shortDescription?: Maybe<Scalars['String']>;
  /** Product SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product slug */
  slug?: Maybe<Scalars['String']>;
  /** Product status */
  status?: Maybe<Scalars['String']>;
  /** Tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** Number total of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<ProductToUpsellConnection>;
  /** URI path for the resource */
  uri: Scalars['String'];
  /** Connection between the Product type and the visibleProduct type */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
}


/** A external product object */
export interface ExternalProductAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductDefaultAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A external product object */
export interface ExternalProductDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A external product object */
export interface ExternalProductEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A external product object */
export interface ExternalProductGalleryImagesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductGlobalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductLocalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A external product object */
export interface ExternalProductPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductProductTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductProductTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductRegularPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductRelatedArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductReviewsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductSalePriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductShippingClassesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductShortDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A external product object */
export interface ExternalProductUpsellArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
}


/** A external product object */
export interface ExternalProductVisibleProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Connection between the ExternalProduct type and the VariationAttribute type */
export interface ExternalProductToVariationAttributeConnection {
  /** Edges for the ExternalProductToVariationAttributeConnection connection */
  edges?: Maybe<Array<Maybe<ExternalProductToVariationAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ExternalProductToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VariationAttribute>;
}

/** a fee line object */
export interface FeeLine {
  /** Fee amount */
  amount?: Maybe<Scalars['String']>;
  /** The ID of the order item in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Fee name */
  name?: Maybe<Scalars['String']>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Line tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status of fee */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Line taxes */
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  /** Line total (after discounts) */
  total?: Maybe<Scalars['String']>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<Scalars['String']>;
}


/** a fee line object */
export interface FeeLineMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}

/** Fee line data. */
export interface FeeLineInput {
  /** Fee amount. */
  amount?: Maybe<Scalars['String']>;
  /** Fee Line ID */
  id?: Maybe<Scalars['ID']>;
  /** Fee name. */
  name?: Maybe<Scalars['String']>;
  /** Tax class of fee. */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status of fee. */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Line total (after discounts). */
  total?: Maybe<Scalars['String']>;
}

/** Input for the fillCart mutation */
export interface FillCartInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Coupons to be applied to the cart */
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Cart items to be added */
  items?: Maybe<Array<Maybe<CartItemInput>>>;
  /** Shipping methods to be used. */
  shippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** The payload for the fillCart mutation */
export interface FillCartPayload {
  added?: Maybe<Array<Maybe<CartItem>>>;
  applied?: Maybe<Array<Maybe<AppliedCoupon>>>;
  cart?: Maybe<Cart>;
  cartErrors?: Maybe<Array<Maybe<CartError>>>;
  chosenShippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** The general setting type */
export interface GeneralSettings {
  /** Ett datumformat för alla strängar med datum. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Webbplatsslogan. */
  description?: Maybe<Scalars['String']>;
  /** Denna adress används för administrativa ändamål, såsom notifikation om ny användare. */
  email?: Maybe<Scalars['String']>;
  /** Språkkod (locale) för WordPress. */
  language?: Maybe<Scalars['String']>;
  /** Numret på dagen i veckan som veckan ska börja på. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** Ett tidsformat för alla strängar med klockslag. */
  timeFormat?: Maybe<Scalars['String']>;
  /** En ort i din tidszon. */
  timezone?: Maybe<Scalars['String']>;
  /** Webbplatsrubrik. */
  title?: Maybe<Scalars['String']>;
  /** Webbplats-URL. */
  url?: Maybe<Scalars['String']>;
}

/** A product attribute object */
export interface GlobalProductAttribute extends ProductAttribute {
  /** Attribute ID */
  attributeId: Scalars['Int'];
  /** Attribute Global ID */
  id: Scalars['ID'];
  /** Attribute label */
  label: Scalars['String'];
  /** Product attribute name */
  name: Scalars['String'];
  /** Attribute options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Attribute position */
  position: Scalars['Int'];
  /** Product attribute scope. */
  scope: ProductAttributeTypesEnum;
  /** Product attribute slug */
  slug: Scalars['String'];
  /** Connection between the GlobalProductAttribute type and the TermNode type */
  terms?: Maybe<GlobalProductAttributeToTermNodeConnection>;
  /** Is attribute on product variation */
  variation: Scalars['Boolean'];
  /** Is attribute visible */
  visible: Scalars['Boolean'];
}


/** A product attribute object */
export interface GlobalProductAttributeTermsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GlobalProductAttributeToTermNodeConnectionWhereArgs>;
}

/** Connection between the GlobalProductAttribute type and the TermNode type */
export interface GlobalProductAttributeToTermNodeConnection {
  /** Edges for the GlobalProductAttributeToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<GlobalProductAttributeToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface GlobalProductAttributeToTermNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<TermNode>;
}

/** Arguments for filtering the GlobalProductAttributeToTermNodeConnection connection */
export interface GlobalProductAttributeToTermNodeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** A group product object */
export interface GroupProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  /** Product&#039;s add to cart button text description */
  addToCartDescription?: Maybe<Scalars['String']>;
  /** Product&#039;s add to cart button text description */
  addToCartText?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the ProductAttribute type */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<Scalars['Float']>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the product in the database */
  databaseId: Scalars['Int'];
  /** Date product created */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Connection between the GroupProduct type and the VariationAttribute type */
  defaultAttributes?: Maybe<GroupProductToVariationAttributeConnection>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** If the product is featured */
  featured?: Maybe<Scalars['Boolean']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** Connection between the Product type and the MediaItem type */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the GlobalProductAttribute type */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the product */
  id: Scalars['ID'];
  /** Main image */
  image?: Maybe<MediaItem>;
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the LocalProductAttribute type */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Date product last updated */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is product on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Parent product */
  parent?: Maybe<Product>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** Products&#039; price range */
  price?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the productCategory type */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** Connection between the Product type and the productTag type */
  productTags?: Maybe<ProductToProductTagConnection>;
  /** Connection between the Product type and the productType type */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /** Connection between the GroupProduct type and the Product type */
  products?: Maybe<GroupProductToProductConnection>;
  /** Can product be purchased? */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<ProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the Comment type */
  reviews?: Maybe<ProductToCommentConnection>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the shippingClass type */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /** Product short description */
  shortDescription?: Maybe<Scalars['String']>;
  /** Product SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product slug */
  slug?: Maybe<Scalars['String']>;
  /** Product status */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** Number total of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<ProductToUpsellConnection>;
  /** URI path for the resource */
  uri: Scalars['String'];
  /** Connection between the Product type and the visibleProduct type */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
}


/** A group product object */
export interface GroupProductAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A group product object */
export interface GroupProductDefaultAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A group product object */
export interface GroupProductDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A group product object */
export interface GroupProductEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A group product object */
export interface GroupProductEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A group product object */
export interface GroupProductGalleryImagesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductGlobalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductLocalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A group product object */
export interface GroupProductProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductProductTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductProductTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GroupProductToProductConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductRelatedArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductReviewsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductShippingClassesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductShortDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A group product object */
export interface GroupProductUpsellArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
}


/** A group product object */
export interface GroupProductVisibleProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Connection between the GroupProduct type and the Product type */
export interface GroupProductToProductConnection {
  /** Edges for the GroupProductToProductConnection connection */
  edges?: Maybe<Array<Maybe<GroupProductToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface GroupProductToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the GroupProductToProductConnection connection */
export interface GroupProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the GroupProduct type and the VariationAttribute type */
export interface GroupProductToVariationAttributeConnection {
  /** Edges for the GroupProductToVariationAttributeConnection connection */
  edges?: Maybe<Array<Maybe<GroupProductToVariationAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface GroupProductToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VariationAttribute>;
}

/** Content node with hierarchical (parent/child) relationships */
export interface HierarchicalContentNode {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
}


/** Content node with hierarchical (parent/child) relationships */
export interface HierarchicalContentNodeAncestorsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
}


/** Content node with hierarchical (parent/child) relationships */
export interface HierarchicalContentNodeChildrenArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeAncestorsConnection {
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeChildrenConnection {
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToParentContentNodeConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<ContentNode>;
}

/** Term node with hierarchical (parent/child) relationships */
export interface HierarchicalTermNode {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
}

/** a line item object */
export interface LineItem {
  /** The ID of the order item in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Line item&#039;s taxes */
  itemDownloads?: Maybe<Array<Maybe<ProductDownload>>>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Line item&#039;s product object */
  product?: Maybe<Product>;
  /** Line item&#039;s product ID */
  productId?: Maybe<Scalars['Int']>;
  /** Line item&#039;s product quantity */
  quantity?: Maybe<Scalars['Int']>;
  /** Line item&#039;s subtotal */
  subtotal?: Maybe<Scalars['String']>;
  /** Line item&#039;s subtotal tax */
  subtotalTax?: Maybe<Scalars['String']>;
  /** Line item&#039;s tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Line item&#039;s taxes */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** Line item&#039;s taxes */
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  /** Line item&#039;s total */
  total?: Maybe<Scalars['String']>;
  /** Line item&#039;s total tax */
  totalTax?: Maybe<Scalars['String']>;
  /** Line item&#039;s product variation object */
  variation?: Maybe<ProductVariation>;
  /** Line item&#039;s product variation ID */
  variationId?: Maybe<Scalars['Int']>;
}


/** a line item object */
export interface LineItemMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}

/** Meta data. */
export interface LineItemInput {
  /** Line Item ID */
  id?: Maybe<Scalars['ID']>;
  /** Meta data. */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Line name */
  name?: Maybe<Scalars['String']>;
  /** Product ID. */
  productId?: Maybe<Scalars['Int']>;
  /** Quantity ordered. */
  quantity?: Maybe<Scalars['Int']>;
  /** Product SKU. */
  sku?: Maybe<Scalars['String']>;
  /** Line subtotal (before discounts). */
  subtotal?: Maybe<Scalars['String']>;
  /** Tax class of product. */
  taxClass?: Maybe<TaxClassEnum>;
  /** Line total (after discounts). */
  total?: Maybe<Scalars['String']>;
  /** Variation ID, if applicable. */
  variationId?: Maybe<Scalars['Int']>;
}

/** A product attribute object */
export interface LocalProductAttribute extends ProductAttribute {
  /** Attribute ID */
  attributeId: Scalars['Int'];
  /** Attribute Global ID */
  id: Scalars['ID'];
  /** Attribute label */
  label: Scalars['String'];
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Attribute position */
  position: Scalars['Int'];
  /** Product attribute scope. */
  scope: ProductAttributeTypesEnum;
  /** Is attribute on product variation */
  variation: Scalars['Boolean'];
  /** Is attribute visible */
  visible: Scalars['Boolean'];
}

/** Product manage stock enumeration */
export enum ManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE'
}

/** File details for a Media Item */
export interface MediaDetails {
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
}

/** The mediaItem type */
export interface MediaItem extends Node, ContentNode, DatabaseIdentifier, NodeWithTemplate, UniformResourceIdentifiable, NodeWithTitle, NodeWithAuthor, NodeWithComments, HierarchicalContentNode {
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  comments?: Maybe<MediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the attachment object. */
  id: Scalars['ID'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int'];
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  /** The mime type of the mediaItem */
  mimeType?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /**
   * The srcset attribute specifies the URL of the image to use in different
   * situations. It is a comma separated string of urls and their widths.
   */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
}


/** The mediaItem type */
export interface MediaItemAncestorsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
}


/** The mediaItem type */
export interface MediaItemCaptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** The mediaItem type */
export interface MediaItemChildrenArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
}


/** The mediaItem type */
export interface MediaItemCommentsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
}


/** The mediaItem type */
export interface MediaItemDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** The mediaItem type */
export interface MediaItemEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The mediaItem type */
export interface MediaItemEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The mediaItem type */
export interface MediaItemFileSizeArgs {
  size?: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemSizesArgs {
  size?: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemSourceUrlArgs {
  size?: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemSrcSetArgs {
  size?: Maybe<MediaItemSizeEnum>;
}


/** The mediaItem type */
export interface MediaItemTitleArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Meta connected to a MediaItem */
export interface MediaItemMeta {
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
}

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the shop_catalog size */
  ShopCatalog = 'SHOP_CATALOG',
  /** MediaItem with the shop_single size */
  ShopSingle = 'SHOP_SINGLE',
  /** MediaItem with the shop_thumbnail size */
  ShopThumbnail = 'SHOP_THUMBNAIL',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the woocommerce_gallery_thumbnail size */
  WoocommerceGalleryThumbnail = 'WOOCOMMERCE_GALLERY_THUMBNAIL',
  /** MediaItem with the woocommerce_single size */
  WoocommerceSingle = 'WOOCOMMERCE_SINGLE',
  /** MediaItem with the woocommerce_thumbnail size */
  WoocommerceThumbnail = 'WOOCOMMERCE_THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Connection between the mediaItem type and the Comment type */
export interface MediaItemToCommentConnection {
  /** Edges for the MediaItemToCommentConnection connection */
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MediaItemToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the MediaItemToCommentConnection connection */
export interface MediaItemToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Details of an available size for a media item */
export interface MediaSize {
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
}

/**
 * Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export interface Menu extends Node, DatabaseIdentifier {
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The globally unique identifier of the nav menu object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuId?: Maybe<Scalars['Int']>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<MenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
}


/**
 * Menus are the containers for navigation items. Menus can be assigned to menu
 * locations, which are typically registered by the active theme.
 */
export interface MenuMenuItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface MenuItem extends Node, DatabaseIdentifier {
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the nav menu item object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuItemId?: Maybe<Scalars['Int']>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path: Scalars['String'];
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
}


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface MenuItemChildItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
}

/** Nodes that can be linked to as Menu Items */
export interface MenuItemLinkable {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri: Scalars['String'];
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Post | Page | Category | Tag | ProductCategory | ProductTag;

/** Connection between the MenuItem type and the Menu type */
export interface MenuItemToMenuConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Menu>;
}

/** Connection between the MenuItem type and the MenuItem type */
export interface MenuItemToMenuItemConnection {
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MenuItemToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>;
}

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export interface MenuItemToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
}

/** Connection between the MenuItem type and the MenuItemLinkable type */
export interface MenuItemToMenuItemLinkableConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<MenuItemLinkable>;
}

/** Options for filtering the connection */
export interface MenuItemsWhereArgs {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
}

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Empty menu location */
  Empty = 'EMPTY'
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by it's name */
  Name = 'NAME'
}

/** Connection between the Menu type and the MenuItem type */
export interface MenuToMenuItemConnection {
  /** Edges for the MenuToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface MenuToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>;
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export interface MenuToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
}

/** Extra data defined on the WC object */
export interface MetaData {
  /** Meta ID. */
  id?: Maybe<Scalars['ID']>;
  /** Meta key. */
  key: Scalars['String'];
  /** Meta value. */
  value?: Maybe<Scalars['String']>;
}

/** Meta data. */
export interface MetaDataInput {
  /** Meta key. */
  key: Scalars['String'];
  /** Meta value. */
  value: Scalars['String'];
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** MimeType application/java */
  ApplicationJava = 'APPLICATION_JAVA',
  /** MimeType application/msword */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** MimeType application/octet-stream */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** MimeType application/onenote */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** MimeType application/oxps */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** MimeType application/pdf */
  ApplicationPdf = 'APPLICATION_PDF',
  /** MimeType application/rar */
  ApplicationRar = 'APPLICATION_RAR',
  /** MimeType application/rtf */
  ApplicationRtf = 'APPLICATION_RTF',
  /** MimeType application/ttaf+xml */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** MimeType application/vnd.apple.keynote */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** MimeType application/vnd.apple.numbers */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** MimeType application/vnd.apple.pages */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** MimeType application/vnd.ms-access */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** MimeType application/vnd.ms-excel */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** MimeType application/vnd.ms-excel.addin.macroEnabled.12 */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** MimeType application/vnd.ms-excel.template.macroEnabled.12 */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** MimeType application/vnd.ms-powerpoint.addin.macroEnabled.12 */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.slide.macroEnabled.12 */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** MimeType application/vnd.ms-powerpoint.template.macroEnabled.12 */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-project */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** MimeType application/vnd.ms-word.document.macroEnabled.12 */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** MimeType application/vnd.ms-word.template.macroEnabled.12 */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** MimeType application/vnd.ms-write */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** MimeType application/vnd.ms-xpsdocument */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** MimeType application/vnd.oasis.opendocument.chart */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** MimeType application/vnd.oasis.opendocument.database */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** MimeType application/vnd.oasis.opendocument.formula */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** MimeType application/vnd.oasis.opendocument.graphics */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** MimeType application/vnd.oasis.opendocument.presentation */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** MimeType application/vnd.oasis.opendocument.spreadsheet */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** MimeType application/vnd.oasis.opendocument.text */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slide */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** MimeType application/vnd.openxmlformats-officedocument.presentationml.template */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.template */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.template */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** MimeType application/wordperfect */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** MimeType application/x-7z-compressed */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** MimeType application/x-gzip */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** MimeType application/x-tar */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** MimeType application/zip */
  ApplicationZip = 'APPLICATION_ZIP',
  /** MimeType audio/aac */
  AudioAac = 'AUDIO_AAC',
  /** MimeType audio/flac */
  AudioFlac = 'AUDIO_FLAC',
  /** MimeType audio/midi */
  AudioMidi = 'AUDIO_MIDI',
  /** MimeType audio/mpeg */
  AudioMpeg = 'AUDIO_MPEG',
  /** MimeType audio/ogg */
  AudioOgg = 'AUDIO_OGG',
  /** MimeType audio/wav */
  AudioWav = 'AUDIO_WAV',
  /** MimeType audio/x-matroska */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** MimeType audio/x-ms-wax */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** MimeType audio/x-ms-wma */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** MimeType audio/x-realaudio */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** MimeType image/bmp */
  ImageBmp = 'IMAGE_BMP',
  /** MimeType image/gif */
  ImageGif = 'IMAGE_GIF',
  /** MimeType image/heic */
  ImageHeic = 'IMAGE_HEIC',
  /** MimeType image/jpeg */
  ImageJpeg = 'IMAGE_JPEG',
  /** MimeType image/png */
  ImagePng = 'IMAGE_PNG',
  /** MimeType image/tiff */
  ImageTiff = 'IMAGE_TIFF',
  /** MimeType image/x-icon */
  ImageXIcon = 'IMAGE_X_ICON',
  /** MimeType text/calendar */
  TextCalendar = 'TEXT_CALENDAR',
  /** MimeType text/css */
  TextCss = 'TEXT_CSS',
  /** MimeType text/csv */
  TextCsv = 'TEXT_CSV',
  /** MimeType text/plain */
  TextPlain = 'TEXT_PLAIN',
  /** MimeType text/richtext */
  TextRichtext = 'TEXT_RICHTEXT',
  /** MimeType text/tab-separated-values */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** MimeType text/vtt */
  TextVtt = 'TEXT_VTT',
  /** MimeType video/3gpp */
  Video_3Gpp = 'VIDEO_3GPP',
  /** MimeType video/3gpp2 */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** MimeType video/avi */
  VideoAvi = 'VIDEO_AVI',
  /** MimeType video/divx */
  VideoDivx = 'VIDEO_DIVX',
  /** MimeType video/mp4 */
  VideoMp4 = 'VIDEO_MP4',
  /** MimeType video/mpeg */
  VideoMpeg = 'VIDEO_MPEG',
  /** MimeType video/ogg */
  VideoOgg = 'VIDEO_OGG',
  /** MimeType video/quicktime */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** MimeType video/webm */
  VideoWebm = 'VIDEO_WEBM',
  /** MimeType video/x-flv */
  VideoXFlv = 'VIDEO_X_FLV',
  /** MimeType video/x-matroska */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** MimeType video/x-ms-asf */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** MimeType video/x-ms-wm */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** MimeType video/x-ms-wmv */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** MimeType video/x-ms-wmx */
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** An object with an ID */
export interface Node {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
}

/** A node that can have an author assigned to it */
export interface NodeWithAuthor {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
}

/** Connection between the NodeWithAuthor type and the User type */
export interface NodeWithAuthorToUserConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<User>;
}

/** A node that can have comments associated with it */
export interface NodeWithComments {
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
}

/** A node that supports the content editor */
export interface NodeWithContentEditor {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
}


/** A node that supports the content editor */
export interface NodeWithContentEditorContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that can have an excerpt */
export interface NodeWithExcerpt {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
}


/** A node that can have an excerpt */
export interface NodeWithExcerptExcerptArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that can have a featured image set */
export interface NodeWithFeaturedImage {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
}

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export interface NodeWithFeaturedImageToMediaItemConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<MediaItem>;
}

/** A node that can have page attributes */
export interface NodeWithPageAttributes {
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
}

/** A node that can have revisions */
export interface NodeWithRevisions {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /**
   * If the current node is a revision, this field exposes the node this is a
   * revision of. Returns null if the node is not a revision of another node.
   */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
}

/** Connection between the NodeWithRevisions type and the ContentNode type */
export interface NodeWithRevisionsToContentNodeConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<ContentNode>;
}

/** A node that can have a template associated with it */
export interface NodeWithTemplate {
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
}

/** A node that NodeWith a title */
export interface NodeWithTitle {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
}


/** A node that NodeWith a title */
export interface NodeWithTitleTitleArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}

/** A node that can have trackbacks and pingbacks */
export interface NodeWithTrackbacks {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** A order object */
export interface Order extends Node, NodeWithComments {
  /** Order billing properties */
  billing?: Maybe<CustomerAddress>;
  /** Cart hash */
  cartHash?: Maybe<Scalars['String']>;
  /** Cart tax amount */
  cartTax?: Maybe<Scalars['String']>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the Order type and the CouponLine type */
  couponLines?: Maybe<OrderToCouponLineConnection>;
  /** How order was created */
  createdVia?: Maybe<Scalars['String']>;
  /** Order currency */
  currency?: Maybe<Scalars['String']>;
  /** Order customer */
  customer?: Maybe<Customer>;
  /** Customer IP Address */
  customerIpAddress?: Maybe<Scalars['String']>;
  /** Customer note */
  customerNote?: Maybe<Scalars['String']>;
  /** Customer User Agent */
  customerUserAgent?: Maybe<Scalars['String']>;
  /** The ID of the order in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Date order was created */
  date?: Maybe<Scalars['String']>;
  /** Date order was completed */
  dateCompleted?: Maybe<Scalars['String']>;
  /** Date order was paid */
  datePaid?: Maybe<Scalars['String']>;
  /** Discount tax amount */
  discountTax?: Maybe<Scalars['String']>;
  /** Discount total amount */
  discountTotal?: Maybe<Scalars['String']>;
  /** Connection between the Order type and the DownloadableItem type */
  downloadableItems?: Maybe<OrderToDownloadableItemConnection>;
  /** Connection between the Order type and the FeeLine type */
  feeLines?: Maybe<OrderToFeeLineConnection>;
  /** Order has a billing address? */
  hasBillingAddress?: Maybe<Scalars['Boolean']>;
  /** If order contains a downloadable product */
  hasDownloadableItem?: Maybe<Scalars['Boolean']>;
  /** Order has a shipping address? */
  hasShippingAddress?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier for the order */
  id: Scalars['ID'];
  /** Is product download is permitted */
  isDownloadPermitted?: Maybe<Scalars['Boolean']>;
  /** Connection between the Order type and the LineItem type */
  lineItems?: Maybe<OrderToLineItemConnection>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Date order was last updated */
  modified?: Maybe<Scalars['String']>;
  /** If order needs payment */
  needsPayment?: Maybe<Scalars['Boolean']>;
  /** If order needs processing before it can be completed */
  needsProcessing?: Maybe<Scalars['Boolean']>;
  /** If order needs shipping address */
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  /** Order key */
  orderKey?: Maybe<Scalars['String']>;
  /** Connection between the Order type and the Comment type */
  orderNotes?: Maybe<OrderToCommentConnection>;
  /** Order number */
  orderNumber?: Maybe<Scalars['String']>;
  /** Order version */
  orderVersion?: Maybe<Scalars['String']>;
  /** Parent order */
  parent?: Maybe<Order>;
  /** Payment method */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Payment method title */
  paymentMethodTitle?: Maybe<Scalars['String']>;
  /** Prices include taxes? */
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
  /** Connection between the Order type and the Refund type */
  refunds?: Maybe<OrderToRefundConnection>;
  /** Order shipping properties */
  shipping?: Maybe<CustomerAddress>;
  /** Order customer */
  shippingAddressMapUrl?: Maybe<Scalars['String']>;
  /** Connection between the Order type and the ShippingLine type */
  shippingLines?: Maybe<OrderToShippingLineConnection>;
  /** Shipping tax amount */
  shippingTax?: Maybe<Scalars['String']>;
  /** Shipping total amount */
  shippingTotal?: Maybe<Scalars['String']>;
  /** Order status */
  status?: Maybe<OrderStatusEnum>;
  /** Order subtotal */
  subtotal?: Maybe<Scalars['String']>;
  /** Connection between the Order type and the TaxLine type */
  taxLines?: Maybe<OrderToTaxLineConnection>;
  /** Order grand total */
  total?: Maybe<Scalars['String']>;
  /** Order taxes */
  totalTax?: Maybe<Scalars['String']>;
  /** Transaction ID */
  transactionId?: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderCartTaxArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderCouponLinesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderDiscountTaxArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderDiscountTotalArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderDownloadableItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToDownloadableItemConnectionWhereArgs>;
}


/** A order object */
export interface OrderFeeLinesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderLineItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A order object */
export interface OrderOrderNotesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToCommentConnectionWhereArgs>;
}


/** A order object */
export interface OrderRefundsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToRefundConnectionWhereArgs>;
}


/** A order object */
export interface OrderShippingLinesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderShippingTaxArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderShippingTotalArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderSubtotalArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderTaxLinesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A order object */
export interface OrderTotalArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A order object */
export interface OrderTotalTaxArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC'
}

/** The Type of Identifier used to fetch a single Order. Default is ID. */
export enum OrderIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Order number. */
  OrderNumber = 'ORDER_NUMBER'
}

/** Order item tax statement */
export interface OrderItemTax {
  /** Amount taxed */
  amount?: Maybe<Scalars['Float']>;
  /** Subtotal */
  subtotal?: Maybe<Scalars['Float']>;
  /** Tax line connected to this statement */
  taxLine?: Maybe<TaxLine>;
  /** Order item ID for tax line connected to this statement */
  taxLineId: Scalars['Int'];
  /** Total */
  total?: Maybe<Scalars['Float']>;
}

/** Order status enumeration */
export enum OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED'
}

/** Connection between the Order type and the Comment type */
export interface OrderToCommentConnection {
  /** Edges for the OrderToCommentConnection connection */
  edges?: Maybe<Array<Maybe<OrderToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** Is this a customer note? */
  isCustomerNote?: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the OrderToCommentConnection connection */
export interface OrderToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Connection between the Order type and the CouponLine type */
export interface OrderToCouponLineConnection {
  /** Edges for the OrderToCouponLineConnection connection */
  edges?: Maybe<Array<Maybe<OrderToCouponLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<CouponLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToCouponLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<CouponLine>;
}

/** Connection between the Order type and the DownloadableItem type */
export interface OrderToDownloadableItemConnection {
  /** Edges for the OrderToDownloadableItemConnection connection */
  edges?: Maybe<Array<Maybe<OrderToDownloadableItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<DownloadableItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToDownloadableItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<DownloadableItem>;
}

/** Arguments for filtering the OrderToDownloadableItemConnection connection */
export interface OrderToDownloadableItemConnectionWhereArgs {
  /** Limit results to downloadable items that can be downloaded now. */
  active?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that are expired. */
  expired?: Maybe<Scalars['Boolean']>;
  /** Limit results to downloadable items that have downloads remaining. */
  hasDownloadsRemaining?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Order type and the FeeLine type */
export interface OrderToFeeLineConnection {
  /** Edges for the OrderToFeeLineConnection connection */
  edges?: Maybe<Array<Maybe<OrderToFeeLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<FeeLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToFeeLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<FeeLine>;
}

/** Connection between the Order type and the LineItem type */
export interface OrderToLineItemConnection {
  /** Edges for the OrderToLineItemConnection connection */
  edges?: Maybe<Array<Maybe<OrderToLineItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<LineItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToLineItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<LineItem>;
}

/** Connection between the Order type and the Refund type */
export interface OrderToRefundConnection {
  /** Edges for the OrderToRefundConnection connection */
  edges?: Maybe<Array<Maybe<OrderToRefundConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Refund>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Refund>;
}

/** Arguments for filtering the OrderToRefundConnection connection */
export interface OrderToRefundConnectionWhereArgs {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Connection between the Order type and the ShippingLine type */
export interface OrderToShippingLineConnection {
  /** Edges for the OrderToShippingLineConnection connection */
  edges?: Maybe<Array<Maybe<OrderToShippingLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ShippingLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToShippingLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingLine>;
}

/** Connection between the Order type and the TaxLine type */
export interface OrderToTaxLineConnection {
  /** Edges for the OrderToTaxLineConnection connection */
  edges?: Maybe<Array<Maybe<OrderToTaxLineConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TaxLine>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface OrderToTaxLineConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<TaxLine>;
}

/** Fields to order the Orders connection by */
export enum OrdersOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Order by date the order was completed */
  DateCompleted = 'DATE_COMPLETED',
  /** Order by date the order was paid */
  DatePaid = 'DATE_PAID',
  /** Order by order discount amount */
  Discount = 'DISCOUNT',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by order key */
  OrderKey = 'ORDER_KEY',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by order total */
  Tax = 'TAX',
  /** Order by order total */
  Total = 'TOTAL'
}

/** Options for ordering the connection */
export interface OrdersOrderbyInput {
  field: OrdersOrderByEnum;
  order?: Maybe<OrderEnum>;
}

/** The page type */
export interface Page extends Node, ContentNode, DatabaseIdentifier, NodeWithTemplate, UniformResourceIdentifiable, NodeWithTitle, NodeWithContentEditor, NodeWithAuthor, NodeWithFeaturedImage, NodeWithComments, NodeWithRevisions, NodeWithPageAttributes, HierarchicalContentNode, MenuItemLinkable {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  comments?: Maybe<PageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the page object. */
  id: Scalars['ID'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int'];
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the page type and the page type */
  preview?: Maybe<PageToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a
   * revision of. Returns null if the node is not a revision of another node.
   */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the page type and the page type */
  revisions?: Maybe<PageToRevisionConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URI path for the resource */
  uri: Scalars['String'];
}


/** The page type */
export interface PageAncestorsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
}


/** The page type */
export interface PageChildrenArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
}


/** The page type */
export interface PageCommentsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToCommentConnectionWhereArgs>;
}


/** The page type */
export interface PageContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** The page type */
export interface PageEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The page type */
export interface PageEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The page type */
export interface PageRevisionsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToRevisionConnectionWhereArgs>;
}


/** The page type */
export interface PageTitleArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the page type and the Comment type */
export interface PageToCommentConnection {
  /** Edges for the PageToCommentConnection connection */
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PageToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the PageToCommentConnection connection */
export interface PageToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Connection between the page type and the page type */
export interface PageToPreviewConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Page>;
}

/** Connection between the page type and the page type */
export interface PageToRevisionConnection {
  /** Edges for the pageToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PageToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Page>;
}

/** Arguments for filtering the pageToRevisionConnection connection */
export interface PageToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** A payment gateway object */
export interface PaymentGateway {
  /** gateway&#039;s description */
  description?: Maybe<Scalars['String']>;
  /** gateway&#039;s icon */
  icon?: Maybe<Scalars['String']>;
  /** gateway&#039;s title */
  id: Scalars['String'];
  /** gateway&#039;s title */
  title?: Maybe<Scalars['String']>;
}

/** An plugin object */
export interface Plugin extends Node {
  /** Name of the plugin author(s), may also be a company name. */
  author?: Maybe<Scalars['String']>;
  /** URI for the related author(s)/company website. */
  authorUri?: Maybe<Scalars['String']>;
  /** Description of the plugin. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the plugin. */
  name?: Maybe<Scalars['String']>;
  /** Plugin path. */
  path?: Maybe<Scalars['String']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri?: Maybe<Scalars['String']>;
  /** Current version of the plugin. */
  version?: Maybe<Scalars['String']>;
}

/** The post type */
export interface Post extends Node, ContentNode, DatabaseIdentifier, NodeWithTemplate, UniformResourceIdentifiable, NodeWithTitle, NodeWithContentEditor, NodeWithAuthor, NodeWithFeaturedImage, NodeWithExcerpt, NodeWithComments, NodeWithTrackbacks, NodeWithRevisions, MenuItemLinkable {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Connection between the post type and the category type */
  categories?: Maybe<PostToCategoryConnection>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  comments?: Maybe<PostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the post object. */
  id: Scalars['ID'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /**
   * The local modified time for a post. If a post was recently updated the
   * modified field will change to match the corresponding time.
   */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  postFormats?: Maybe<PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int'];
  /** Connection between the post type and the post type */
  preview?: Maybe<PostToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /**
   * If the current node is a revision, this field exposes the node this is a
   * revision of. Returns null if the node is not a revision of another node.
   */
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the post type and the post type */
  revisions?: Maybe<PostToRevisionConnection>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  tags?: Maybe<PostToTagConnection>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** Connection between the post type and the TermNode type */
  terms?: Maybe<PostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URI path for the resource */
  uri: Scalars['String'];
}


/** The post type */
export interface PostCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCategoryConnectionWhereArgs>;
}


/** The post type */
export interface PostCommentsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCommentConnectionWhereArgs>;
}


/** The post type */
export interface PostContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** The post type */
export interface PostEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The post type */
export interface PostEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The post type */
export interface PostExcerptArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** The post type */
export interface PostPostFormatsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToPostFormatConnectionWhereArgs>;
}


/** The post type */
export interface PostRevisionsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToRevisionConnectionWhereArgs>;
}


/** The post type */
export interface PostTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTagConnectionWhereArgs>;
}


/** The post type */
export interface PostTermsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTermNodeConnectionWhereArgs>;
}


/** The post type */
export interface PostTitleArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}

/** Set relationships between the post to categories */
export interface PostCategoriesInput {
  /**
   * If true, this will append the category to existing related categories. If
   * false, this will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
}

/**
 * List of categories to connect the post to. If an ID is set, it will be used to
 * create the connection. If not, it will look for a slug. If neither are valid
 * existing terms, and the site is configured to allow terms to be created during
 * post mutations, a term will be created using the Name if it exists in the input,
 * then fallback to the slug if it exists.
 */
export interface PostCategoriesNodeInput {
  /**
   * The description of the category. This field is used to set a description of
   * the category if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The ID of the category. If present, this will be used to connect to the post.
   * If no existing category exists with this ID, no connection will be made.
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * The name of the category. This field is used to create a new term, if term
   * creation is enabled in nested mutations, and if one does not already exist
   * with the provided slug or ID or if a slug or ID is not provided. If no name is
   * included and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The slug of the category. If no ID is present, this field will be used to make
   * a connection. If no existing term exists with this slug, this field will be
   * used as a fallback to the Name field when creating a new term to connect to,
   * if term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
}

/** The postFormat type */
export interface PostFormat extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable {
  /** Connection between the postFormat type and the ContentNode type */
  contentNodes?: Maybe<PostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId?: Maybe<Scalars['Int']>;
  /** Connection between the postFormat type and the post type */
  posts?: Maybe<PostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** The postFormat type */
export interface PostFormatContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
}


/** The postFormat type */
export interface PostFormatEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The postFormat type */
export interface PostFormatEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The postFormat type */
export interface PostFormatPostsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToPostConnectionWhereArgs>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the postFormat type and the ContentNode type */
export interface PostFormatToContentNodeConnection {
  /** Edges for the PostFormatToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostFormatToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export interface PostFormatToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the postFormat type and the post type */
export interface PostFormatToPostConnection {
  /** Edges for the PostFormatToPostConnection connection */
  edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostFormatToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Arguments for filtering the PostFormatToPostConnection connection */
export interface PostFormatToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the postFormat type and the Taxonomy type */
export interface PostFormatToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED'
}

/** Union between the post, page and media item types */
export type PostObjectUnion = Post | Page | MediaItem;

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED'
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** Options for ordering the connection */
export interface PostObjectsConnectionOrderbyInput {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
}

/** Set relationships between the post to postFormats */
export interface PostPostFormatsInput {
  /**
   * If true, this will append the postFormat to existing related postFormats. If
   * false, this will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
}

/**
 * List of postFormats to connect the post to. If an ID is set, it will be used to
 * create the connection. If not, it will look for a slug. If neither are valid
 * existing terms, and the site is configured to allow terms to be created during
 * post mutations, a term will be created using the Name if it exists in the input,
 * then fallback to the slug if it exists.
 */
export interface PostPostFormatsNodeInput {
  /**
   * The description of the postFormat. This field is used to set a description of
   * the postFormat if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The ID of the postFormat. If present, this will be used to connect to the
   * post. If no existing postFormat exists with this ID, no connection will be
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * The name of the postFormat. This field is used to create a new term, if term
   * creation is enabled in nested mutations, and if one does not already exist
   * with the provided slug or ID or if a slug or ID is not provided. If no name is
   * included and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The slug of the postFormat. If no ID is present, this field will be used to
   * make a connection. If no existing term exists with this slug, this field will
   * be used as a fallback to the Name field when creating a new term to connect
   * to, if term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the failed status */
  Failed = 'FAILED',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the in-progress status */
  InProgress = 'IN_PROGRESS',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
  /** Objects with the wc-cancelled status */
  WcCancelled = 'WC_CANCELLED',
  /** Objects with the wc-completed status */
  WcCompleted = 'WC_COMPLETED',
  /** Objects with the wc-failed status */
  WcFailed = 'WC_FAILED',
  /** Objects with the wc-on-hold status */
  WcOnHold = 'WC_ON_HOLD',
  /** Objects with the wc-pending status */
  WcPending = 'WC_PENDING',
  /** Objects with the wc-processing status */
  WcProcessing = 'WC_PROCESSING',
  /** Objects with the wc-refunded status */
  WcRefunded = 'WC_REFUNDED'
}

/** Set relationships between the post to tags */
export interface PostTagsInput {
  /**
   * If true, this will append the tag to existing related tags. If false, this
   * will replace existing relationships. Default true.
   */
  append?: Maybe<Scalars['Boolean']>;
  /** The input list of items to set. */
  nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>;
}

/**
 * List of tags to connect the post to. If an ID is set, it will be used to create
 * the connection. If not, it will look for a slug. If neither are valid existing
 * terms, and the site is configured to allow terms to be created during post
 * mutations, a term will be created using the Name if it exists in the input, then
 * fallback to the slug if it exists.
 */
export interface PostTagsNodeInput {
  /**
   * The description of the tag. This field is used to set a description of the tag
   * if a new one is created during the mutation.
   */
  description?: Maybe<Scalars['String']>;
  /**
   * The ID of the tag. If present, this will be used to connect to the post. If no
   * existing tag exists with this ID, no connection will be made.
   */
  id?: Maybe<Scalars['ID']>;
  /**
   * The name of the tag. This field is used to create a new term, if term creation
   * is enabled in nested mutations, and if one does not already exist with the
   * provided slug or ID or if a slug or ID is not provided. If no name is included
   * and a term is created, the creation will fallback to the slug field.
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The slug of the tag. If no ID is present, this field will be used to make a
   * connection. If no existing term exists with this slug, this field will be used
   * as a fallback to the Name field when creating a new term to connect to, if
   * term creation is enabled as a nested mutation.
   */
  slug?: Maybe<Scalars['String']>;
}

/** Connection between the post type and the category type */
export interface PostToCategoryConnection {
  /** Edges for the PostToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Category>;
}

/** Arguments for filtering the PostToCategoryConnection connection */
export interface PostToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the post type and the Comment type */
export interface PostToCommentConnection {
  /** Edges for the PostToCommentConnection connection */
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the PostToCommentConnection connection */
export interface PostToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Connection between the post type and the postFormat type */
export interface PostToPostFormatConnection {
  /** Edges for the PostToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToPostFormatConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<PostFormat>;
}

/** Arguments for filtering the PostToPostFormatConnection connection */
export interface PostToPostFormatConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the post type and the post type */
export interface PostToPreviewConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Post>;
}

/** Connection between the post type and the post type */
export interface PostToRevisionConnection {
  /** Edges for the postToRevisionConnection connection */
  edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToRevisionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Arguments for filtering the postToRevisionConnection connection */
export interface PostToRevisionConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the post type and the tag type */
export interface PostToTagConnection {
  /** Edges for the PostToTagConnection connection */
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Tag>;
}

/** Arguments for filtering the PostToTagConnection connection */
export interface PostToTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the post type and the TermNode type */
export interface PostToTermNodeConnection {
  /** Edges for the PostToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface PostToTermNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<TermNode>;
}

/** Arguments for filtering the PostToTermNodeConnection connection */
export interface PostToTermNodeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Details for labels of the PostType */
export interface PostTypeLabelDetails {
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
}

/** Fields to order the PostType connection by */
export enum PostTypeOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG'
}

/** Options for ordering the connection */
export interface PostTypeOrderbyInput {
  field: PostTypeOrderByEnum;
  order?: Maybe<OrderEnum>;
}

/** Pricing field format enumeration */
export enum PricingFieldFormatEnum {
  Formatted = 'FORMATTED',
  Raw = 'RAW'
}

/** Product object */
export interface Product {
  /** Connection between the Product type and the ProductAttribute type */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<Scalars['Float']>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /** The ID of the product in the database */
  databaseId: Scalars['Int'];
  /** Date product created */
  date?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** If the product is featured */
  featured?: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the MediaItem type */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the GlobalProductAttribute type */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /** The globally unique identifier for the product */
  id: Scalars['ID'];
  /** Main image */
  image?: Maybe<MediaItem>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the LocalProductAttribute type */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Date product last updated */
  modified?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is product on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Parent product */
  parent?: Maybe<Product>;
  /** Connection between the Product type and the productCategory type */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** Connection between the Product type and the productTag type */
  productTags?: Maybe<ProductToProductTagConnection>;
  /** Connection between the Product type and the productType type */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /** Can product be purchased? */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<ProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the Comment type */
  reviews?: Maybe<ProductToCommentConnection>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the shippingClass type */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /** Product short description */
  shortDescription?: Maybe<Scalars['String']>;
  /** Product SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product slug */
  slug?: Maybe<Scalars['String']>;
  /** Product status */
  status?: Maybe<Scalars['String']>;
  /** Number total of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<ProductToUpsellConnection>;
  /** Connection between the Product type and the visibleProduct type */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
}


/** Product object */
export interface ProductAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** Product object */
export interface ProductDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** Product object */
export interface ProductGalleryImagesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** Product object */
export interface ProductGlobalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** Product object */
export interface ProductLocalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** Product object */
export interface ProductProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** Product object */
export interface ProductProductTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** Product object */
export interface ProductProductTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** Product object */
export interface ProductRelatedArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}


/** Product object */
export interface ProductReviewsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** Product object */
export interface ProductShippingClassesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** Product object */
export interface ProductShortDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** Product object */
export interface ProductUpsellArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
}


/** Product object */
export interface ProductVisibleProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Product attribute object */
export interface ProductAttribute {
  /** Attribute ID */
  attributeId: Scalars['Int'];
  /** Attribute Global ID */
  id: Scalars['ID'];
  /** Attribute label */
  label: Scalars['String'];
  /** Attribute name */
  name: Scalars['String'];
  /** Attribute options */
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Attribute position */
  position: Scalars['Int'];
  /** Product attribute scope. */
  scope: ProductAttributeTypesEnum;
  /** Is attribute on product variation */
  variation: Scalars['Boolean'];
  /** Is attribute visible */
  visible: Scalars['Boolean'];
}

/** Options for ordering the connection */
export interface ProductAttributeInput {
  attributeName: Scalars['String'];
  attributeValue?: Maybe<Scalars['String']>;
}

/** A simple product attribute object */
export interface ProductAttributeOutput {
  /** Attribute name. */
  attributeName?: Maybe<Scalars['String']>;
  /** Attribute value. */
  attributeValue?: Maybe<Scalars['String']>;
}

/** Product attribute type enumeration */
export enum ProductAttributeTypesEnum {
  /** A global product attribute */
  Global = 'GLOBAL',
  /** A local product attribute */
  Local = 'LOCAL'
}

/** The productCategory type */
export interface ProductCategory extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, HierarchicalTermNode, MenuItemLinkable {
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<ProductCategoryToAncestorsProductCategoryConnection>;
  /** Connection between the productCategory type and the productCategory type */
  children?: Maybe<ProductCategoryToProductCategoryConnection>;
  /** Connection between the productCategory type and the ContentNode type */
  contentNodes?: Maybe<ProductCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Product category display type */
  display?: Maybe<ProductCategoryDisplay>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Product category image */
  image?: Maybe<MediaItem>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** Product category menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the productCategory type and the productCategory type */
  parent?: Maybe<ProductCategoryToParentProductCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  productCategoryId?: Maybe<Scalars['Int']>;
  /** Connection between the ProductCategory type and the Product type */
  products?: Maybe<ProductCategoryToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the productCategory type and the Taxonomy type */
  taxonomy?: Maybe<ProductCategoryToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** The productCategory type */
export interface ProductCategoryAncestorsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The productCategory type */
export interface ProductCategoryChildrenArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToProductCategoryConnectionWhereArgs>;
}


/** The productCategory type */
export interface ProductCategoryContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToContentNodeConnectionWhereArgs>;
}


/** The productCategory type */
export interface ProductCategoryEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The productCategory type */
export interface ProductCategoryEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The productCategory type */
export interface ProductCategoryProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToProductConnectionWhereArgs>;
}

/** Product category display type enumeration */
export enum ProductCategoryDisplay {
  /** Display both products and subcategories of this category. */
  Both = 'BOTH',
  /** Display default content connected to this category. */
  Default = 'DEFAULT',
  /** Display products associated with this category. */
  Products = 'PRODUCTS',
  /** Display subcategories of this category. */
  Subcategories = 'SUBCATEGORIES'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductCategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the productCategory type and the productCategory type */
export interface ProductCategoryToAncestorsProductCategoryConnection {
  /** Edges for the ProductCategoryToAncestorsProductCategoryConnection connection */
  edges?: Maybe<Array<Maybe<ProductCategoryToAncestorsProductCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToAncestorsProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Connection between the productCategory type and the ContentNode type */
export interface ProductCategoryToContentNodeConnection {
  /** Edges for the ProductCategoryToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<ProductCategoryToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the ProductCategoryToContentNodeConnection connection */
export interface ProductCategoryToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the productCategory type and the productCategory type */
export interface ProductCategoryToParentProductCategoryConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<ProductCategory>;
}

/** Connection between the productCategory type and the productCategory type */
export interface ProductCategoryToProductCategoryConnection {
  /** Edges for the ProductCategoryToProductCategoryConnection connection */
  edges?: Maybe<Array<Maybe<ProductCategoryToProductCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Arguments for filtering the ProductCategoryToProductCategoryConnection connection */
export interface ProductCategoryToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the ProductCategory type and the Product type */
export interface ProductCategoryToProductConnection {
  /** Edges for the ProductCategoryToProductConnection connection */
  edges?: Maybe<Array<Maybe<ProductCategoryToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductCategoryToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the ProductCategoryToProductConnection connection */
export interface ProductCategoryToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the productCategory type and the Taxonomy type */
export interface ProductCategoryToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** A product object */
export interface ProductDownload {
  /** Is file allowed */
  allowedFileType?: Maybe<Scalars['Boolean']>;
  /** Product download ID */
  downloadId: Scalars['String'];
  /** Download file */
  file?: Maybe<Scalars['String']>;
  /** Validate file exists */
  fileExists?: Maybe<Scalars['Boolean']>;
  /** File extension */
  fileExt?: Maybe<Scalars['String']>;
  /** Type of file path set */
  filePathType?: Maybe<Scalars['String']>;
  /** File type */
  fileType?: Maybe<Scalars['String']>;
  /** Product download name */
  name?: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single Product. Default is ID. */
export enum ProductIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Unique store identifier for product. */
  Sku = 'SKU',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG'
}

/** The productTag type */
export interface ProductTag extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, MenuItemLinkable {
  /** Connection between the productTag type and the ContentNode type */
  contentNodes?: Maybe<ProductTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  productTagId?: Maybe<Scalars['Int']>;
  /** Connection between the ProductTag type and the Product type */
  products?: Maybe<ProductTagToProductConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the productTag type and the Taxonomy type */
  taxonomy?: Maybe<ProductTagToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** The productTag type */
export interface ProductTagContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTagToContentNodeConnectionWhereArgs>;
}


/** The productTag type */
export interface ProductTagEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The productTag type */
export interface ProductTagEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The productTag type */
export interface ProductTagProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTagToProductConnectionWhereArgs>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductTagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the productTag type and the ContentNode type */
export interface ProductTagToContentNodeConnection {
  /** Edges for the ProductTagToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<ProductTagToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductTagToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the ProductTagToContentNodeConnection connection */
export interface ProductTagToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the ProductTag type and the Product type */
export interface ProductTagToProductConnection {
  /** Edges for the ProductTagToProductConnection connection */
  edges?: Maybe<Array<Maybe<ProductTagToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductTagToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the ProductTagToProductConnection connection */
export interface ProductTagToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the productTag type and the Taxonomy type */
export interface ProductTagToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** Product taxonomies */
export enum ProductTaxonomyEnum {
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Visibleproduct = 'VISIBLEPRODUCT'
}

/** Product filter */
export interface ProductTaxonomyFilterInput {
  /** A list of term ids */
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter operation type */
  operator?: Maybe<TaxonomyOperatorEnum>;
  /** Which field to select taxonomy term by. */
  taxonomy: ProductTaxonomyEnum;
  /** A list of term slugs */
  terms?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Product taxonomy filter type */
export interface ProductTaxonomyFilterRelationInput {
  and?: Maybe<Array<Maybe<ProductTaxonomyFilterInput>>>;
  or?: Maybe<Array<Maybe<ProductTaxonomyFilterInput>>>;
}

/** Connection between the Product type and the Comment type */
export interface ProductToCommentConnection {
  /** Average review rating for this product. */
  averageRating?: Maybe<Scalars['Float']>;
  /** Edges for the ProductToCommentConnection connection */
  edges?: Maybe<Array<Maybe<ProductToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
  /** Review rating */
  rating?: Maybe<Scalars['Float']>;
}

/** Arguments for filtering the ProductToCommentConnection connection */
export interface ProductToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Connection between the Product type and the GlobalProductAttribute type */
export interface ProductToGlobalProductAttributeConnection {
  /** Edges for the ProductToGlobalProductAttributeConnection connection */
  edges?: Maybe<Array<Maybe<ProductToGlobalProductAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<GlobalProductAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToGlobalProductAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<GlobalProductAttribute>;
}

/** Arguments for filtering the ProductToGlobalProductAttributeConnection connection */
export interface ProductToGlobalProductAttributeConnectionWhereArgs {
  /** Filter results by attribute scope. */
  type?: Maybe<ProductAttributeTypesEnum>;
}

/** Connection between the Product type and the LocalProductAttribute type */
export interface ProductToLocalProductAttributeConnection {
  /** Edges for the ProductToLocalProductAttributeConnection connection */
  edges?: Maybe<Array<Maybe<ProductToLocalProductAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<LocalProductAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToLocalProductAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<LocalProductAttribute>;
}

/** Arguments for filtering the ProductToLocalProductAttributeConnection connection */
export interface ProductToLocalProductAttributeConnectionWhereArgs {
  /** Filter results by attribute scope. */
  type?: Maybe<ProductAttributeTypesEnum>;
}

/** Connection between the Product type and the MediaItem type */
export interface ProductToMediaItemConnection {
  /** Edges for the ProductToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<ProductToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>;
}

/** Arguments for filtering the ProductToMediaItemConnection connection */
export interface ProductToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the Product type and the ProductAttribute type */
export interface ProductToProductAttributeConnection {
  /** Edges for the ProductToProductAttributeConnection connection */
  edges?: Maybe<Array<Maybe<ProductToProductAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductAttribute>;
}

/** Arguments for filtering the ProductToProductAttributeConnection connection */
export interface ProductToProductAttributeConnectionWhereArgs {
  /** Filter results by attribute scope. */
  type?: Maybe<ProductAttributeTypesEnum>;
}

/** Connection between the Product type and the productCategory type */
export interface ProductToProductCategoryConnection {
  /** Edges for the ProductToProductCategoryConnection connection */
  edges?: Maybe<Array<Maybe<ProductToProductCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Arguments for filtering the ProductToProductCategoryConnection connection */
export interface ProductToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the Product type */
export interface ProductToProductConnection {
  /** Edges for the ProductToProductConnection connection */
  edges?: Maybe<Array<Maybe<ProductToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the ProductToProductConnection connection */
export interface ProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Shuffle results? (Pagination currently not support by this argument) */
  shuffle?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the Product type and the productTag type */
export interface ProductToProductTagConnection {
  /** Edges for the ProductToProductTagConnection connection */
  edges?: Maybe<Array<Maybe<ProductToProductTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductTag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductTag>;
}

/** Arguments for filtering the ProductToProductTagConnection connection */
export interface ProductToProductTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the productType type */
export interface ProductToProductTypeConnection {
  /** Edges for the ProductToProductTypeConnection connection */
  edges?: Maybe<Array<Maybe<ProductToProductTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductType>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToProductTypeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductType>;
}

/** Arguments for filtering the ProductToProductTypeConnection connection */
export interface ProductToProductTypeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the shippingClass type */
export interface ProductToShippingClassConnection {
  /** Edges for the ProductToShippingClassConnection connection */
  edges?: Maybe<Array<Maybe<ProductToShippingClassConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToShippingClassConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingClass>;
}

/** Arguments for filtering the ProductToShippingClassConnection connection */
export interface ProductToShippingClassConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the Product type and the Product type */
export interface ProductToUpsellConnection {
  /** Edges for the ProductToUpsellConnection connection */
  edges?: Maybe<Array<Maybe<ProductToUpsellConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToUpsellConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the ProductToUpsellConnection connection */
export interface ProductToUpsellConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the Product type and the visibleProduct type */
export interface ProductToVisibleProductConnection {
  /** Edges for the ProductToVisibleProductConnection connection */
  edges?: Maybe<Array<Maybe<ProductToVisibleProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductToVisibleProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VisibleProduct>;
}

/** Arguments for filtering the ProductToVisibleProductConnection connection */
export interface ProductToVisibleProductConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** The productType type */
export interface ProductType extends Node, TermNode, DatabaseIdentifier {
  /** Connection between the productType type and the ContentNode type */
  contentNodes?: Maybe<ProductTypeToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  productTypeId?: Maybe<Scalars['Int']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the productType type and the Taxonomy type */
  taxonomy?: Maybe<ProductTypeToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** The productType type */
export interface ProductTypeContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTypeToContentNodeConnectionWhereArgs>;
}


/** The productType type */
export interface ProductTypeEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The productType type */
export interface ProductTypeEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ProductTypeIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the productType type and the ContentNode type */
export interface ProductTypeToContentNodeConnection {
  /** Edges for the ProductTypeToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<ProductTypeToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductTypeToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the ProductTypeToContentNodeConnection connection */
export interface ProductTypeToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the productType type and the Taxonomy type */
export interface ProductTypeToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** Product type enumeration */
export enum ProductTypesEnum {
  /** An external product */
  External = 'EXTERNAL',
  /** A product group */
  Grouped = 'GROUPED',
  /** A simple product */
  Simple = 'SIMPLE',
  /** A variable product */
  Variable = 'VARIABLE',
  /** A product variation */
  Variation = 'VARIATION'
}

/** A product variation object */
export interface ProductVariation extends Node, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  /** Connection between the ProductVariation type and the VariationAttribute type */
  attributes?: Maybe<ProductVariationToVariationAttributeConnection>;
  /** Product variation backorders */
  backorders?: Maybe<BackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /** Product variation catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The ID of the refund in the database */
  databaseId: Scalars['Int'];
  /** Date variation created */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** Download expiry */
  downloadExpiry?: Maybe<Scalars['Int']>;
  /** Download limit */
  downloadLimit?: Maybe<Scalars['Int']>;
  /** Is downloadable? */
  downloadable?: Maybe<Scalars['Boolean']>;
  /** Product downloads */
  downloads?: Maybe<Array<Maybe<ProductDownload>>>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** Does product variation have any visible attributes */
  hasAttributes?: Maybe<Scalars['Boolean']>;
  /** Product variation height */
  height?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the product variation */
  id: Scalars['ID'];
  /** Product variation main image */
  image?: Maybe<MediaItem>;
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** Product variation length */
  length?: Maybe<Scalars['String']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** if/how product variation stock is managed */
  manageStock?: Maybe<ManageStockEnum>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Date variation last updated */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is variation on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** The parent of the node. The parent object can be of various types */
  parent?: Maybe<ProductVariationToVariableProductConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** Product variation&#039;s active price */
  price?: Maybe<Scalars['String']>;
  /** If product variation can be bought */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Product variation purchase_note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Product variation&#039;s regular price */
  regularPrice?: Maybe<Scalars['String']>;
  /** Product variation&#039;s sale price */
  salePrice?: Maybe<Scalars['String']>;
  /** Product variation shipping class */
  shippingClass?: Maybe<Scalars['String']>;
  /** Connection between the ProductVariation type and the shippingClass type */
  shippingClasses?: Maybe<ProductVariationToShippingClassConnection>;
  /** Product variation SKU (Stock-keeping unit) */
  sku?: Maybe<Scalars['String']>;
  /**
   * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name
   * field and the post_name column in the database for the
   * &quot;post_objects&quot; table.
   */
  slug?: Maybe<Scalars['String']>;
  /** Variation status */
  status?: Maybe<Scalars['String']>;
  /** Product variation stock quantity */
  stockQuantity?: Maybe<Scalars['Int']>;
  /** Product stock status */
  stockStatus?: Maybe<StockStatusEnum>;
  /** Product variation tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** URI path for the resource */
  uri: Scalars['String'];
  /** Is product virtual? */
  virtual?: Maybe<Scalars['Boolean']>;
  /** Connection between the ProductVariation type and the visibleProduct type */
  visibleProducts?: Maybe<ProductVariationToVisibleProductConnection>;
  /** Product variation weight */
  weight?: Maybe<Scalars['String']>;
  /** Product variation width */
  width?: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A product variation object */
export interface ProductVariationMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A product variation object */
export interface ProductVariationPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A product variation object */
export interface ProductVariationRegularPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A product variation object */
export interface ProductVariationSalePriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A product variation object */
export interface ProductVariationShippingClassesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductVariationToShippingClassConnectionWhereArgs>;
}


/** A product variation object */
export interface ProductVariationVisibleProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductVariationToVisibleProductConnectionWhereArgs>;
}

/** The Type of Identifier used to fetch a single ProductVariation. Default is ID. */
export enum ProductVariationIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Connection between the ProductVariation type and the shippingClass type */
export interface ProductVariationToShippingClassConnection {
  /** Edges for the ProductVariationToShippingClassConnection connection */
  edges?: Maybe<Array<Maybe<ProductVariationToShippingClassConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductVariationToShippingClassConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingClass>;
}

/** Arguments for filtering the ProductVariationToShippingClassConnection connection */
export interface ProductVariationToShippingClassConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the ProductVariation type and the VariableProduct type */
export interface ProductVariationToVariableProductConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<VariableProduct>;
}

/** Connection between the ProductVariation type and the VariationAttribute type */
export interface ProductVariationToVariationAttributeConnection {
  /** Edges for the ProductVariationToVariationAttributeConnection connection */
  edges?: Maybe<Array<Maybe<ProductVariationToVariationAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductVariationToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VariationAttribute>;
}

/** Connection between the ProductVariation type and the visibleProduct type */
export interface ProductVariationToVisibleProductConnection {
  /** Edges for the ProductVariationToVisibleProductConnection connection */
  edges?: Maybe<Array<Maybe<ProductVariationToVisibleProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ProductVariationToVisibleProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VisibleProduct>;
}

/** Arguments for filtering the ProductVariationToVisibleProductConnection connection */
export interface ProductVariationToVisibleProductConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Fields to order the Products connection by */
export enum ProductsOrderByEnum {
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by date product sale starts */
  OnSaleFrom = 'ON_SALE_FROM',
  /** Order by date product sale ends */
  OnSaleTo = 'ON_SALE_TO',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by product's current price */
  Price = 'PRICE',
  /** Order by product average rating */
  Rating = 'RATING',
  /** Order by product's regular price */
  RegularPrice = 'REGULAR_PRICE',
  /** Order by number of reviews on product */
  ReviewCount = 'REVIEW_COUNT',
  /** Order by product's sale price */
  SalePrice = 'SALE_PRICE',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by total sales of products sold */
  TotalSales = 'TOTAL_SALES'
}

/** Options for ordering the connection */
export interface ProductsOrderbyInput {
  field: ProductsOrderByEnum;
  order?: Maybe<OrderEnum>;
}

/** The reading setting type */
export interface ReadingSettings {
  /** Bloggsidor visar högst. */
  postsPerPage?: Maybe<Scalars['Int']>;
}

/** A refund object */
export interface Refund extends Node {
  /** Refunded amount */
  amount?: Maybe<Scalars['Float']>;
  /** The ID of the refund in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** The date of the refund */
  date?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the refund */
  id: Scalars['ID'];
  /** Connection between the Refund type and the LineItem type */
  lineItems?: Maybe<RefundToLineItemConnection>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Reason for refund */
  reason?: Maybe<Scalars['String']>;
  /** User who completed the refund */
  refundedBy?: Maybe<User>;
  /** A title for the new post type */
  title?: Maybe<Scalars['String']>;
}


/** A refund object */
export interface RefundLineItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A refund object */
export interface RefundMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}

/** The Type of Identifier used to fetch a single Refund. Default is ID. */
export enum RefundIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Connection between the Refund type and the LineItem type */
export interface RefundToLineItemConnection {
  /** Edges for the RefundToLineItemConnection connection */
  edges?: Maybe<Array<Maybe<RefundToLineItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<LineItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RefundToLineItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<LineItem>;
}

/** Input for the registerCustomer mutation */
export interface RegisterCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /** Customer billing information */
  billing?: Maybe<CustomerAddressInput>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** Meta data. */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** Customer shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  /** A string that contains the user's username. */
  username?: Maybe<Scalars['String']>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
}

/** The payload for the registerCustomer mutation */
export interface RegisterCustomerPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  viewer?: Maybe<User>;
}

/** Input for the registerUser mutation */
export interface RegisterUserInput {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** A string that contains the user's username. */
  username: Scalars['String'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
}

/** The payload for the registerUser mutation */
export interface RegisterUserPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR'
}

/** Input for the removeCoupons mutation */
export interface RemoveCouponsInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Code of coupon being applied */
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** The payload for the removeCoupons mutation */
export interface RemoveCouponsPayload {
  cart?: Maybe<Cart>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the removeItemsFromCart mutation */
export interface RemoveItemsFromCartInput {
  /** Remove all cart items */
  all?: Maybe<Scalars['Boolean']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Item keys of the items being removed */
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
}

/** The payload for the removeItemsFromCart mutation */
export interface RemoveItemsFromCartPayload {
  cart?: Maybe<Cart>;
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the resetUserPassword mutation */
export interface ResetUserPasswordInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Password reset key */
  key?: Maybe<Scalars['String']>;
  /** The user's login (username). */
  login?: Maybe<Scalars['String']>;
  /** The new password. */
  password?: Maybe<Scalars['String']>;
}

/** The payload for the resetUserPassword mutation */
export interface ResetUserPasswordPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
}

/** Input for the restoreCartItems mutation */
export interface RestoreCartItemsInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Cart item key of the item being removed */
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
}

/** The payload for the restoreCartItems mutation */
export interface RestoreCartItemsPayload {
  cart?: Maybe<Cart>;
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the restoreComment mutation */
export interface RestoreCommentInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID'];
}

/** The payload for the restoreComment mutation */
export interface RestoreCommentPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The restored comment object */
  comment?: Maybe<Comment>;
  /** The ID of the restored comment */
  restoredId?: Maybe<Scalars['ID']>;
}

/** Input for the restoreReview mutation */
export interface RestoreReviewInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the target product review */
  id: Scalars['ID'];
}

/** The payload for the restoreReview mutation */
export interface RestoreReviewPayload {
  /** The affected product review ID */
  affectedId?: Maybe<Scalars['ID']>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The product rating of the affected product review */
  rating?: Maybe<Scalars['Float']>;
  /** The affected product review */
  review?: Maybe<Comment>;
}

/** The root mutation */
export interface RootMutation {
  /** The payload for the addCartItems mutation */
  addCartItems?: Maybe<AddCartItemsPayload>;
  /** The payload for the addFee mutation */
  addFee?: Maybe<AddFeePayload>;
  /** The payload for the addToCart mutation */
  addToCart?: Maybe<AddToCartPayload>;
  /** The payload for the applyCoupon mutation */
  applyCoupon?: Maybe<ApplyCouponPayload>;
  /** The payload for the checkout mutation */
  checkout?: Maybe<CheckoutPayload>;
  /** The payload for the createCategory mutation */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** The payload for the createComment mutation */
  createComment?: Maybe<CreateCommentPayload>;
  /** The payload for the createMediaItem mutation */
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  /** The payload for the createOrder mutation */
  createOrder?: Maybe<CreateOrderPayload>;
  /** The payload for the createPage mutation */
  createPage?: Maybe<CreatePagePayload>;
  /** The payload for the createPost mutation */
  createPost?: Maybe<CreatePostPayload>;
  /** The payload for the createPostFormat mutation */
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  /** The payload for the createProductCategory mutation */
  createProductCategory?: Maybe<CreateProductCategoryPayload>;
  /** The payload for the createProductTag mutation */
  createProductTag?: Maybe<CreateProductTagPayload>;
  /** The payload for the createProductType mutation */
  createProductType?: Maybe<CreateProductTypePayload>;
  /** The payload for the createShippingClass mutation */
  createShippingClass?: Maybe<CreateShippingClassPayload>;
  /** The payload for the createTag mutation */
  createTag?: Maybe<CreateTagPayload>;
  /** The payload for the createUser mutation */
  createUser?: Maybe<CreateUserPayload>;
  /** The payload for the createVisibleProduct mutation */
  createVisibleProduct?: Maybe<CreateVisibleProductPayload>;
  /** The payload for the deleteCategory mutation */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** The payload for the deleteComment mutation */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** The payload for the deleteMediaItem mutation */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  /** The payload for the deleteOrder mutation */
  deleteOrder?: Maybe<DeleteOrderPayload>;
  /** The payload for the deleteOrderItems mutation */
  deleteOrderItems?: Maybe<DeleteOrderItemsPayload>;
  /** The payload for the deletePage mutation */
  deletePage?: Maybe<DeletePagePayload>;
  /** The payload for the deletePost mutation */
  deletePost?: Maybe<DeletePostPayload>;
  /** The payload for the deletePostFormat mutation */
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  /** The payload for the deleteProductCategory mutation */
  deleteProductCategory?: Maybe<DeleteProductCategoryPayload>;
  /** The payload for the deleteProductTag mutation */
  deleteProductTag?: Maybe<DeleteProductTagPayload>;
  /** The payload for the deleteProductType mutation */
  deleteProductType?: Maybe<DeleteProductTypePayload>;
  /** The payload for the deleteReview mutation */
  deleteReview?: Maybe<DeleteReviewPayload>;
  /** The payload for the deleteShippingClass mutation */
  deleteShippingClass?: Maybe<DeleteShippingClassPayload>;
  /** The payload for the deleteTag mutation */
  deleteTag?: Maybe<DeleteTagPayload>;
  /** The payload for the deleteUser mutation */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** The payload for the deleteVisibleProduct mutation */
  deleteVisibleProduct?: Maybe<DeleteVisibleProductPayload>;
  /** The payload for the emptyCart mutation */
  emptyCart?: Maybe<EmptyCartPayload>;
  /** The payload for the fillCart mutation */
  fillCart?: Maybe<FillCartPayload>;
  /** Increase the count. */
  increaseCount?: Maybe<Scalars['Int']>;
  /** The payload for the registerCustomer mutation */
  registerCustomer?: Maybe<RegisterCustomerPayload>;
  /** The payload for the registerUser mutation */
  registerUser?: Maybe<RegisterUserPayload>;
  /** The payload for the removeCoupons mutation */
  removeCoupons?: Maybe<RemoveCouponsPayload>;
  /** The payload for the removeItemsFromCart mutation */
  removeItemsFromCart?: Maybe<RemoveItemsFromCartPayload>;
  /** The payload for the resetUserPassword mutation */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  /** The payload for the restoreCartItems mutation */
  restoreCartItems?: Maybe<RestoreCartItemsPayload>;
  /** The payload for the restoreComment mutation */
  restoreComment?: Maybe<RestoreCommentPayload>;
  /** The payload for the restoreReview mutation */
  restoreReview?: Maybe<RestoreReviewPayload>;
  /** The payload for the sendPasswordResetEmail mutation */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  /** The payload for the UpdateCategory mutation */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** The payload for the updateComment mutation */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** The payload for the updateCustomer mutation */
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  /** The payload for the updateItemQuantities mutation */
  updateItemQuantities?: Maybe<UpdateItemQuantitiesPayload>;
  /** The payload for the updateMediaItem mutation */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  /** The payload for the updateOrder mutation */
  updateOrder?: Maybe<UpdateOrderPayload>;
  /** The payload for the updatePage mutation */
  updatePage?: Maybe<UpdatePagePayload>;
  /** The payload for the updatePost mutation */
  updatePost?: Maybe<UpdatePostPayload>;
  /** The payload for the UpdatePostFormat mutation */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  /** The payload for the UpdateProductCategory mutation */
  updateProductCategory?: Maybe<UpdateProductCategoryPayload>;
  /** The payload for the UpdateProductTag mutation */
  updateProductTag?: Maybe<UpdateProductTagPayload>;
  /** The payload for the UpdateProductType mutation */
  updateProductType?: Maybe<UpdateProductTypePayload>;
  /** The payload for the updateReview mutation */
  updateReview?: Maybe<UpdateReviewPayload>;
  /** The payload for the updateSettings mutation */
  updateSettings?: Maybe<UpdateSettingsPayload>;
  /** The payload for the UpdateShippingClass mutation */
  updateShippingClass?: Maybe<UpdateShippingClassPayload>;
  /** The payload for the updateShippingMethod mutation */
  updateShippingMethod?: Maybe<UpdateShippingMethodPayload>;
  /** The payload for the UpdateTag mutation */
  updateTag?: Maybe<UpdateTagPayload>;
  /** The payload for the updateUser mutation */
  updateUser?: Maybe<UpdateUserPayload>;
  /** The payload for the UpdateVisibleProduct mutation */
  updateVisibleProduct?: Maybe<UpdateVisibleProductPayload>;
  /** The payload for the writeReview mutation */
  writeReview?: Maybe<WriteReviewPayload>;
}


/** The root mutation */
export interface RootMutationAddCartItemsArgs {
  input: AddCartItemsInput;
}


/** The root mutation */
export interface RootMutationAddFeeArgs {
  input: AddFeeInput;
}


/** The root mutation */
export interface RootMutationAddToCartArgs {
  input: AddToCartInput;
}


/** The root mutation */
export interface RootMutationApplyCouponArgs {
  input: ApplyCouponInput;
}


/** The root mutation */
export interface RootMutationCheckoutArgs {
  input: CheckoutInput;
}


/** The root mutation */
export interface RootMutationCreateCategoryArgs {
  input: CreateCategoryInput;
}


/** The root mutation */
export interface RootMutationCreateCommentArgs {
  input: CreateCommentInput;
}


/** The root mutation */
export interface RootMutationCreateMediaItemArgs {
  input: CreateMediaItemInput;
}


/** The root mutation */
export interface RootMutationCreateOrderArgs {
  input: CreateOrderInput;
}


/** The root mutation */
export interface RootMutationCreatePageArgs {
  input: CreatePageInput;
}


/** The root mutation */
export interface RootMutationCreatePostArgs {
  input: CreatePostInput;
}


/** The root mutation */
export interface RootMutationCreatePostFormatArgs {
  input: CreatePostFormatInput;
}


/** The root mutation */
export interface RootMutationCreateProductCategoryArgs {
  input: CreateProductCategoryInput;
}


/** The root mutation */
export interface RootMutationCreateProductTagArgs {
  input: CreateProductTagInput;
}


/** The root mutation */
export interface RootMutationCreateProductTypeArgs {
  input: CreateProductTypeInput;
}


/** The root mutation */
export interface RootMutationCreateShippingClassArgs {
  input: CreateShippingClassInput;
}


/** The root mutation */
export interface RootMutationCreateTagArgs {
  input: CreateTagInput;
}


/** The root mutation */
export interface RootMutationCreateUserArgs {
  input: CreateUserInput;
}


/** The root mutation */
export interface RootMutationCreateVisibleProductArgs {
  input: CreateVisibleProductInput;
}


/** The root mutation */
export interface RootMutationDeleteCategoryArgs {
  input: DeleteCategoryInput;
}


/** The root mutation */
export interface RootMutationDeleteCommentArgs {
  input: DeleteCommentInput;
}


/** The root mutation */
export interface RootMutationDeleteMediaItemArgs {
  input: DeleteMediaItemInput;
}


/** The root mutation */
export interface RootMutationDeleteOrderArgs {
  input: DeleteOrderInput;
}


/** The root mutation */
export interface RootMutationDeleteOrderItemsArgs {
  input: DeleteOrderItemsInput;
}


/** The root mutation */
export interface RootMutationDeletePageArgs {
  input: DeletePageInput;
}


/** The root mutation */
export interface RootMutationDeletePostArgs {
  input: DeletePostInput;
}


/** The root mutation */
export interface RootMutationDeletePostFormatArgs {
  input: DeletePostFormatInput;
}


/** The root mutation */
export interface RootMutationDeleteProductCategoryArgs {
  input: DeleteProductCategoryInput;
}


/** The root mutation */
export interface RootMutationDeleteProductTagArgs {
  input: DeleteProductTagInput;
}


/** The root mutation */
export interface RootMutationDeleteProductTypeArgs {
  input: DeleteProductTypeInput;
}


/** The root mutation */
export interface RootMutationDeleteReviewArgs {
  input: DeleteReviewInput;
}


/** The root mutation */
export interface RootMutationDeleteShippingClassArgs {
  input: DeleteShippingClassInput;
}


/** The root mutation */
export interface RootMutationDeleteTagArgs {
  input: DeleteTagInput;
}


/** The root mutation */
export interface RootMutationDeleteUserArgs {
  input: DeleteUserInput;
}


/** The root mutation */
export interface RootMutationDeleteVisibleProductArgs {
  input: DeleteVisibleProductInput;
}


/** The root mutation */
export interface RootMutationEmptyCartArgs {
  input: EmptyCartInput;
}


/** The root mutation */
export interface RootMutationFillCartArgs {
  input: FillCartInput;
}


/** The root mutation */
export interface RootMutationIncreaseCountArgs {
  count?: Maybe<Scalars['Int']>;
}


/** The root mutation */
export interface RootMutationRegisterCustomerArgs {
  input: RegisterCustomerInput;
}


/** The root mutation */
export interface RootMutationRegisterUserArgs {
  input: RegisterUserInput;
}


/** The root mutation */
export interface RootMutationRemoveCouponsArgs {
  input: RemoveCouponsInput;
}


/** The root mutation */
export interface RootMutationRemoveItemsFromCartArgs {
  input: RemoveItemsFromCartInput;
}


/** The root mutation */
export interface RootMutationResetUserPasswordArgs {
  input: ResetUserPasswordInput;
}


/** The root mutation */
export interface RootMutationRestoreCartItemsArgs {
  input: RestoreCartItemsInput;
}


/** The root mutation */
export interface RootMutationRestoreCommentArgs {
  input: RestoreCommentInput;
}


/** The root mutation */
export interface RootMutationRestoreReviewArgs {
  input: RestoreReviewInput;
}


/** The root mutation */
export interface RootMutationSendPasswordResetEmailArgs {
  input: SendPasswordResetEmailInput;
}


/** The root mutation */
export interface RootMutationUpdateCategoryArgs {
  input: UpdateCategoryInput;
}


/** The root mutation */
export interface RootMutationUpdateCommentArgs {
  input: UpdateCommentInput;
}


/** The root mutation */
export interface RootMutationUpdateCustomerArgs {
  input: UpdateCustomerInput;
}


/** The root mutation */
export interface RootMutationUpdateItemQuantitiesArgs {
  input: UpdateItemQuantitiesInput;
}


/** The root mutation */
export interface RootMutationUpdateMediaItemArgs {
  input: UpdateMediaItemInput;
}


/** The root mutation */
export interface RootMutationUpdateOrderArgs {
  input: UpdateOrderInput;
}


/** The root mutation */
export interface RootMutationUpdatePageArgs {
  input: UpdatePageInput;
}


/** The root mutation */
export interface RootMutationUpdatePostArgs {
  input: UpdatePostInput;
}


/** The root mutation */
export interface RootMutationUpdatePostFormatArgs {
  input: UpdatePostFormatInput;
}


/** The root mutation */
export interface RootMutationUpdateProductCategoryArgs {
  input: UpdateProductCategoryInput;
}


/** The root mutation */
export interface RootMutationUpdateProductTagArgs {
  input: UpdateProductTagInput;
}


/** The root mutation */
export interface RootMutationUpdateProductTypeArgs {
  input: UpdateProductTypeInput;
}


/** The root mutation */
export interface RootMutationUpdateReviewArgs {
  input: UpdateReviewInput;
}


/** The root mutation */
export interface RootMutationUpdateSettingsArgs {
  input: UpdateSettingsInput;
}


/** The root mutation */
export interface RootMutationUpdateShippingClassArgs {
  input: UpdateShippingClassInput;
}


/** The root mutation */
export interface RootMutationUpdateShippingMethodArgs {
  input: UpdateShippingMethodInput;
}


/** The root mutation */
export interface RootMutationUpdateTagArgs {
  input: UpdateTagInput;
}


/** The root mutation */
export interface RootMutationUpdateUserArgs {
  input: UpdateUserInput;
}


/** The root mutation */
export interface RootMutationUpdateVisibleProductArgs {
  input: UpdateVisibleProductInput;
}


/** The root mutation */
export interface RootMutationWriteReviewArgs {
  input: WriteReviewInput;
}

/** The root entry point into the Graph */
export interface RootQuery {
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<Settings>;
  /** The cart object */
  cart?: Maybe<Cart>;
  /** The cart object */
  cartFee?: Maybe<CartFee>;
  /** The cart object */
  cartItem?: Maybe<CartItem>;
  /** Connection between the RootQuery type and the category type */
  categories?: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  category?: Maybe<Category>;
  /** Returns a Comment */
  comment?: Maybe<Comment>;
  /** Connection between the RootQuery type and the Comment type */
  comments?: Maybe<RootQueryToCommentConnection>;
  /** A node used to manage content */
  contentNode?: Maybe<ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  contentType?: Maybe<ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  /** A coupon object */
  coupon?: Maybe<Coupon>;
  /** Connection between the RootQuery type and the Coupon type */
  coupons?: Maybe<RootQueryToCouponConnection>;
  /** A customer object */
  customer?: Maybe<Customer>;
  /** Connection between the RootQuery type and the Customer type */
  customers?: Maybe<RootQueryToCustomerConnection>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** A simple product object */
  externalProduct?: Maybe<ExternalProduct>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<GeneralSettings>;
  /** An object of the mediaItem Type.  */
  mediaItem?: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu?: Maybe<Menu>;
  /** A WordPress navigation menu item */
  menuItem?: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  menus?: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  /** A order object */
  order?: Maybe<Order>;
  /** Connection between the RootQuery type and the Order type */
  orders?: Maybe<RootQueryToOrderConnection>;
  /** An object of the page Type.  */
  page?: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>;
  /** Connection between the RootQuery type and the page type */
  pages?: Maybe<RootQueryToPageConnection>;
  /** Connection between the RootQuery type and the PaymentGateway type */
  paymentGateways?: Maybe<RootQueryToPaymentGatewayConnection>;
  /** A WordPress plugin */
  plugin?: Maybe<Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  plugins?: Maybe<RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  post?: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>;
  /** A 0bject */
  postFormat?: Maybe<PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  posts?: Maybe<RootQueryToPostConnection>;
  /** A product object */
  product?: Maybe<Product>;
  /** Connection between the RootQuery type and the productCategory type */
  productCategories?: Maybe<RootQueryToProductCategoryConnection>;
  /** A 0bject */
  productCategory?: Maybe<ProductCategory>;
  /** A 0bject */
  productTag?: Maybe<ProductTag>;
  /** Connection between the RootQuery type and the productTag type */
  productTags?: Maybe<RootQueryToProductTagConnection>;
  /** A 0bject */
  productType?: Maybe<ProductType>;
  /** Connection between the RootQuery type and the productType type */
  productTypes?: Maybe<RootQueryToProductTypeConnection>;
  /** A product variation object */
  productVariation?: Maybe<ProductVariation>;
  /** Connection between the RootQuery type and the Product type */
  products?: Maybe<RootQueryToProductConnection>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<ReadingSettings>;
  /** A refund object */
  refund?: Maybe<Refund>;
  /** Connection between the RootQuery type and the Refund type */
  refunds?: Maybe<RootQueryToRefundConnection>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /** Connection between the RootQuery type and the ContentRevisionUnion type */
  revisions?: Maybe<RootQueryToContentRevisionUnionConnection>;
  /** A 0bject */
  shippingClass?: Maybe<ShippingClass>;
  /** Connection between the RootQuery type and the shippingClass type */
  shippingClasses?: Maybe<RootQueryToShippingClassConnection>;
  /** A shipping method object */
  shippingMethod?: Maybe<ShippingMethod>;
  /** Connection between the RootQuery type and the ShippingMethod type */
  shippingMethods?: Maybe<RootQueryToShippingMethodConnection>;
  /** A simple product object */
  simpleProduct?: Maybe<SimpleProduct>;
  /** A 0bject */
  tag?: Maybe<Tag>;
  /** Connection between the RootQuery type and the tag type */
  tags?: Maybe<RootQueryToTagConnection>;
  /** A tax rate object */
  taxRate?: Maybe<TaxRate>;
  /** Connection between the RootQuery type and the TaxRate type */
  taxRates?: Maybe<RootQueryToTaxRateConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy?: Maybe<Taxonomy>;
  /** A node in a taxonomy used to group and relate content nodes */
  termNode?: Maybe<TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  terms?: Maybe<RootQueryToTermNodeConnection>;
  /** A Theme object */
  theme?: Maybe<Theme>;
  /** Connection between the RootQuery type and the Theme type */
  themes?: Maybe<RootQueryToThemeConnection>;
  /** Returns a user */
  user?: Maybe<User>;
  /** Returns a user role */
  userRole?: Maybe<UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  /** Connection between the RootQuery type and the User type */
  users?: Maybe<RootQueryToUserConnection>;
  /** A simple product object */
  variableProduct?: Maybe<VariableProduct>;
  /** Returns the current user */
  viewer?: Maybe<User>;
  /** A 0bject */
  visibleProduct?: Maybe<VisibleProduct>;
  /** Connection between the RootQuery type and the visibleProduct type */
  visibleProducts?: Maybe<RootQueryToVisibleProductConnection>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WritingSettings>;
}


/** The root entry point into the Graph */
export interface RootQueryCartArgs {
  recalculateTotals?: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryCartFeeArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryCartItemArgs {
  key: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryCategoryArgs {
  id: Scalars['ID'];
  idType?: Maybe<CategoryIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryCommentArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryCommentsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryContentNodeArgs {
  id: Scalars['ID'];
  idType?: Maybe<ContentNodeIdTypeEnum>;
  contentType?: Maybe<ContentTypeEnum>;
  asPreview?: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryContentTypeArgs {
  id: Scalars['ID'];
  idType?: Maybe<ContentTypeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryContentTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryCouponArgs {
  id: Scalars['ID'];
  idType?: Maybe<CouponIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryCouponsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCouponConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryCustomerArgs {
  id?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['Int']>;
}


/** The root entry point into the Graph */
export interface RootQueryCustomersArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCustomerConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryExternalProductArgs {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryMediaItemArgs {
  id: Scalars['ID'];
  idType?: Maybe<MediaItemIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryMediaItemByArgs {
  id?: Maybe<Scalars['ID']>;
  mediaItemId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryMediaItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryMenuArgs {
  id: Scalars['ID'];
  idType?: Maybe<MenuNodeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryMenuItemArgs {
  id: Scalars['ID'];
  idType?: Maybe<MenuItemNodeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryMenuItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryMenusArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryNodeArgs {
  id?: Maybe<Scalars['ID']>;
}


/** The root entry point into the Graph */
export interface RootQueryNodeByUriArgs {
  uri: Scalars['String'];
}


/** The root entry point into the Graph */
export interface RootQueryOrderArgs {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<OrderIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryOrdersArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToOrderConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPageArgs {
  id: Scalars['ID'];
  idType?: Maybe<PageIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryPageByArgs {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryPagesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPageConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPaymentGatewaysArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPaymentGatewayConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPluginArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryPluginsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryPostArgs {
  id: Scalars['ID'];
  idType?: Maybe<PostIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
}


/** The root entry point into the Graph */
export interface RootQueryPostByArgs {
  id?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryPostFormatArgs {
  id: Scalars['ID'];
  idType?: Maybe<PostFormatIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryPostFormatsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryPostsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductArgs {
  id: Scalars['ID'];
  idType?: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductCategoryConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductCategoryArgs {
  id: Scalars['ID'];
  idType?: Maybe<ProductCategoryIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTagArgs {
  id: Scalars['ID'];
  idType?: Maybe<ProductTagIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductTagConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTypeArgs {
  id: Scalars['ID'];
  idType?: Maybe<ProductTypeIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryProductTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductTypeConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryProductVariationArgs {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductVariationIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryRefundArgs {
  id: Scalars['ID'];
  idType?: Maybe<RefundIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryRefundsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToRefundConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryRegisteredScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryRegisteredStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryRevisionsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingClassArgs {
  id: Scalars['ID'];
  idType?: Maybe<ShippingClassIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingClassesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToShippingClassConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingMethodArgs {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ShippingMethodIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryShippingMethodsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQuerySimpleProductArgs {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTagArgs {
  id: Scalars['ID'];
  idType?: Maybe<TagIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTagConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxRateArgs {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<TaxRateIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxRatesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTaxRateConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxonomiesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryTaxonomyArgs {
  id: Scalars['ID'];
  idType?: Maybe<TaxonomyIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTermNodeArgs {
  id: Scalars['ID'];
  idType?: Maybe<TermNodeIdTypeEnum>;
  taxonomy?: Maybe<TaxonomyEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryTermsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryThemeArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryThemesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryUserArgs {
  id: Scalars['ID'];
  idType?: Maybe<UserNodeIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryUserRoleArgs {
  id: Scalars['ID'];
}


/** The root entry point into the Graph */
export interface RootQueryUserRolesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The root entry point into the Graph */
export interface RootQueryUsersArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToUserConnectionWhereArgs>;
}


/** The root entry point into the Graph */
export interface RootQueryVariableProductArgs {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
}


/** The root entry point into the Graph */
export interface RootQueryVisibleProductArgs {
  id: Scalars['ID'];
  idType?: Maybe<VisibleProductIdType>;
}


/** The root entry point into the Graph */
export interface RootQueryVisibleProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToVisibleProductConnectionWhereArgs>;
}

/** Connection between the RootQuery type and the category type */
export interface RootQueryToCategoryConnection {
  /** Edges for the RootQueryToCategoryConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Category>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Category>;
}

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export interface RootQueryToCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the Comment type */
export interface RootQueryToCommentConnection {
  /** Edges for the RootQueryToCommentConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export interface RootQueryToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Connection between the RootQuery type and the ContentNode type */
export interface RootQueryToContentNodeConnection {
  /** Edges for the RootQueryToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export interface RootQueryToContentNodeConnectionWhereArgs {
  /** The Types of content to filter */
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export interface RootQueryToContentRevisionUnionConnection {
  /** Edges for the RootQueryToContentRevisionUnionConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToContentRevisionUnionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentRevisionUnion>;
}

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export interface RootQueryToContentRevisionUnionConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the ContentType type */
export interface RootQueryToContentTypeConnection {
  /** Edges for the RootQueryToContentTypeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToContentTypeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentType>;
}

/** Connection between the RootQuery type and the Coupon type */
export interface RootQueryToCouponConnection {
  /** Edges for the RootQueryToCouponConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToCouponConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Coupon>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCouponConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Coupon>;
}

/** Arguments for filtering the RootQueryToCouponConnection connection */
export interface RootQueryToCouponConnectionWhereArgs {
  /** Limit result set to resources with a specific code. */
  code?: Maybe<Scalars['String']>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the Customer type */
export interface RootQueryToCustomerConnection {
  /** Edges for the RootQueryToCustomerConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToCustomerConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Customer>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToCustomerConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Customer>;
}

/** Arguments for filtering the RootQueryToCustomerConnection connection */
export interface RootQueryToCustomerConnectionWhereArgs {
  /** Limit result set to resources with a specific email. */
  email?: Maybe<Scalars['String']>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Order of results. */
  order?: Maybe<OrderEnum>;
  /** Order results by a specific field. */
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  /** Limit result set to resources with a specific role. */
  role?: Maybe<UserRoleEnum>;
  /** Limit result set to resources with a specific group of roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit result set to resources not within a specific group of roles. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the EnqueuedScript type */
export interface RootQueryToEnqueuedScriptConnection {
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToEnqueuedScriptConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>;
}

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export interface RootQueryToEnqueuedStylesheetConnection {
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToEnqueuedStylesheetConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>;
}

/** Connection between the RootQuery type and the mediaItem type */
export interface RootQueryToMediaItemConnection {
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>;
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export interface RootQueryToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the Menu type */
export interface RootQueryToMenuConnection {
  /** Edges for the RootQueryToMenuConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Menu>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMenuConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Menu>;
}

/** Arguments for filtering the RootQueryToMenuConnection connection */
export interface RootQueryToMenuConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the MenuItem type */
export interface RootQueryToMenuItemConnection {
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToMenuItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<MenuItem>;
}

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export interface RootQueryToMenuItemConnectionWhereArgs {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The ID of the parent menu object */
  parentId?: Maybe<Scalars['ID']>;
}

/** Connection between the RootQuery type and the Order type */
export interface RootQueryToOrderConnection {
  /** Edges for the RootQueryToOrderConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToOrderConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Order>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToOrderConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Order>;
}

/** Arguments for filtering the RootQueryToOrderConnection connection */
export interface RootQueryToOrderConnectionWhereArgs {
  /** Limit result set to orders assigned a specific customer. */
  customerId?: Maybe<Scalars['Int']>;
  /** Limit result set to orders assigned a specific group of customers. */
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<OrdersOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to orders assigned a specific product. */
  productId?: Maybe<Scalars['Int']>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to orders assigned a specific status. */
  statuses?: Maybe<Array<Maybe<OrderStatusEnum>>>;
}

/** Connection between the RootQuery type and the page type */
export interface RootQueryToPageConnection {
  /** Edges for the RootQueryToPageConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Page>;
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export interface RootQueryToPageConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the PaymentGateway type */
export interface RootQueryToPaymentGatewayConnection {
  /** Edges for the RootQueryToPaymentGatewayConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPaymentGatewayConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PaymentGateway>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPaymentGatewayConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<PaymentGateway>;
}

/** Arguments for filtering the RootQueryToPaymentGatewayConnection connection */
export interface RootQueryToPaymentGatewayConnectionWhereArgs {
  /** Include disabled payment gateways? */
  all?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the Plugin type */
export interface RootQueryToPluginConnection {
  /** Edges for the RootQueryToPluginConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Plugin>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPluginConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Plugin>;
}

/** Connection between the RootQuery type and the post type */
export interface RootQueryToPostConnection {
  /** Edges for the RootQueryToPostConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Arguments for filtering the RootQueryToPostConnection connection */
export interface RootQueryToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the RootQuery type and the postFormat type */
export interface RootQueryToPostFormatConnection {
  /** Edges for the RootQueryToPostFormatConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToPostFormatConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<PostFormat>;
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export interface RootQueryToPostFormatConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the productCategory type */
export interface RootQueryToProductCategoryConnection {
  /** Edges for the RootQueryToProductCategoryConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToProductCategoryConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductCategoryConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductCategory>;
}

/** Arguments for filtering the RootQueryToProductCategoryConnection connection */
export interface RootQueryToProductCategoryConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the Product type */
export interface RootQueryToProductConnection {
  /** Edges for the RootQueryToProductConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the RootQueryToProductConnection connection */
export interface RootQueryToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the RootQuery type and the productTag type */
export interface RootQueryToProductTagConnection {
  /** Edges for the RootQueryToProductTagConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToProductTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductTag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductTag>;
}

/** Arguments for filtering the RootQueryToProductTagConnection connection */
export interface RootQueryToProductTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the productType type */
export interface RootQueryToProductTypeConnection {
  /** Edges for the RootQueryToProductTypeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToProductTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductType>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToProductTypeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductType>;
}

/** Arguments for filtering the RootQueryToProductTypeConnection connection */
export interface RootQueryToProductTypeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the Refund type */
export interface RootQueryToRefundConnection {
  /** Edges for the RootQueryToRefundConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToRefundConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Refund>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToRefundConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Refund>;
}

/** Arguments for filtering the RootQueryToRefundConnection connection */
export interface RootQueryToRefundConnectionWhereArgs {
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to refunds from a specific group of order IDs. */
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit results to those matching a string. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to refunds assigned a specific status. */
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Connection between the RootQuery type and the shippingClass type */
export interface RootQueryToShippingClassConnection {
  /** Edges for the RootQueryToShippingClassConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToShippingClassConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToShippingClassConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingClass>;
}

/** Arguments for filtering the RootQueryToShippingClassConnection connection */
export interface RootQueryToShippingClassConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the ShippingMethod type */
export interface RootQueryToShippingMethodConnection {
  /** Edges for the RootQueryToShippingMethodConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToShippingMethodConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ShippingMethod>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToShippingMethodConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ShippingMethod>;
}

/** Connection between the RootQuery type and the tag type */
export interface RootQueryToTagConnection {
  /** Edges for the RootQueryToTagConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Tag>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTagConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Tag>;
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export interface RootQueryToTagConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the TaxRate type */
export interface RootQueryToTaxRateConnection {
  /** Edges for the RootQueryToTaxRateConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToTaxRateConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TaxRate>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTaxRateConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<TaxRate>;
}

/** Arguments for filtering the RootQueryToTaxRateConnection connection */
export interface RootQueryToTaxRateConnectionWhereArgs {
  /** Sort by tax class. */
  class?: Maybe<TaxClassEnum>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<TaxRateConnectionOrderbyInput>>>;
  /** Filter results by a post code. */
  postCode?: Maybe<Scalars['String']>;
  /** Filter results by a group of post codes. */
  postCodeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Connection between the RootQuery type and the Taxonomy type */
export interface RootQueryToTaxonomyConnection {
  /** Edges for the RootQueryToTaxonomyConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTaxonomyConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Taxonomy>;
}

/** Connection between the RootQuery type and the TermNode type */
export interface RootQueryToTermNodeConnection {
  /** Edges for the RootQueryToTermNodeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToTermNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<TermNode>;
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export interface RootQueryToTermNodeConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Connection between the RootQuery type and the Theme type */
export interface RootQueryToThemeConnection {
  /** Edges for the RootQueryToThemeConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Theme>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToThemeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Theme>;
}

/** Connection between the RootQuery type and the User type */
export interface RootQueryToUserConnection {
  /** Edges for the RootQueryToUserConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToUserConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<User>;
}

/** Arguments for filtering the RootQueryToUserConnection connection */
export interface RootQueryToUserConnectionWhereArgs {
  /** Array of userIds to exclude. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** The user login. */
  login?: Maybe<Scalars['String']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The user nicename. */
  nicename?: Maybe<Scalars['String']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
  /**
   * An array of role names that users must match to be included in results. Note
   * that this is an inclusive list: users must match *each* role.
   */
  role?: Maybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  /**
   * Search keyword. Searches for possible string matches on columns. When
   * "searchColumns" is left empty, it tries to determine which column to search in
   * based on search string.
   */
  search?: Maybe<Scalars['String']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
}

/** Connection between the RootQuery type and the UserRole type */
export interface RootQueryToUserRoleConnection {
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToUserRoleConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<UserRole>;
}

/** Connection between the RootQuery type and the visibleProduct type */
export interface RootQueryToVisibleProductConnection {
  /** Edges for the RootQueryToVisibleProductConnection connection */
  edges?: Maybe<Array<Maybe<RootQueryToVisibleProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface RootQueryToVisibleProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VisibleProduct>;
}

/** Arguments for filtering the RootQueryToVisibleProductConnection connection */
export interface RootQueryToVisibleProductConnectionWhereArgs {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>;
  /**
   * True to limit results to terms that have no children. This parameter has no
   * effect on non-hierarchical taxonomies. Default false.
   */
  childless?: Maybe<Scalars['Boolean']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /**
   * Array of term ids to exclude along with all of their descendant terms. If
   * $include is non-empty, $exclude_tree is ignored. Default empty array.
   */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Direction the connection should be ordered in */
  order?: Maybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
}

/** Input for the sendPasswordResetEmail mutation */
export interface SendPasswordResetEmailInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String'];
}

/** The payload for the sendPasswordResetEmail mutation */
export interface SendPasswordResetEmailPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The user that the password reset email was sent to */
  user?: Maybe<User>;
}

/** All of the registered settings */
export interface Settings {
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
}

/** The shippingClass type */
export interface ShippingClass extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable {
  /** Connection between the shippingClass type and the ContentNode type */
  contentNodes?: Maybe<ShippingClassToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the shippingClass type and the Taxonomy type */
  taxonomy?: Maybe<ShippingClassToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** The shippingClass type */
export interface ShippingClassContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ShippingClassToContentNodeConnectionWhereArgs>;
}


/** The shippingClass type */
export interface ShippingClassEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The shippingClass type */
export interface ShippingClassEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ShippingClassIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the shippingClass type and the ContentNode type */
export interface ShippingClassToContentNodeConnection {
  /** Edges for the ShippingClassToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<ShippingClassToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface ShippingClassToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the ShippingClassToContentNodeConnection connection */
export interface ShippingClassToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the shippingClass type and the Taxonomy type */
export interface ShippingClassToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** a shipping line object */
export interface ShippingLine {
  /** The ID of the order item in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Shipping Line&#039;s shipping method name */
  methodTitle?: Maybe<Scalars['String']>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Shipping Line&#039;s shipping method */
  shippingMethod?: Maybe<ShippingMethod>;
  /** Line tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Line taxes */
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  /** Line total (after discounts) */
  total?: Maybe<Scalars['String']>;
  /** Line total tax (after discounts) */
  totalTax?: Maybe<Scalars['String']>;
}


/** a shipping line object */
export interface ShippingLineMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}

/** Shipping lines data. */
export interface ShippingLineInput {
  /** Shipping Line ID */
  id?: Maybe<Scalars['ID']>;
  /** Shipping instance ID. */
  instanceId?: Maybe<Scalars['String']>;
  /** Meta data. */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Shipping method ID. */
  methodId: Scalars['String'];
  /** Shipping method name. */
  methodTitle: Scalars['String'];
  /** Line total (after discounts). */
  total: Scalars['String'];
}

/** A shipping method object */
export interface ShippingMethod extends Node {
  /** The ID of the shipping method in the database */
  databaseId: Scalars['ID'];
  /** Shipping method description. */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the tax rate. */
  id: Scalars['ID'];
  /** Shipping method title. */
  title?: Maybe<Scalars['String']>;
}

/** Error that occurred when setting the chosen shipping method for the eventually order. */
export interface ShippingMethodError extends CartError {
  /** ID of chosen shipping rate */
  chosenMethod: Scalars['String'];
  /** Index of package for desired shipping method */
  package: Scalars['Int'];
  /** Reason for error */
  reasons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Type of error */
  type: CartErrorType;
}

/** The Type of Identifier used to fetch a single Shipping Method. Default is ID. */
export enum ShippingMethodIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Shipping package object */
export interface ShippingPackage {
  /** Shipping package details */
  packageDetails?: Maybe<Scalars['String']>;
  /** Shipping package rates */
  rates?: Maybe<Array<Maybe<ShippingRate>>>;
  /** This shipping package supports the shipping calculator. */
  supportsShippingCalculator?: Maybe<Scalars['Boolean']>;
}

/** Shipping rate object */
export interface ShippingRate {
  /** Shipping rate cost */
  cost?: Maybe<Scalars['String']>;
  /** Shipping rate ID */
  id: Scalars['ID'];
  /** Shipping instance ID */
  instanceId?: Maybe<Scalars['Int']>;
  /** Shipping rate label */
  label?: Maybe<Scalars['String']>;
  /** Shipping method ID */
  methodId: Scalars['ID'];
}

/** A product object */
export interface SimpleProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  /** Connection between the Product type and the ProductAttribute type */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<Scalars['Float']>;
  /** Product backorders status */
  backorders?: Maybe<BackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** Connection between the SimpleProduct type and the Product type */
  crossSell?: Maybe<SimpleProductToProductConnection>;
  /** The ID of the product in the database */
  databaseId: Scalars['Int'];
  /** Date product created */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Connection between the SimpleProduct type and the VariationAttribute type */
  defaultAttributes?: Maybe<SimpleProductToVariationAttributeConnection>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** Download expiry */
  downloadExpiry?: Maybe<Scalars['Int']>;
  /** Download limit */
  downloadLimit?: Maybe<Scalars['Int']>;
  /** Is downloadable? */
  downloadable?: Maybe<Scalars['Boolean']>;
  /** Product downloads */
  downloads?: Maybe<Array<Maybe<ProductDownload>>>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** If the product is featured */
  featured?: Maybe<Scalars['Boolean']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** Connection between the Product type and the MediaItem type */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the GlobalProductAttribute type */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** Product&#039;s height */
  height?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the product */
  id: Scalars['ID'];
  /** Main image */
  image?: Maybe<MediaItem>;
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** Product&#039;s length */
  length?: Maybe<Scalars['String']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the LocalProductAttribute type */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /** If product manage stock */
  manageStock?: Maybe<Scalars['Boolean']>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Date product last updated */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is product on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Parent product */
  parent?: Maybe<Product>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** Product&#039;s active price */
  price?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the productCategory type */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** Connection between the Product type and the productTag type */
  productTags?: Maybe<ProductToProductTagConnection>;
  /** Connection between the Product type and the productType type */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /** Can product be purchased? */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Product&#039;s regular price */
  regularPrice?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<ProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the Comment type */
  reviews?: Maybe<ProductToCommentConnection>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /** Product&#039;s sale price */
  salePrice?: Maybe<Scalars['String']>;
  /** shipping class ID */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the shippingClass type */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /** Does product need to be shipped? */
  shippingRequired?: Maybe<Scalars['Boolean']>;
  /** Is product shipping taxable? */
  shippingTaxable?: Maybe<Scalars['Boolean']>;
  /** Product short description */
  shortDescription?: Maybe<Scalars['String']>;
  /** Product SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product slug */
  slug?: Maybe<Scalars['String']>;
  /** If should be sold individually */
  soldIndividually?: Maybe<Scalars['Boolean']>;
  /** Product status */
  status?: Maybe<Scalars['String']>;
  /** Number of items available for sale */
  stockQuantity?: Maybe<Scalars['Int']>;
  /** Product stock status */
  stockStatus?: Maybe<StockStatusEnum>;
  /** Tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** Number total of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<ProductToUpsellConnection>;
  /** URI path for the resource */
  uri: Scalars['String'];
  /** Is product virtual? */
  virtual?: Maybe<Scalars['Boolean']>;
  /** Connection between the Product type and the visibleProduct type */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
  /** Product&#039;s weight */
  weight?: Maybe<Scalars['String']>;
  /** Product&#039;s width */
  width?: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductCrossSellArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SimpleProductToProductConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductDefaultAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A product object */
export interface SimpleProductGalleryImagesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductGlobalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductLocalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A product object */
export interface SimpleProductPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductProductTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductProductTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductRegularPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductRelatedArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductReviewsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductSalePriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductShippingClassesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductShortDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A product object */
export interface SimpleProductUpsellArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
}


/** A product object */
export interface SimpleProductVisibleProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Connection between the SimpleProduct type and the Product type */
export interface SimpleProductToProductConnection {
  /** Edges for the SimpleProductToProductConnection connection */
  edges?: Maybe<Array<Maybe<SimpleProductToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface SimpleProductToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the SimpleProductToProductConnection connection */
export interface SimpleProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the SimpleProduct type and the VariationAttribute type */
export interface SimpleProductToVariationAttributeConnection {
  /** Edges for the SimpleProductToVariationAttributeConnection connection */
  edges?: Maybe<Array<Maybe<SimpleProductToVariationAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface SimpleProductToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VariationAttribute>;
}

/** Product stock status enumeration */
export enum StockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK'
}

/** The tag type */
export interface Tag extends Node, TermNode, DatabaseIdentifier, UniformResourceIdentifiable, MenuItemLinkable {
  /** Connection between the tag type and the ContentNode type */
  contentNodes?: Maybe<TagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the post type */
  posts?: Maybe<TagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId?: Maybe<Scalars['Int']>;
  /** Connection between the tag type and the Taxonomy type */
  taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** The tag type */
export interface TagContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToContentNodeConnectionWhereArgs>;
}


/** The tag type */
export interface TagEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The tag type */
export interface TagEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The tag type */
export interface TagPostsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToPostConnectionWhereArgs>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the tag type and the ContentNode type */
export interface TagToContentNodeConnection {
  /** Edges for the TagToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TagToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the TagToContentNodeConnection connection */
export interface TagToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the tag type and the post type */
export interface TagToPostConnection {
  /** Edges for the TagToPostConnection connection */
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TagToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Arguments for filtering the TagToPostConnection connection */
export interface TagToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the tag type and the Taxonomy type */
export interface TagToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** Tax class enumeration */
export enum TaxClassEnum {
  /** Inherits Tax class from cart */
  InheritCart = 'INHERIT_CART',
  Momsfritt = 'MOMSFRITT',
  NedsattMoms = 'NEDSATT_MOMS',
  /** Standard Tax rate */
  Standard = 'STANDARD'
}

/** a tax line object */
export interface TaxLine {
  /** The ID of the order item in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** Is this a compound tax rate? */
  isCompound?: Maybe<Scalars['Boolean']>;
  /** Tax rate label */
  label?: Maybe<Scalars['String']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** The Id of the order the order item belongs to. */
  orderId?: Maybe<Scalars['Int']>;
  /** Tax rate code/name */
  rateCode?: Maybe<Scalars['String']>;
  /** Tax line&#039;s shipping tax total */
  shippingTaxTotal?: Maybe<Scalars['String']>;
  /** Tax line&#039;s tax rate */
  taxRate?: Maybe<TaxRate>;
  /** Tax total (not including shipping taxes) */
  taxTotal?: Maybe<Scalars['String']>;
}


/** a tax line object */
export interface TaxLineMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}

/** A Tax rate object */
export interface TaxRate extends Node {
  /** City name. */
  city?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tax class. Default is standard. */
  class?: Maybe<TaxClassEnum>;
  /** Whether or not this is a compound rate. */
  compound?: Maybe<Scalars['Boolean']>;
  /** Country ISO 3166 code. */
  country?: Maybe<Scalars['String']>;
  /** The ID of the customer in the database */
  databaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier for the tax rate. */
  id: Scalars['ID'];
  /** Tax rate name. */
  name?: Maybe<Scalars['String']>;
  /** Indicates the order that will appear in queries. */
  order?: Maybe<Scalars['Int']>;
  /** Postcode/ZIP. */
  postcode?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tax priority. */
  priority?: Maybe<Scalars['Int']>;
  /** Tax rate. */
  rate?: Maybe<Scalars['String']>;
  /** Whether or not this tax rate also gets applied to shipping. */
  shipping?: Maybe<Scalars['Boolean']>;
  /** State code. */
  state?: Maybe<Scalars['String']>;
}

/** Field to order the connection by */
export enum TaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER'
}

/** Options for ordering the connection */
export interface TaxRateConnectionOrderbyInput {
  field: TaxRateConnectionOrderbyEnum;
  order?: Maybe<OrderEnum>;
}

/** The Type of Identifier used to fetch a single Tax rate. Default is ID. */
export enum TaxRateIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Product tax status enumeration */
export enum TaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE'
}

/** A taxonomy object */
export interface Taxonomy extends Node {
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
}


/** A taxonomy object */
export interface TaxonomyConnectedContentTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum product_cat */
  Productcategory = 'PRODUCTCATEGORY',
  /** Taxonomy enum product_tag */
  Producttag = 'PRODUCTTAG',
  /** Taxonomy enum product_type */
  Producttype = 'PRODUCTTYPE',
  /** Taxonomy enum product_shipping_class */
  Shippingclass = 'SHIPPINGCLASS',
  /** Taxonomy enum post_tag */
  Tag = 'TAG',
  /** Taxonomy enum product_visibility */
  Visibleproduct = 'VISIBLEPRODUCT'
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** Taxonomy query operators */
export enum TaxonomyOperatorEnum {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

/** Connection between the Taxonomy type and the ContentType type */
export interface TaxonomyToContentTypeConnection {
  /** Edges for the TaxonomyToContentTypeConnection connection */
  edges?: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TaxonomyToContentTypeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentType>;
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export interface TermNode {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** Unique identifier for the term */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
}


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export interface TermNodeEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export interface TermNodeEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the TermNode type and the EnqueuedScript type */
export interface TermNodeToEnqueuedScriptConnection {
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TermNodeToEnqueuedScriptConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>;
}

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export interface TermNodeToEnqueuedStylesheetConnection {
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface TermNodeToEnqueuedStylesheetConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>;
}

/** Union between the Category, Tag and PostFormatPost types */
export type TermObjectUnion = Category | Tag | PostFormat | ProductType | VisibleProduct | ProductCategory | ProductTag | ShippingClass;

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER'
}

/** A theme object */
export interface Theme extends Node {
  /**
   * Name of the theme author(s), could also be a company name. This field is
   * equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   */
  author?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri?: Maybe<Scalars['String']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description?: Maybe<Scalars['String']>;
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name?: Maybe<Scalars['String']>;
  /**
   * The URL of the screenshot for the theme. The screenshot is intended to give an
   * overview of what the theme looks like. This field is equivalent to
   * WP_Theme-&gt;get_screenshot().
   */
  screenshot?: Maybe<Scalars['String']>;
  /**
   * The theme slug is used to internally match themes. Theme slugs can have
   * subdirectories like: my-theme/sub-theme. This field is equivalent to
   * WP_Theme-&gt;get_stylesheet().
   */
  slug?: Maybe<Scalars['String']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * A URI if the theme has a website associated with it. The Theme URI is handy
   * for directing users to a theme site for support etc. This field is equivalent
   * to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   */
  themeUri?: Maybe<Scalars['String']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version?: Maybe<Scalars['String']>;
}

/** Available timezones */
export enum TimezoneEnum {
  /** Abidjan */
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  /** Accra */
  AfricaAccra = 'AFRICA_ACCRA',
  /** Addis Ababa */
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  /** Alger */
  AfricaAlgiers = 'AFRICA_ALGIERS',
  /** Asmara */
  AfricaAsmara = 'AFRICA_ASMARA',
  /** Bamako */
  AfricaBamako = 'AFRICA_BAMAKO',
  /** Bangui */
  AfricaBangui = 'AFRICA_BANGUI',
  /** Banjul */
  AfricaBanjul = 'AFRICA_BANJUL',
  /** Bissau */
  AfricaBissau = 'AFRICA_BISSAU',
  /** Blantyre */
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  /** Brazzaville */
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  /** Bujumbura */
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  /** Kairo */
  AfricaCairo = 'AFRICA_CAIRO',
  /** Casablanca */
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  /** Ceuta */
  AfricaCeuta = 'AFRICA_CEUTA',
  /** Konakry */
  AfricaConakry = 'AFRICA_CONAKRY',
  /** Dakar */
  AfricaDakar = 'AFRICA_DAKAR',
  /** Dar es-Salaam */
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  /** Djibouti */
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  /** Douala */
  AfricaDouala = 'AFRICA_DOUALA',
  /** Al-Ayun */
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  /** Freetown */
  AfricaFreetown = 'AFRICA_FREETOWN',
  /** Gaborone */
  AfricaGaborone = 'AFRICA_GABORONE',
  /** Harare */
  AfricaHarare = 'AFRICA_HARARE',
  /** Johannesburg */
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  /** Juba */
  AfricaJuba = 'AFRICA_JUBA',
  /** Kampala */
  AfricaKampala = 'AFRICA_KAMPALA',
  /** Khartoum */
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  /** Kigali */
  AfricaKigali = 'AFRICA_KIGALI',
  /** Kinshasa */
  AfricaKinshasa = 'AFRICA_KINSHASA',
  /** Lagos */
  AfricaLagos = 'AFRICA_LAGOS',
  /** Libreville */
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  /** Lomé */
  AfricaLome = 'AFRICA_LOME',
  /** Luanda */
  AfricaLuanda = 'AFRICA_LUANDA',
  /** Lubumbashi */
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  /** Lusaka */
  AfricaLusaka = 'AFRICA_LUSAKA',
  /** Malabo */
  AfricaMalabo = 'AFRICA_MALABO',
  /** Maputo */
  AfricaMaputo = 'AFRICA_MAPUTO',
  /** Maseru */
  AfricaMaseru = 'AFRICA_MASERU',
  /** Mbabane */
  AfricaMbabane = 'AFRICA_MBABANE',
  /** Mogadishu */
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  /** Monrovia */
  AfricaMonrovia = 'AFRICA_MONROVIA',
  /** Nairobi */
  AfricaNairobi = 'AFRICA_NAIROBI',
  /** N'Djamena */
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  /** Niamey */
  AfricaNiamey = 'AFRICA_NIAMEY',
  /** Nouakchott */
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  /** Ouagadougou */
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  /** Porto-Novo */
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  /** São Tomé */
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  /** Tripoli */
  AfricaTripoli = 'AFRICA_TRIPOLI',
  /** Tunis */
  AfricaTunis = 'AFRICA_TUNIS',
  /** Windhoek */
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  /** Adak */
  AmericaAdak = 'AMERICA_ADAK',
  /** Anchorage */
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  /** Anguilla */
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  /** Antigua */
  AmericaAntigua = 'AMERICA_ANTIGUA',
  /** Araguaína */
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  /** Argentina - Buenos Aires */
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  /** Argentina - Cajamarca */
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  /** Argentina - Córdoba */
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  /** Argentina - Jujuy */
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  /** Argentina - La Rioja */
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  /** Argentina - Mendoza */
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  /** Argentina - Río Gallegos */
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  /** Argentina - Salta */
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  /** Argentina - San Juan */
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  /** Argentina - San Luis */
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  /** Argentina - Tucumán */
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  /** Argentina - Ushuaia */
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  /** Aruba */
  AmericaAruba = 'AMERICA_ARUBA',
  /** Asunción */
  AmericaAsuncion = 'AMERICA_ASUNCION',
  /** Atikokan */
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  /** Bahia */
  AmericaBahia = 'AMERICA_BAHIA',
  /** Bahia Banderas */
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  /** Barbados */
  AmericaBarbados = 'AMERICA_BARBADOS',
  /** Belém */
  AmericaBelem = 'AMERICA_BELEM',
  /** Belize */
  AmericaBelize = 'AMERICA_BELIZE',
  /** Blanc-Sablon */
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  /** Boa Vista */
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  /** Bogotá */
  AmericaBogota = 'AMERICA_BOGOTA',
  /** Boise */
  AmericaBoise = 'AMERICA_BOISE',
  /** Cambridge Bay */
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  /** Campo Grande */
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  /** Cancún */
  AmericaCancun = 'AMERICA_CANCUN',
  /** Caracas */
  AmericaCaracas = 'AMERICA_CARACAS',
  /** Cayenne */
  AmericaCayenne = 'AMERICA_CAYENNE',
  /** Cayman */
  AmericaCayman = 'AMERICA_CAYMAN',
  /** Chicago */
  AmericaChicago = 'AMERICA_CHICAGO',
  /** Chihuahua */
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  /** Costa Rica */
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  /** Creston */
  AmericaCreston = 'AMERICA_CRESTON',
  /** Cuiabá */
  AmericaCuiaba = 'AMERICA_CUIABA',
  /** Curaçao */
  AmericaCuracao = 'AMERICA_CURACAO',
  /** Danmarkshavn */
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  /** Dawson */
  AmericaDawson = 'AMERICA_DAWSON',
  /** Dawson Creek */
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  /** Denver */
  AmericaDenver = 'AMERICA_DENVER',
  /** Detroit */
  AmericaDetroit = 'AMERICA_DETROIT',
  /** Dominica */
  AmericaDominica = 'AMERICA_DOMINICA',
  /** Edmonton */
  AmericaEdmonton = 'AMERICA_EDMONTON',
  /** Eirunepe */
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  /** El Salvador */
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  /** Fortaleza */
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  /** Fort Nelson */
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  /** Glace Bay */
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  /** Goose Bay */
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  /** Grand Turk */
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  /** Grenada */
  AmericaGrenada = 'AMERICA_GRENADA',
  /** Guadeloupe */
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  /** Guatemala */
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  /** Guayaquil */
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  /** Guyana */
  AmericaGuyana = 'AMERICA_GUYANA',
  /** Halifax */
  AmericaHalifax = 'AMERICA_HALIFAX',
  /** Havanna */
  AmericaHavana = 'AMERICA_HAVANA',
  /** Hermosillo */
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  /** Indiana - Indianapolis */
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  /** Indiana - Knox */
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  /** Indiana - Marengo */
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  /** Indiana - Petersburg */
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  /** Indiana - Tell City */
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  /** Indiana - Vevay */
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  /** Indiana - Vincennes */
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  /** Indiana - Winamac */
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  /** Inuvik */
  AmericaInuvik = 'AMERICA_INUVIK',
  /** Iqaluit */
  AmericaIqaluit = 'AMERICA_IQALUIT',
  /** Jamaica */
  AmericaJamaica = 'AMERICA_JAMAICA',
  /** Juneau */
  AmericaJuneau = 'AMERICA_JUNEAU',
  /** Kentucky - Louisville */
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  /** Kentucky - Monticello */
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  /** Kralendijk */
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  /** La Paz */
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  /** Lima */
  AmericaLima = 'AMERICA_LIMA',
  /** Los Angeles */
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  /** Lower Princes */
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  /** Maceió */
  AmericaMaceio = 'AMERICA_MACEIO',
  /** Managua */
  AmericaManagua = 'AMERICA_MANAGUA',
  /** Manaus */
  AmericaManaus = 'AMERICA_MANAUS',
  /** Marigot */
  AmericaMarigot = 'AMERICA_MARIGOT',
  /** Martinique */
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  /** Matamoros */
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  /** Mazatlán */
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  /** Menominee */
  AmericaMenominee = 'AMERICA_MENOMINEE',
  /** Mérida */
  AmericaMerida = 'AMERICA_MERIDA',
  /** Metlakatla */
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  /** Mexico City */
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  /** Miquelon */
  AmericaMiquelon = 'AMERICA_MIQUELON',
  /** Moncton */
  AmericaMoncton = 'AMERICA_MONCTON',
  /** Monterrey */
  AmericaMonterrey = 'AMERICA_MONTERREY',
  /** Montevideo */
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  /** Montserrat */
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  /** Nassau */
  AmericaNassau = 'AMERICA_NASSAU',
  /** New York */
  AmericaNewYork = 'AMERICA_NEW_YORK',
  /** Nipigon */
  AmericaNipigon = 'AMERICA_NIPIGON',
  /** Nome */
  AmericaNome = 'AMERICA_NOME',
  /** Noronha */
  AmericaNoronha = 'AMERICA_NORONHA',
  /** North Dakota - Beulah */
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  /** North Dakota - Center */
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  /** North Dakota - New Salem */
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  /** Nuuk */
  AmericaNuuk = 'AMERICA_NUUK',
  /** Ojinaga */
  AmericaOjinaga = 'AMERICA_OJINAGA',
  /** Panama */
  AmericaPanama = 'AMERICA_PANAMA',
  /** Pangnirtung */
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  /** Paramaribo */
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  /** Phoenix */
  AmericaPhoenix = 'AMERICA_PHOENIX',
  /** Porto Velho */
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  /** Port-au-Prince */
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  /** Port of Spain */
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  /** Puerto Rico */
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  /** Punta Arenas */
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  /** Rainy River */
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  /** Rankin Inlet */
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  /** Recife */
  AmericaRecife = 'AMERICA_RECIFE',
  /** Regina */
  AmericaRegina = 'AMERICA_REGINA',
  /** Resolute */
  AmericaResolute = 'AMERICA_RESOLUTE',
  /** Rio Branco */
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  /** Santarém */
  AmericaSantarem = 'AMERICA_SANTAREM',
  /** Santiago */
  AmericaSantiago = 'AMERICA_SANTIAGO',
  /** Santo Domingo */
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  /** São Paulo */
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  /** Ittoqqortoormiit */
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  /** Sitka */
  AmericaSitka = 'AMERICA_SITKA',
  /** Saint-Barthélemy */
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  /** Saint Johns */
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  /** Saint Kitts */
  AmericaStKitts = 'AMERICA_ST_KITTS',
  /** Saint Lucia */
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  /** Saint Thomas */
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  /** Saint Vincent */
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  /** Swift Current */
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  /** Tegucigalpa */
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  /** Qaanaaq */
  AmericaThule = 'AMERICA_THULE',
  /** Thunder Bay */
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  /** Tijuana */
  AmericaTijuana = 'AMERICA_TIJUANA',
  /** Toronto */
  AmericaToronto = 'AMERICA_TORONTO',
  /** Tortola */
  AmericaTortola = 'AMERICA_TORTOLA',
  /** Vancouver */
  AmericaVancouver = 'AMERICA_VANCOUVER',
  /** Whitehorse */
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  /** Winnipeg */
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  /** Yakutat */
  AmericaYakutat = 'AMERICA_YAKUTAT',
  /** Yellowknife */
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  /** Casey */
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  /** Davis */
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  /** Dumont d'Urville */
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  /** Macquarie */
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  /** Mawson */
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  /** McMurdo */
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  /** Palmer */
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  /** Rothera */
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  /** Syowa */
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  /** Troll */
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  /** Vostok */
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  /** Longyearbyen */
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  /** Aden */
  AsiaAden = 'ASIA_ADEN',
  /** Almaty */
  AsiaAlmaty = 'ASIA_ALMATY',
  /** Amman */
  AsiaAmman = 'ASIA_AMMAN',
  /** Anadyr */
  AsiaAnadyr = 'ASIA_ANADYR',
  /** Aqtau */
  AsiaAqtau = 'ASIA_AQTAU',
  /** Aqtöbe */
  AsiaAqtobe = 'ASIA_AQTOBE',
  /** Asjchabad */
  AsiaAshgabat = 'ASIA_ASHGABAT',
  /** Atyrau */
  AsiaAtyrau = 'ASIA_ATYRAU',
  /** Bagdad */
  AsiaBaghdad = 'ASIA_BAGHDAD',
  /** Bahrain */
  AsiaBahrain = 'ASIA_BAHRAIN',
  /** Baku */
  AsiaBaku = 'ASIA_BAKU',
  /** Bangkok */
  AsiaBangkok = 'ASIA_BANGKOK',
  /** Barnaul */
  AsiaBarnaul = 'ASIA_BARNAUL',
  /** Beirut */
  AsiaBeirut = 'ASIA_BEIRUT',
  /** Bisjkek */
  AsiaBishkek = 'ASIA_BISHKEK',
  /** Brunei */
  AsiaBrunei = 'ASIA_BRUNEI',
  /** Chita */
  AsiaChita = 'ASIA_CHITA',
  /** Tjojbalsan */
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  /** Colombo */
  AsiaColombo = 'ASIA_COLOMBO',
  /** Damaskus */
  AsiaDamascus = 'ASIA_DAMASCUS',
  /** Dhaka */
  AsiaDhaka = 'ASIA_DHAKA',
  /** Dili */
  AsiaDili = 'ASIA_DILI',
  /** Dubai */
  AsiaDubai = 'ASIA_DUBAI',
  /** Dusjanbe */
  AsiaDushanbe = 'ASIA_DUSHANBE',
  /** Famagusta */
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  /** Gaza */
  AsiaGaza = 'ASIA_GAZA',
  /** Hebron */
  AsiaHebron = 'ASIA_HEBRON',
  /** Hong Kong */
  AsiaHongKong = 'ASIA_HONG_KONG',
  /** Chovd */
  AsiaHovd = 'ASIA_HOVD',
  /** Ho Chi Minh */
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  /** Irkutsk */
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  /** Jakarta */
  AsiaJakarta = 'ASIA_JAKARTA',
  /** Jayapura */
  AsiaJayapura = 'ASIA_JAYAPURA',
  /** Jerusalem */
  AsiaJerusalem = 'ASIA_JERUSALEM',
  /** Kabul */
  AsiaKabul = 'ASIA_KABUL',
  /** Kamtjatka */
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  /** Karachi */
  AsiaKarachi = 'ASIA_KARACHI',
  /** Katmandu */
  AsiaKathmandu = 'ASIA_KATHMANDU',
  /** Khandyga */
  AsiaKhandyga = 'ASIA_KHANDYGA',
  /** Calcutta */
  AsiaKolkata = 'ASIA_KOLKATA',
  /** Krasnojarsk */
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  /** Kuala Lumpur */
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  /** Kuching */
  AsiaKuching = 'ASIA_KUCHING',
  /** Kuwait */
  AsiaKuwait = 'ASIA_KUWAIT',
  /** Macau */
  AsiaMacau = 'ASIA_MACAU',
  /** Magadan */
  AsiaMagadan = 'ASIA_MAGADAN',
  /** Makassar */
  AsiaMakassar = 'ASIA_MAKASSAR',
  /** Manila */
  AsiaManila = 'ASIA_MANILA',
  /** Muscat */
  AsiaMuscat = 'ASIA_MUSCAT',
  /** Nicosia */
  AsiaNicosia = 'ASIA_NICOSIA',
  /** Novokuznetsk */
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  /** Novosibirsk */
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  /** Omsk */
  AsiaOmsk = 'ASIA_OMSK',
  /** Oral */
  AsiaOral = 'ASIA_ORAL',
  /** Phnom Penh */
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  /** Pontianak */
  AsiaPontianak = 'ASIA_PONTIANAK',
  /** Pyongyang */
  AsiaPyongyang = 'ASIA_PYONGYANG',
  /** Qatar */
  AsiaQatar = 'ASIA_QATAR',
  /** Qostanay */
  AsiaQostanay = 'ASIA_QOSTANAY',
  /** Qyzylorda */
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  /** Riyadh */
  AsiaRiyadh = 'ASIA_RIYADH',
  /** Sachalin */
  AsiaSakhalin = 'ASIA_SAKHALIN',
  /** Samarkand */
  AsiaSamarkand = 'ASIA_SAMARKAND',
  /** Seoul */
  AsiaSeoul = 'ASIA_SEOUL',
  /** Shanghai */
  AsiaShanghai = 'ASIA_SHANGHAI',
  /** Singapore */
  AsiaSingapore = 'ASIA_SINGAPORE',
  /** Srednekolymsk */
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  /** Taipei */
  AsiaTaipei = 'ASIA_TAIPEI',
  /** Tasjkent */
  AsiaTashkent = 'ASIA_TASHKENT',
  /** Tbilisi */
  AsiaTbilisi = 'ASIA_TBILISI',
  /** Teheran */
  AsiaTehran = 'ASIA_TEHRAN',
  /** Thimphu */
  AsiaThimphu = 'ASIA_THIMPHU',
  /** Tokyo */
  AsiaTokyo = 'ASIA_TOKYO',
  /** Tomsk */
  AsiaTomsk = 'ASIA_TOMSK',
  /** Ulaanbaatar */
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  /** Ürümqi */
  AsiaUrumqi = 'ASIA_URUMQI',
  /** Ust-Nera */
  AsiaUstNera = 'ASIA_UST_NERA',
  /** Vientiane */
  AsiaVientiane = 'ASIA_VIENTIANE',
  /** Vladivostok */
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  /** Jakutsk */
  AsiaYakutsk = 'ASIA_YAKUTSK',
  /** Yangon */
  AsiaYangon = 'ASIA_YANGON',
  /** Jekaterinburg */
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  /** Jerevan */
  AsiaYerevan = 'ASIA_YEREVAN',
  /** Azorerna */
  AtlanticAzores = 'ATLANTIC_AZORES',
  /** Bermuda */
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  /** Canary */
  AtlanticCanary = 'ATLANTIC_CANARY',
  /** Kap Verde */
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  /** Färöarna */
  AtlanticFaroe = 'ATLANTIC_FAROE',
  /** Madeira */
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  /** Reykjavik */
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  /** Sydgeorgien */
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  /** Stanley */
  AtlanticStanley = 'ATLANTIC_STANLEY',
  /** Sankta Helena */
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  /** Adelaide */
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  /** Brisbane */
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  /** Broken Hill */
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  /** Darwin */
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  /** Eucla */
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  /** Hobart */
  AustraliaHobart = 'AUSTRALIA_HOBART',
  /** Lindeman */
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  /** Lord Howe */
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  /** Melbourne */
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  /** Perth */
  AustraliaPerth = 'AUSTRALIA_PERTH',
  /** Sydney */
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  /** Amsterdam */
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  /** Andorra */
  EuropeAndorra = 'EUROPE_ANDORRA',
  /** Astrachan */
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  /** Aten */
  EuropeAthens = 'EUROPE_ATHENS',
  /** Belgrad */
  EuropeBelgrade = 'EUROPE_BELGRADE',
  /** Berlin */
  EuropeBerlin = 'EUROPE_BERLIN',
  /** Bratislava */
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  /** Bryssel */
  EuropeBrussels = 'EUROPE_BRUSSELS',
  /** Bukarest */
  EuropeBucharest = 'EUROPE_BUCHAREST',
  /** Budapest */
  EuropeBudapest = 'EUROPE_BUDAPEST',
  /** Busingen */
  EuropeBusingen = 'EUROPE_BUSINGEN',
  /** Chişinău */
  EuropeChisinau = 'EUROPE_CHISINAU',
  /** Köpenhamn */
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  /** Dublin */
  EuropeDublin = 'EUROPE_DUBLIN',
  /** Gibraltar */
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  /** Guernsey */
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  /** Helsingfors */
  EuropeHelsinki = 'EUROPE_HELSINKI',
  /** Isle of Man */
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  /** Istanbul */
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  /** Jersey */
  EuropeJersey = 'EUROPE_JERSEY',
  /** Kaliningrad */
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  /** Kiev */
  EuropeKiev = 'EUROPE_KIEV',
  /** Kirov */
  EuropeKirov = 'EUROPE_KIROV',
  /** Lissabon */
  EuropeLisbon = 'EUROPE_LISBON',
  /** Ljubljana */
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  /** London */
  EuropeLondon = 'EUROPE_LONDON',
  /** Luxemburg */
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  /** Madrid */
  EuropeMadrid = 'EUROPE_MADRID',
  /** Malta */
  EuropeMalta = 'EUROPE_MALTA',
  /** Mariehamn */
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  /** Minsk */
  EuropeMinsk = 'EUROPE_MINSK',
  /** Monaco */
  EuropeMonaco = 'EUROPE_MONACO',
  /** Moskva */
  EuropeMoscow = 'EUROPE_MOSCOW',
  /** Oslo */
  EuropeOslo = 'EUROPE_OSLO',
  /** Paris */
  EuropeParis = 'EUROPE_PARIS',
  /** Podgorica */
  EuropePodgorica = 'EUROPE_PODGORICA',
  /** Prag */
  EuropePrague = 'EUROPE_PRAGUE',
  /** Riga */
  EuropeRiga = 'EUROPE_RIGA',
  /** Rom */
  EuropeRome = 'EUROPE_ROME',
  /** Samara */
  EuropeSamara = 'EUROPE_SAMARA',
  /** San Marino */
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  /** Sarajevo */
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  /** Saratov */
  EuropeSaratov = 'EUROPE_SARATOV',
  /** Simferopol */
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  /** Skopje */
  EuropeSkopje = 'EUROPE_SKOPJE',
  /** Sofia */
  EuropeSofia = 'EUROPE_SOFIA',
  /** Stockholm */
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  /** Tallinn */
  EuropeTallinn = 'EUROPE_TALLINN',
  /** Tirana */
  EuropeTirane = 'EUROPE_TIRANE',
  /** Ulyanovsk */
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  /** Uzjhorod */
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  /** Vaduz */
  EuropeVaduz = 'EUROPE_VADUZ',
  /** Vatikanstaten */
  EuropeVatican = 'EUROPE_VATICAN',
  /** Wien */
  EuropeVienna = 'EUROPE_VIENNA',
  /** Vilnius */
  EuropeVilnius = 'EUROPE_VILNIUS',
  /** Volgograd */
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  /** Warszawa */
  EuropeWarsaw = 'EUROPE_WARSAW',
  /** Zagreb */
  EuropeZagreb = 'EUROPE_ZAGREB',
  /** Zaporizjzja */
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  /** Zürich */
  EuropeZurich = 'EUROPE_ZURICH',
  /** Antananarivo */
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  /** Chagosöarna */
  IndianChagos = 'INDIAN_CHAGOS',
  /** Kiritimati */
  IndianChristmas = 'INDIAN_CHRISTMAS',
  /** Kokosöarna */
  IndianCocos = 'INDIAN_COCOS',
  /** Komorerna */
  IndianComoro = 'INDIAN_COMORO',
  /** Kerguelen */
  IndianKerguelen = 'INDIAN_KERGUELEN',
  /** Mahé */
  IndianMahe = 'INDIAN_MAHE',
  /** Maldiverna */
  IndianMaldives = 'INDIAN_MALDIVES',
  /** Mauritius */
  IndianMauritius = 'INDIAN_MAURITIUS',
  /** Mayotte */
  IndianMayotte = 'INDIAN_MAYOTTE',
  /** Réunion */
  IndianReunion = 'INDIAN_REUNION',
  /** Apia */
  PacificApia = 'PACIFIC_APIA',
  /** Auckland */
  PacificAuckland = 'PACIFIC_AUCKLAND',
  /** Bougainville */
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  /** Chatham */
  PacificChatham = 'PACIFIC_CHATHAM',
  /** Chuuk */
  PacificChuuk = 'PACIFIC_CHUUK',
  /** Påsköarna */
  PacificEaster = 'PACIFIC_EASTER',
  /** Efate */
  PacificEfate = 'PACIFIC_EFATE',
  /** Enderburyatollen */
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  /** Fakaofo */
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  /** Fiji */
  PacificFiji = 'PACIFIC_FIJI',
  /** Funafuti */
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  /** Galapagosöarna */
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  /** Gambieröarna */
  PacificGambier = 'PACIFIC_GAMBIER',
  /** Guadalcanal */
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  /** Guam */
  PacificGuam = 'PACIFIC_GUAM',
  /** Honolulu */
  PacificHonolulu = 'PACIFIC_HONOLULU',
  /** Kiritimati */
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  /** Kosraeöarna */
  PacificKosrae = 'PACIFIC_KOSRAE',
  /** Kwajalein */
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  /** Majuro */
  PacificMajuro = 'PACIFIC_MAJURO',
  /** Marquesasöarna */
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  /** Midwayöarna */
  PacificMidway = 'PACIFIC_MIDWAY',
  /** Nauru */
  PacificNauru = 'PACIFIC_NAURU',
  /** Niue */
  PacificNiue = 'PACIFIC_NIUE',
  /** Norfolk */
  PacificNorfolk = 'PACIFIC_NORFOLK',
  /** Nouméa */
  PacificNoumea = 'PACIFIC_NOUMEA',
  /** Pago Pago */
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  /** Palau */
  PacificPalau = 'PACIFIC_PALAU',
  /** Pitcairnöarna */
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  /** Pohnpei */
  PacificPohnpei = 'PACIFIC_POHNPEI',
  /** Port Moresby */
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  /** Rarotonga */
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  /** Saipan */
  PacificSaipan = 'PACIFIC_SAIPAN',
  /** Tahiti */
  PacificTahiti = 'PACIFIC_TAHITI',
  /** Tarawa */
  PacificTarawa = 'PACIFIC_TARAWA',
  /** Tongatapu */
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  /** Wakeöarna */
  PacificWake = 'PACIFIC_WAKE',
  /** Wallisön */
  PacificWallis = 'PACIFIC_WALLIS',
  /** UTC offset: UTC+0 */
  Utc_0 = 'UTC_0',
  /** UTC offset: UTC+0:30 */
  Utc_0_30 = 'UTC_0_30',
  /** UTC offset: UTC+1 */
  Utc_1 = 'UTC_1',
  /** UTC offset: UTC+10 */
  Utc_10 = 'UTC_10',
  /** UTC offset: UTC+10:30 */
  Utc_10_30 = 'UTC_10_30',
  /** UTC offset: UTC+11 */
  Utc_11 = 'UTC_11',
  /** UTC offset: UTC+11:30 */
  Utc_11_30 = 'UTC_11_30',
  /** UTC offset: UTC+12 */
  Utc_12 = 'UTC_12',
  /** UTC offset: UTC+12:45 */
  Utc_12_45 = 'UTC_12_45',
  /** UTC offset: UTC+13 */
  Utc_13 = 'UTC_13',
  /** UTC offset: UTC+13:45 */
  Utc_13_45 = 'UTC_13_45',
  /** UTC offset: UTC+14 */
  Utc_14 = 'UTC_14',
  /** UTC offset: UTC+1:30 */
  Utc_1_30 = 'UTC_1_30',
  /** UTC offset: UTC+2 */
  Utc_2 = 'UTC_2',
  /** UTC offset: UTC+2:30 */
  Utc_2_30 = 'UTC_2_30',
  /** UTC offset: UTC+3 */
  Utc_3 = 'UTC_3',
  /** UTC offset: UTC+3:30 */
  Utc_3_30 = 'UTC_3_30',
  /** UTC offset: UTC+4 */
  Utc_4 = 'UTC_4',
  /** UTC offset: UTC+4:30 */
  Utc_4_30 = 'UTC_4_30',
  /** UTC offset: UTC+5 */
  Utc_5 = 'UTC_5',
  /** UTC offset: UTC+5:30 */
  Utc_5_30 = 'UTC_5_30',
  /** UTC offset: UTC+5:45 */
  Utc_5_45 = 'UTC_5_45',
  /** UTC offset: UTC+6 */
  Utc_6 = 'UTC_6',
  /** UTC offset: UTC+6:30 */
  Utc_6_30 = 'UTC_6_30',
  /** UTC offset: UTC+7 */
  Utc_7 = 'UTC_7',
  /** UTC offset: UTC+7:30 */
  Utc_7_30 = 'UTC_7_30',
  /** UTC offset: UTC+8 */
  Utc_8 = 'UTC_8',
  /** UTC offset: UTC+8:30 */
  Utc_8_30 = 'UTC_8_30',
  /** UTC offset: UTC+8:45 */
  Utc_8_45 = 'UTC_8_45',
  /** UTC offset: UTC+9 */
  Utc_9 = 'UTC_9',
  /** UTC offset: UTC+9:30 */
  Utc_9_30 = 'UTC_9_30'
}

/** Any node that has a URI */
export interface UniformResourceIdentifiable {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
}

/** Input for the UpdateCategory mutation */
export interface UpdateCategoryInput {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the category object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the category object to update */
  id: Scalars['ID'];
  /** The name of the category object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdateCategory mutation */
export interface UpdateCategoryPayload {
  /** The created category */
  category?: Maybe<Category>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the updateComment mutation */
export interface UpdateCommentInput {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID'];
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Type of comment. */
  type?: Maybe<Scalars['String']>;
}

/** The payload for the updateComment mutation */
export interface UpdateCommentPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment that was created */
  comment?: Maybe<Comment>;
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server
   * will not return the comment to a non authenticated user, but a success message
   * can be returned if the create succeeded, and the client can optimistically add
   * the comment to the client cache
   */
  success?: Maybe<Scalars['Boolean']>;
}

/** Input for the updateCustomer mutation */
export interface UpdateCustomerInput {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /** Customer billing information */
  billing?: Maybe<CustomerAddressInput>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id?: Maybe<Scalars['ID']>;
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** Meta data. */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Customer shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Customer shipping is identical to billing address */
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
}

/** The payload for the updateCustomer mutation */
export interface UpdateCustomerPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
}

/** Input for the updateItemQuantities mutation */
export interface UpdateItemQuantitiesInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Cart item being updated */
  items?: Maybe<Array<Maybe<CartItemQuantityInput>>>;
}

/** The payload for the updateItemQuantities mutation */
export interface UpdateItemQuantitiesPayload {
  cart?: Maybe<Cart>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<CartItem>>>;
  removed?: Maybe<Array<Maybe<CartItem>>>;
  updated?: Maybe<Array<Maybe<CartItem>>>;
}

/** Input for the updateMediaItem mutation */
export interface UpdateMediaItemInput {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>;
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>;
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>;
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>;
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID'];
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>;
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>;
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>;
}

/** The payload for the updateMediaItem mutation */
export interface UpdateMediaItemPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The MediaItem object mutation type. */
  mediaItem?: Maybe<MediaItem>;
}

/** Input for the updateOrder mutation */
export interface UpdateOrderInput {
  /** Order billing address */
  billing?: Maybe<CustomerAddressInput>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Coupons codes to be applied to order */
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Currency the order was created with, in ISO format. */
  currency?: Maybe<Scalars['String']>;
  /** Order customer ID */
  customerId?: Maybe<Scalars['Int']>;
  /** Note left by customer during checkout. */
  customerNote?: Maybe<Scalars['String']>;
  /** Order shipping lines */
  feeLines?: Maybe<Array<Maybe<FeeLineInput>>>;
  /** Order global ID */
  id?: Maybe<Scalars['ID']>;
  /** Define if the order is paid. It will set the status to processing and reduce stock items. */
  isPaid?: Maybe<Scalars['Boolean']>;
  /** Order line items */
  lineItems?: Maybe<Array<Maybe<LineItemInput>>>;
  /** Order meta data */
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  /** Order WP ID */
  orderId?: Maybe<Scalars['Int']>;
  /** Parent order ID. */
  parentId?: Maybe<Scalars['Int']>;
  /** Payment method ID. */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Payment method title. */
  paymentMethodTitle?: Maybe<Scalars['String']>;
  /** Order shipping address */
  shipping?: Maybe<CustomerAddressInput>;
  /** Order shipping lines */
  shippingLines?: Maybe<Array<Maybe<ShippingLineInput>>>;
  /** Order status */
  status?: Maybe<OrderStatusEnum>;
  /** Order transaction ID */
  transactionId?: Maybe<Scalars['String']>;
}

/** The payload for the updateOrder mutation */
export interface UpdateOrderPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
}

/** Input for the updatePage mutation */
export interface UpdatePageInput {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The ID of the page object */
  id: Scalars['ID'];
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
}

/** The payload for the updatePage mutation */
export interface UpdatePagePayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  page?: Maybe<Page>;
}

/** Input for the UpdatePostFormat mutation */
export interface UpdatePostFormatInput {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID'];
  /** The name of the post_format object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdatePostFormat mutation */
export interface UpdatePostFormatPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_format */
  postFormat?: Maybe<PostFormat>;
}

/** Input for the updatePost mutation */
export interface UpdatePostInput {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>;
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the object */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day (e.g.
   * 01/31/2017) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>;
  /** The ID of the post object */
  id: Scalars['ID'];
  /**
   * A field used for ordering posts. This is typically used with nav menu items or
   * for special ordering of hierarchical content types.
   */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>;
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>;
  /** The status of the object */
  status?: Maybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>;
  /** The title of the object */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** The payload for the updatePost mutation */
export interface UpdatePostPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The Post object mutation type. */
  post?: Maybe<Post>;
}

/** Input for the UpdateProductCategory mutation */
export interface UpdateProductCategoryInput {
  /** The slug that the product_cat will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_cat object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productCategory object to update */
  id: Scalars['ID'];
  /** The name of the product_cat object to mutate */
  name?: Maybe<Scalars['String']>;
  /** The ID of the product_cat that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdateProductCategory mutation */
export interface UpdateProductCategoryPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_cat */
  productCategory?: Maybe<ProductCategory>;
}

/** Input for the UpdateProductTag mutation */
export interface UpdateProductTagInput {
  /** The slug that the product_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productTag object to update */
  id: Scalars['ID'];
  /** The name of the product_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdateProductTag mutation */
export interface UpdateProductTagPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_tag */
  productTag?: Maybe<ProductTag>;
}

/** Input for the UpdateProductType mutation */
export interface UpdateProductTypeInput {
  /** The slug that the product_type will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_type object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the productType object to update */
  id: Scalars['ID'];
  /** The name of the product_type object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdateProductType mutation */
export interface UpdateProductTypePayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_type */
  productType?: Maybe<ProductType>;
}

/** Input for the updateReview mutation */
export interface UpdateReviewInput {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** The ID of the review being updated. */
  id: Scalars['ID'];
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Product rating */
  rating: Scalars['Int'];
}

/** The payload for the updateReview mutation */
export interface UpdateReviewPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The product rating of the review that was created */
  rating?: Maybe<Scalars['Float']>;
  /** The product review that was created */
  review?: Maybe<Comment>;
}

/** Input for the updateSettings mutation */
export interface UpdateSettingsInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Tillåt att andra skickar in kommentarer på nya inlägg. */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Tillåt notiser om nya länkar från andra bloggar (pingback och trackback) för nya artiklar. */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Ett datumformat för alla strängar med datum. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Webbplatsslogan. */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Denna adress används för administrativa ändamål, såsom notifikation om ny användare. */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** Språkkod (locale) för WordPress. */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Numret på dagen i veckan som veckan ska börja på. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Ett tidsformat för alla strängar med klockslag. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** En ort i din tidszon. */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Webbplatsrubrik. */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Webbplats-URL. */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Bloggsidor visar högst. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Standardkategori för inlägg. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Standardformat för inlägg. */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Konvertera emotikon-symboler som :-) och :-P till riktiga emojier vid visning. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
}

/** The payload for the updateSettings mutation */
export interface UpdateSettingsPayload {
  /** Update all settings. */
  allSettings?: Maybe<Settings>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Update the discussion setting. */
  discussionSettings?: Maybe<DiscussionSettings>;
  /** Update the general setting. */
  generalSettings?: Maybe<GeneralSettings>;
  /** Update the reading setting. */
  readingSettings?: Maybe<ReadingSettings>;
  /** Update the writing setting. */
  writingSettings?: Maybe<WritingSettings>;
}

/** Input for the UpdateShippingClass mutation */
export interface UpdateShippingClassInput {
  /** The slug that the product_shipping_class will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_shipping_class object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the shippingClass object to update */
  id: Scalars['ID'];
  /** The name of the product_shipping_class object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdateShippingClass mutation */
export interface UpdateShippingClassPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_shipping_class */
  shippingClass?: Maybe<ShippingClass>;
}

/** Input for the updateShippingMethod mutation */
export interface UpdateShippingMethodInput {
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  shippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** The payload for the updateShippingMethod mutation */
export interface UpdateShippingMethodPayload {
  cart?: Maybe<Cart>;
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
}

/** Input for the UpdateTag mutation */
export interface UpdateTagInput {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the tag object to update */
  id: Scalars['ID'];
  /** The name of the post_tag object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdateTag mutation */
export interface UpdateTagPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created post_tag */
  tag?: Maybe<Tag>;
}

/** Input for the updateUser mutation */
export interface UpdateUserInput {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>;
  /**
   * A string that will be shown on the site. Defaults to user's username. It is
   * likely that you will want to change this, for both appearance and security
   * through obscurity (that is if you dont use and delete the default admin user).
   */
  displayName?: Maybe<Scalars['String']>;
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>;
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the user */
  id: Scalars['ID'];
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** User's locale. */
  locale?: Maybe<Scalars['String']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>;
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>;
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>;
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>;
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>;
}

/** The payload for the updateUser mutation */
export interface UpdateUserPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The User object mutation type. */
  user?: Maybe<User>;
}

/** Input for the UpdateVisibleProduct mutation */
export interface UpdateVisibleProductInput {
  /** The slug that the product_visibility will be an alias of */
  aliasOf?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The description of the product_visibility object */
  description?: Maybe<Scalars['String']>;
  /** The ID of the visibleProduct object to update */
  id: Scalars['ID'];
  /** The name of the product_visibility object to mutate */
  name?: Maybe<Scalars['String']>;
  /**
   * If this argument exists then the slug will be checked to see if it is not an
   * existing valid term. If that check succeeds (it is not a valid term), then it
   * is added and the term id is given. If it fails, then a check is made to
   * whether the taxonomy is hierarchical and the parent argument is not empty. If
   * the second check succeeds, the term will be inserted and the term id will be
   * given. If the slug argument is empty, then it will be calculated from the term
   */
  slug?: Maybe<Scalars['String']>;
}

/** The payload for the UpdateVisibleProduct mutation */
export interface UpdateVisibleProductPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The created product_visibility */
  visibleProduct?: Maybe<VisibleProduct>;
}

/** A User object */
export interface User extends Node, UniformResourceIdentifiable, Commenter, DatabaseIdentifier {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<Avatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<UserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /** Connection between the User type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
  /** Connection between the User type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
  /**
   * A complete list of capabilities including capabilities inherited from a role.
   * This is equivalent to the array keys of WP_User-&gt;allcaps.
   */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Connection between the User type and the mediaItem type */
  mediaItems?: Maybe<UserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<UserToPageConnection>;
  /** Connection between the User type and the post type */
  posts?: Maybe<UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User and Revisions authored by the user */
  revisions?: Maybe<UserToContentRevisionUnionConnection>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<UserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  userId?: Maybe<Scalars['Int']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
  /** A JWT token that can be used in future requests to for WooCommerce session identification */
  wooSessionToken?: Maybe<Scalars['String']>;
}


/** A User object */
export interface UserAvatarArgs {
  size?: Maybe<Scalars['Int']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<AvatarRatingEnum>;
}


/** A User object */
export interface UserCommentsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToCommentConnectionWhereArgs>;
}


/** A User object */
export interface UserEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A User object */
export interface UserEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A User object */
export interface UserMediaItemsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToMediaItemConnectionWhereArgs>;
}


/** A User object */
export interface UserPagesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPageConnectionWhereArgs>;
}


/** A User object */
export interface UserPostsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPostConnectionWhereArgs>;
}


/** A User object */
export interface UserRevisionsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
}


/** A User object */
export interface UserRolesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** A user role object */
export interface UserRole extends Node {
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
}

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Author = 'AUTHOR',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Customer = 'CUSTOMER',
  /** User role with specific capabilities */
  Editor = 'EDITOR',
  /** User role with specific capabilities */
  ShopManager = 'SHOP_MANAGER',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER'
}

/** Connection between the User type and the Comment type */
export interface UserToCommentConnection {
  /** Edges for the UserToCommentConnection connection */
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Comment>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToCommentConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Comment>;
}

/** Arguments for filtering the UserToCommentConnection connection */
export interface UserToCommentConnectionWhereArgs {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>;
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>;
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>;
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId?: Maybe<Scalars['ID']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  /**
   * Array of IDs or email addresses of users whose unapproved comments will be
   * returned by the query regardless of $status. Default empty
   */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>;
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>;
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>;
}

/** Connection between the User type and the ContentRevisionUnion type */
export interface UserToContentRevisionUnionConnection {
  /** Edges for the UserToContentRevisionUnionConnection connection */
  edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToContentRevisionUnionConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentRevisionUnion>;
}

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export interface UserToContentRevisionUnionConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the User type and the EnqueuedScript type */
export interface UserToEnqueuedScriptConnection {
  /** Edges for the UserToEnqueuedScriptConnection connection */
  edges?: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToEnqueuedScriptConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedScript>;
}

/** Connection between the User type and the EnqueuedStylesheet type */
export interface UserToEnqueuedStylesheetConnection {
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  edges?: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToEnqueuedStylesheetConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<EnqueuedStylesheet>;
}

/** Connection between the User type and the mediaItem type */
export interface UserToMediaItemConnection {
  /** Edges for the UserToMediaItemConnection connection */
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToMediaItemConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<MediaItem>;
}

/** Arguments for filtering the UserToMediaItemConnection connection */
export interface UserToMediaItemConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the User type and the page type */
export interface UserToPageConnection {
  /** Edges for the UserToPageConnection connection */
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Page>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToPageConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Page>;
}

/** Arguments for filtering the UserToPageConnection connection */
export interface UserToPageConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the User type and the post type */
export interface UserToPostConnection {
  /** Edges for the UserToPostConnection connection */
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Post>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToPostConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Post>;
}

/** Arguments for filtering the UserToPostConnection connection */
export interface UserToPostConnectionWhereArgs {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>;
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the User type and the UserRole type */
export interface UserToUserRoleConnection {
  /** Edges for the UserToUserRoleConnection connection */
  edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface UserToUserRoleConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<UserRole>;
}

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Options for ordering the connection */
export interface UsersConnectionOrderbyInput {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>;
}

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user\s website. */
  Url = 'URL'
}

/** A variable product object */
export interface VariableProduct extends Node, Product, NodeWithComments, NodeWithContentEditor, NodeWithFeaturedImage, ContentNode, UniformResourceIdentifiable {
  /** Connection between the Product type and the ProductAttribute type */
  attributes?: Maybe<ProductToProductAttributeConnection>;
  /** Product average count */
  averageRating?: Maybe<Scalars['Float']>;
  /** Product backorders status */
  backorders?: Maybe<BackordersEnum>;
  /** Can product be backordered? */
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  /** Catalog visibility */
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  /**
   * The number of comments. Even though WPGraphQL denotes this field as an
   * integer, in WordPress this field should be saved as a numeric string for
   */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** Connection between the VariableProduct type and the Product type */
  crossSell?: Maybe<VariableProductToProductConnection>;
  /** The ID of the product in the database */
  databaseId: Scalars['Int'];
  /** Date product created */
  date?: Maybe<Scalars['String']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>;
  /** Date on sale from */
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  /** Date on sale to */
  dateOnSaleTo?: Maybe<Scalars['String']>;
  /** Connection between the VariableProduct type and the VariationAttribute type */
  defaultAttributes?: Maybe<VariableProductToVariationAttributeConnection>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /**
   * If a user has edited the node within the past 15 seconds, this will return the
   * user that last edited. Null if the edit lock doesn&#039;t exist or is greater
   * than 15 seconds
   */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** If the product is featured */
  featured?: Maybe<Scalars['Boolean']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** Connection between the Product type and the MediaItem type */
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  /** Connection between the Product type and the GlobalProductAttribute type */
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  /**
   * The global unique identifier for this post. This currently matches the value
   * stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot;
   * database table.
   */
  guid?: Maybe<Scalars['String']>;
  /** Product&#039;s height */
  height?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the product */
  id: Scalars['ID'];
  /** Main image */
  image?: Maybe<MediaItem>;
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** Product&#039;s length */
  length?: Maybe<Scalars['String']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the LocalProductAttribute type */
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  /** If product manage stock */
  manageStock?: Maybe<Scalars['Boolean']>;
  /** Menu order */
  menuOrder?: Maybe<Scalars['Int']>;
  /** Object meta data */
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  /** Date product last updated */
  modified?: Maybe<Scalars['String']>;
  /**
   * The GMT modified time for a post. If a post was recently updated the modified
   * field will change to match the corresponding time in GMT.
   */
  modifiedGmt?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Is product on sale? */
  onSale?: Maybe<Scalars['Boolean']>;
  /** Parent product */
  parent?: Maybe<Product>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']>;
  /** Product&#039;s active price */
  price?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the productCategory type */
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  /** Connection between the Product type and the productTag type */
  productTags?: Maybe<ProductToProductTagConnection>;
  /** Connection between the Product type and the productType type */
  productTypes?: Maybe<ProductToProductTypeConnection>;
  /** Can product be purchased? */
  purchasable?: Maybe<Scalars['Boolean']>;
  /** Purchase note */
  purchaseNote?: Maybe<Scalars['String']>;
  /** Product&#039;s regular price */
  regularPrice?: Maybe<Scalars['String']>;
  /** Connection between the Product type and the Product type */
  related?: Maybe<ProductToProductConnection>;
  /** Product review count */
  reviewCount?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the Comment type */
  reviews?: Maybe<ProductToCommentConnection>;
  /** If reviews are allowed */
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  /** Product&#039;s sale price */
  salePrice?: Maybe<Scalars['String']>;
  /** shipping class ID */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Connection between the Product type and the shippingClass type */
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  /** Does product need to be shipped? */
  shippingRequired?: Maybe<Scalars['Boolean']>;
  /** Is product shipping taxable? */
  shippingTaxable?: Maybe<Scalars['Boolean']>;
  /** Product short description */
  shortDescription?: Maybe<Scalars['String']>;
  /** Product SKU */
  sku?: Maybe<Scalars['String']>;
  /** Product slug */
  slug?: Maybe<Scalars['String']>;
  /** If should be sold individually */
  soldIndividually?: Maybe<Scalars['Boolean']>;
  /** Product status */
  status?: Maybe<Scalars['String']>;
  /** Number of items available for sale */
  stockQuantity?: Maybe<Scalars['Int']>;
  /** Product stock status */
  stockStatus?: Maybe<StockStatusEnum>;
  /** Tax class */
  taxClass?: Maybe<TaxClassEnum>;
  /** Tax status */
  taxStatus?: Maybe<TaxStatusEnum>;
  /** The template assigned to a node of content */
  template?: Maybe<ContentTemplate>;
  /** Number total of sales */
  totalSales?: Maybe<Scalars['Int']>;
  /** Product type */
  type?: Maybe<ProductTypesEnum>;
  /** Connection between the Product type and the Product type */
  upsell?: Maybe<ProductToUpsellConnection>;
  /** URI path for the resource */
  uri: Scalars['String'];
  /** Connection between the VariableProduct type and the ProductVariation type */
  variations?: Maybe<VariableProductToProductVariationConnection>;
  /** Connection between the Product type and the visibleProduct type */
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
  /** Product&#039;s weight */
  weight?: Maybe<Scalars['String']>;
  /** Product&#039;s width */
  width?: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductContentArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductCrossSellArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VariableProductToProductConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductDefaultAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** A variable product object */
export interface VariableProductGalleryImagesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductGlobalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductLocalAttributesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductMetaDataArgs {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
}


/** A variable product object */
export interface VariableProductPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductProductCategoriesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductProductTagsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductProductTypesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductRegularPriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductRelatedArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductReviewsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductSalePriceArgs {
  format?: Maybe<PricingFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductShippingClassesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductShortDescriptionArgs {
  format?: Maybe<PostObjectFieldFormatEnum>;
}


/** A variable product object */
export interface VariableProductUpsellArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductVariationsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VariableProductToProductVariationConnectionWhereArgs>;
}


/** A variable product object */
export interface VariableProductVisibleProductsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
}

/** Connection between the VariableProduct type and the Product type */
export interface VariableProductToProductConnection {
  /** Edges for the VariableProductToProductConnection connection */
  edges?: Maybe<Array<Maybe<VariableProductToProductConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<Product>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VariableProductToProductConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<Product>;
}

/** Arguments for filtering the VariableProductToProductConnection connection */
export interface VariableProductToProductConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the VariableProduct type and the ProductVariation type */
export interface VariableProductToProductVariationConnection {
  /** Edges for the VariableProductToProductVariationConnection connection */
  edges?: Maybe<Array<Maybe<VariableProductToProductVariationConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ProductVariation>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VariableProductToProductVariationConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ProductVariation>;
}

/** Arguments for filtering the VariableProductToProductVariationConnection connection */
export interface VariableProductToProductVariationConnectionWhereArgs {
  /** Limit result set to products with a specific attribute. Use the taxonomy name/attribute slug. */
  attribute?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific attribute term ID (required an assigned attribute). */
  attributeTerm?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  category?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific category name. */
  categoryId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of category IDs. */
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of category IDs. */
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a group of specific categories by name. */
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a group of specific categories by name. */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Filter the connection based on dates. */
  dateQuery?: Maybe<DateQueryInput>;
  /** Ensure result set excludes specific IDs. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to featured products. */
  featured?: Maybe<Scalars['Boolean']>;
  /** Limit result set to specific ids. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a maximum price. */
  maxPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products based on a minimum price. */
  minPrice?: Maybe<Scalars['Float']>;
  /** Limit result set to products on sale. */
  onSale?: Maybe<Scalars['Boolean']>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items. */
  parent?: Maybe<Scalars['Int']>;
  /** Specify objects whose parent is in an array. */
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Specify objects whose parent is not in an array. */
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products based on a keyword search. */
  search?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific shipping class ID. */
  shippingClassId?: Maybe<Scalars['Int']>;
  /** Limit result set to products with specific SKU(s). Use commas to separate. */
  sku?: Maybe<Scalars['String']>;
  /** Limit result set to products with a specific slug. */
  slug?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific status. */
  status?: Maybe<Scalars['String']>;
  /** Limit result set to products in stock or out of stock. */
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  /** Limit result types to types supported by WooGraphQL. */
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  /** Limit result set to products assigned a specific tag name. */
  tag?: Maybe<Scalars['String']>;
  /** Limit result set to products assigned a specific tag ID. */
  tagId?: Maybe<Scalars['Int']>;
  /** Limit result set to products assigned to a specific group of tag IDs. */
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products not assigned to a specific group of tag IDs. */
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** Limit result set to products assigned to a specific group of tags by name. */
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set to products not assigned to a specific group of tags by name. */
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Limit result set with complex set of taxonomy filters. */
  taxonomyFilter?: Maybe<Array<Maybe<ProductTaxonomyFilterRelationInput>>>;
  /** Limit result set to products assigned a specific type. */
  type?: Maybe<ProductTypesEnum>;
  /** Limit result set to products assigned to a group of specific types. */
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products not assigned to a group of specific types. */
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  /** Limit result set to products with a specific visibility level. */
  visibility?: Maybe<CatalogVisibilityEnum>;
}

/** Connection between the VariableProduct type and the VariationAttribute type */
export interface VariableProductToVariationAttributeConnection {
  /** Edges for the VariableProductToVariationAttributeConnection connection */
  edges?: Maybe<Array<Maybe<VariableProductToVariationAttributeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VariableProductToVariationAttributeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<VariationAttribute>;
}

/** A product variation attribute object */
export interface VariationAttribute {
  /** The Database ID of the attribute. */
  attributeId?: Maybe<Scalars['Int']>;
  /** The Global ID of the attribute. */
  id: Scalars['ID'];
  /** Label of attribute */
  label?: Maybe<Scalars['String']>;
  /** Name of attribute */
  name?: Maybe<Scalars['String']>;
  /** Selected value of attribute */
  value?: Maybe<Scalars['String']>;
}

/** The visibleProduct type */
export interface VisibleProduct extends Node, TermNode, DatabaseIdentifier {
  /** Connection between the visibleProduct type and the ContentNode type */
  contentNodes?: Maybe<VisibleProductToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID'];
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>;
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the visibleProduct type and the Taxonomy type */
  taxonomy?: Maybe<VisibleProductToTaxonomyConnectionEdge>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri: Scalars['String'];
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  visibleProductId?: Maybe<Scalars['Int']>;
}


/** The visibleProduct type */
export interface VisibleProductContentNodesArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VisibleProductToContentNodeConnectionWhereArgs>;
}


/** The visibleProduct type */
export interface VisibleProductEnqueuedScriptsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}


/** The visibleProduct type */
export interface VisibleProductEnqueuedStylesheetsArgs {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum VisibleProductIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the visibleProduct type and the ContentNode type */
export interface VisibleProductToContentNodeConnection {
  /** Edges for the VisibleProductToContentNodeConnection connection */
  edges?: Maybe<Array<Maybe<VisibleProductToContentNodeConnectionEdge>>>;
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  /** Information about pagination in a connection. */
  pageInfo?: Maybe<WpPageInfo>;
}

/** An edge in a connection */
export interface VisibleProductToContentNodeConnectionEdge {
  /** A cursor for use in pagination */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge */
  node?: Maybe<ContentNode>;
}

/** Arguments for filtering the VisibleProductToContentNodeConnection connection */
export interface VisibleProductToContentNodeConnectionWhereArgs {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>;
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>;
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['ID']>;
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>;
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>;
  /** Retrieve posts where post status is in an array. */
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status?: Maybe<PostStatusEnum>;
  /** Title of the object */
  title?: Maybe<Scalars['String']>;
}

/** Connection between the visibleProduct type and the Taxonomy type */
export interface VisibleProductToTaxonomyConnectionEdge {
  /** The nodes of the connection, without the edges */
  node?: Maybe<Taxonomy>;
}

/** Information about pagination in a connection. */
export interface WpPageInfo {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
}

/** Input for the writeReview mutation */
export interface WriteReviewInput {
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>;
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>;
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>;
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>;
  /**
   * This is an ID that can be passed to a mutation by the client to track the
   * progress of mutations and catch possible duplicate mutation submissions.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>;
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>;
  /**
   * The date of the object. Preferable to enter as year/month/day ( e.g.
   * 01/31/2017 ) as it will rearrange date as fit if it is not specified.
   * Incomplete dates may have unintended results for example, "2017" as the input
   * will use current date with timestamp 20:17
   */
  date?: Maybe<Scalars['String']>;
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>;
  /** Product rating */
  rating: Scalars['Int'];
}

/** The payload for the writeReview mutation */
export interface WriteReviewPayload {
  /**
   * If a &#039;clientMutationId&#039; input is provided to the mutation, it will
   * be returned as output on the mutation. This ID can be used by the client to
   * track the progress of mutations and catch possible duplicate mutation
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The product rating of the review that was created */
  rating?: Maybe<Scalars['Float']>;
  /** The product review that was created */
  review?: Maybe<Comment>;
}

/** The writing setting type */
export interface WritingSettings {
  /** Standardkategori för inlägg. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Standardformat för inlägg. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Konvertera emotikon-symboler som :-) och :-P till riktiga emojier vid visning. */
  useSmilies?: Maybe<Scalars['Boolean']>;
}
