<template>
  <div>
    <SfRadio
      v-e2e="'payment-method'"
      v-for="method in paymentMethods"
      :key="method.id"
      :label="method.title"
      :value="method.id"
      :description="method.description"
      :selected="selectedMethod"
      name="shippingMethod"
      class="form__radio shipping"
      @change="selectMethod(method.id)"
    >
      <div class="shipping__label">
        {{ method.title }}
      </div>
    </SfRadio>
  </div>
</template>

<script>
import { SfButton, SfRadio } from '@storefront-ui/vue';
import { usePaymentMethod } from '~/composables';
import { ref, useAsync } from '@nuxtjs/composition-api';

export default {
  name: 'VsfPaymentProvider',

  components: {
    SfButton,
    SfRadio
  },

  setup(props, { emit }) {
    const { methods, get } = usePaymentMethod();
    const selectedMethod = ref(null);

    const selectMethod = (method) => {
      selectedMethod.value = method;
      emit('status', method);
    };

    useAsync(() => {
      get();
    });

    return {
      paymentMethods: methods,
      selectedMethod,
      selectMethod
    };
  }
};
</script>

<style lang="scss" scoped>
.shipping {
  &__label {
    display: flex;
    justify-content: space-between;
  }

  &__description {
    --radio-description-margin: 0;
    --radio-description-font-size: var(--font-xs);
  }
}
</style>
