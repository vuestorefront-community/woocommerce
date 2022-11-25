import { apiClientFactory } from '@vue-storefront/core';
import axios from 'axios';

import { getProduct } from './api/getProduct';
import { getProductSingle } from './api/getProductSingle';
import { getProductsPaginated } from './api/getProductsPaginated';
import { getCategory } from './api/getCategory';
import { getFacet } from './api/getFacet';
import { postRegister } from './api/postRegister';
import { postToken } from './api/postToken';
import { getCart } from './api/getCart';
import { postCart } from './api/postCart';
import { getBillingAddress } from './api/getBillingAddress';
import { postBillingAddress } from './api/postBillingAddress';
import { getShippingAddress } from './api/getShippingAddress';
import { postShippingAddress } from './api/postShippingAddress';
import { getPaymentMethod } from './api/getPaymentMethod';
import { postOrder } from './api/postOrder';
import { getOrder } from './api/getOrder';

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
    getFacet,
    postRegister,
    postToken,
    getCart,
    postCart,
    getBillingAddress,
    postBillingAddress,
    getShippingAddress,
    postShippingAddress,
    getPaymentMethod,
    postOrder,
    getOrder
  }
});

export { createApiClient };
