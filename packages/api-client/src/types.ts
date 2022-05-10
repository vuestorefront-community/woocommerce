export type TODO = unknown;

export type Setttings = TODO;

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = TODO;

export type CartItem = TODO;

export type Category = TODO;

export type Coupon = TODO;

export type Facet = TODO;

export type FacetSearchCriteria = TODO;

export type Order = TODO;

export type OrderItem = TODO;

export type PasswordResetResult = TODO;

export type Product = {
    id: number,
    type: string,
    title: string,
    description: string,
    slug: string,
    price: {
        original: string,
        current: string
    },
    sku: string,
    sales: number,
    inStock: boolean,
    coverImage: string,
    parent: number,
    featured: boolean,
    categories: Array<string>,
    images: Array<string>,
    attributes: Array<Record<string, string>>,
    variants: Array<Product>
};

export type ProductFilter = TODO;

export type Review = TODO;

export type ReviewItem = TODO;

export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Store = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;
