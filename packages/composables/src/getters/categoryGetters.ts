import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category, ProductCategories } from '@vue-storefront/woocommerce-api/';

const itemToTree = (category: Category): AgnosticCategoryTree => {
  return {
    label: category.name,
    slug: category.slug,
    items: category.items.map(itemToTree),
    isCurrent: false
  };
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCategoryTree = (category: Category): AgnosticCategoryTree => {
  if (!category) {
    return null;
  }
  console.log('categoryGetters.ts', category, itemToTree(category));
  return itemToTree(category);

  // return {} as AgnosticCategoryTree;
};

export const getRootCategories = (productCategories: ProductCategories): AgnosticCategoryTree => {
  if (!productCategories) {
    console.log('categories null', productCategories);
    return null;
  }
  console.log('product', productCategories.edges);
  
  const rootCategories = productCategories?.edges?.filter((category) => (category as Category)?.node?.parent === null);
  console.log('root', rootCategories);
  const mainCategories = rootCategories.map(category => ({
    name: (category as Category)?.name,
    link: (category as Category)?.slug
  }));

  return mainCategories;
};

const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree,
  getRootCategories
};

export default categoryGetters;
