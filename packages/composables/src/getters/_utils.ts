import { AgnosticAttribute } from '@vue-storefront/core';
import type { Product } from '@vue-storefront/woocommerce-api';

export const getAttributeValue = (attribute) => {

  /**
   * List of attribute types: https://docs.commercetools.com/api/projects/productTypes#attributetype
   */
  switch (attribute.attributeDefinition.type.name) {
    case 'text':
    case 'ltext':
    case 'boolean':
    case 'number':
    case 'date':
    case 'time':
    case 'datetime':
    case 'money':
    case 'set':
      return attribute.value;

    case 'lenum':
    case 'enum':
      return attribute.value.key;

    case 'reference':
      return { typeId: attribute.value.typeId, id: attribute.value.id };

    default:
      return null;
  }
};

export const formatAttributeList = (attributes: Array<any>): AgnosticAttribute[] =>
  attributes.map((attr) => {
    const attrValue = getAttributeValue(attr);
    return {
      name: attr.name,
      value: attrValue,
      label: attr._translated
    };
  });

export const getVariantByAttributes = (products: Product[], attributes: any): Product => {
  console.log('Todo: return filtered product variant' + attributes);
  return products[0];
};
