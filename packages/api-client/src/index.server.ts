import { apiClientFactory } from '@vue-storefront/core';
import axios from 'axios';

import { getProduct } from './api/getProduct';
import { getProductSingle } from './api/getProductSingle';
import { getProductsPaginated } from './api/getProductsPaginated';
import { getCategory } from './api/getCategory';
import { getFacet } from './api/getFacet';

function onCreate(settings) {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client: client
  };
}

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: {
    getProduct,
    getProductSingle,
    getProductsPaginated,
    getCategory,
    getFacet
  }
});

export {
  createApiClient
};
