export const CartFragment = `
  fragment DefaultCart on Cart {
    contents {
      itemCount
      nodes {
        key
        product {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
          }
        }
        variation {
          node {
            id
            databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
          }
          attributes {
            id
            name
            value
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
    appliedCoupons {
        code
        discountAmount
        discountTax
    }
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
  }
`;
