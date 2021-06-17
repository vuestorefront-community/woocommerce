import gql from 'graphql-tag';

export const PRODUCT_BY_CATEGORY_SLUG = gql` query PRODUCT_BY_CATEGORY_SLUG($slug: ID!) {
	productCategory(id: $slug, idType: SLUG) {
	  id
	  name
	  products(first: 50) {
		nodes {
		  id
		  sku
		  averageRating
		  slug
		  description
		  image {
			id
			uri
			title
			srcSet
			sourceUrl
		  }
		  name
		  ... on SimpleProduct {
			price
			regularPrice
			id
		  }
		  ... on VariableProduct {
			price
			regularPrice
			id
		  }
		  ... on ExternalProduct {
			price
			id
			regularPrice
			externalUrl
		  }
		  ... on GroupProduct {
			products {
			  nodes {
				... on SimpleProduct {
				  id
				  regularPrice
				  price
				}
			  }
			}
			id
		  }
		}
	  }
	}
  }
  `;

export const PRODUCT_CATEGORIES_SLUGS = gql` query PRODUCT_CATEGORIES_SLUGS {
    productCategories {
    nodes {
      id
      slug
    }
  }
}`;

export const PRODUCT_QUERY = gql`query PRODUCT_QUERY($first: Int, $after: String) {
    products(first: $first, after: $after, where: { supportedTypesOnly: true }) {
        edges {
            cursor
            node {
                databaseId
                id
                sku
                averageRating
                slug
                description
                image {
                  id
                  uri
                  title
                  srcSet
                  sourceUrl
                }
                name
                ... on SimpleProduct {
                  price
                  regularPrice
                  id
                }
                ... on VariableProduct {
                  price
                  regularPrice
                  id
                }
                ... on ExternalProduct {
                  price
                  id
                  regularPrice
                  externalUrl
                }
                ... on GroupProduct {
                  products {
                    nodes {
                      ... on SimpleProduct {
                        id
                        regularPrice
                        price
                      }
                    }
                  }
                }
            }
        }
    }
}`;
