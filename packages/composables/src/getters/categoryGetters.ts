import { CategoryGetters, AgnosticCategoryTree } from '../types';

import type { Category } from '@vue-storefront/woocommerce-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTree(categories: Category[], currentCategory: string): AgnosticCategoryTree {

  // Build hashtable used to construct category tree
  const hashTable = Object.create(null);
  categories.forEach(category => hashTable[category.id] = {
    label: category.title,
    slug: category.slug,
    slugPath: category.category_slug_path,
    items: [],
    isCurrent: category.category_slug_path === currentCategory,
    count: category.count
  });

  // Construct category tree
  const categoryTree = [];
  categories.forEach(category => {
    if (category.parent_id && hashTable[category.parent_id]) {
      hashTable[category.parent_id].items.push(hashTable[category.id]);
    } else {
      categoryTree.push(hashTable[category.id]);
    }
  });

  // The tree root that will be returned
  let categoryTreeRoot = {
    label: '',
    slug: '',
    slugPath: '',
    items: categoryTree,
    isCurrent: false
  };

  const path = currentCategory.split('/').filter((item) => Boolean(item));

  // Calculate what the root of the tree should be.
  // The root should be the parent node of the currently selected category
  // so that the current category is a dropdown in the list.
  // The root shoud be higher than the parent if the currently displayed categories
  // have no children, i.e. we cannot go deeper so that there is always useful information.
  path.every((slug) => {
    for (let i = 0; i < categoryTreeRoot.items.length; i++) {
      if (categoryTreeRoot.items[i].slug === `${slug}/` || categoryTreeRoot.items[i].slug === slug) {

        const previousTree = categoryTreeRoot;

        categoryTreeRoot = categoryTreeRoot.items[i];

        // If the currently selected root's child is the selected category, but it has no children
        // then the root should be higher up.
        if (categoryTreeRoot.items.every((item) => item?.items?.length === 0) && previousTree.label) {
          categoryTreeRoot = previousTree;
        }

        if (categoryTreeRoot.items.some((item) => item.slugPath === currentCategory)) {
          return false;
        }
      }
    }

    return true;
  });

  return categoryTreeRoot;
}

function getName(category: Category): string {
  return category?.title || 'No Name';
}

function getSlug(category: Category): string {
  return category?.slug || '';
}

function getParentCategories(categories: Category[]): Category[] {
  return categories.filter(cat => cat.parent_id === 0);
}

function getCategoryBreadcrumbs(slugPath: string): any {
  const breadcrumbs = [];
  let path = '/c';

  slugPath.split('/').filter((slug) => Boolean(slug)).forEach((slug) => {
    path = `${path}/${slug}`;
    breadcrumbs.push({
      text: slug.toUpperCase(),
      link: path
    });
  });

  return breadcrumbs;
}

export const categoryGetters: CategoryGetters<Category> = {
  getTree,
  getName,
  getSlug,
  getParentCategories,
  getCategoryBreadcrumbs
};
