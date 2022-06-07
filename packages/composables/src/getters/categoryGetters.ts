import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import type { Category } from '@vue-storefront/woocommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTree(category: Category): AgnosticCategoryTree {
  return {
    label: '',
    slug: '',
    items: [],
    isCurrent: false
  };
}

function getName(category: Category): string {
  return category?.title || 'No Name'
}

function getSlug(category: Category): string {
  return category?.slug || ''
}

function getParentCategories(categories: Category[]): Category[] {
  return categories.filter(cat => cat.parent_id == 0)
}

export const categoryGetters: CategoryGetters<Category> = {
  getTree,
  getName,
  getSlug,
  getParentCategories
};
