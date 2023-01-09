<template>
  <div id="product">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="product">
      <LazyHydrate when-idle>
        <SfLoader
          :class="{ 'product__loading-gallery': productLoading }"
          :loading="productLoading"
        >
          <SfGallery :images="productGallery" class="product__gallery" />
        </SfLoader>
      </LazyHydrate>

      <div class="product__info">
        <div class="product__header">
          <SfLoader
            :class="{ 'product__loading-header': productLoading }"
            :loading="productLoading"
          >
            <SfHeading
              :title="productGetters.getName(product)"
              :level="3"
              class="sf-heading--no-underline sf-heading--left"
            />
          </SfLoader>
          <SfIcon
            icon="drag"
            size="xxl"
            color="var(--c-text-disabled)"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div class="product__price-and-rating">
          <SfPrice
            :regular="$n(productGetters.getPrice(product).regular, 'currency')"
            :special="
              productGetters.getPrice(product).special &&
              $n(productGetters.getPrice(product).special, 'currency')
            "
          />
        </div>
        <div>
          <p
            class="product__description desktop-only"
            v-html="productGetters.getDescription(product)"
          ></p>
          <div v-for="(option, att) in options" :key="option.id">
            <div
              v-if="
                (att === 'pa_colour' ||
                  (att === 'pa_color') |
                    (att === 'color') |
                    (att === 'colour')) &&
                option.length > 1
              "
              class="product__colors desktop-only"
            >
              <p class="product__color-label">{{ $t('Color') }}:</p>
              <SfColor
                v-for="(color, i) in option"
                :key="i"
                :color="color"
                :selected="
                  selectedOptions.filters.pa_color == color ||
                  selectedOptions.filters.pa_colour == color
                "
                class="product__color"
                @click="updateFilter({ [att]: color })"
              />
            </div>
            <SfSelect
              v-else
              v-e2e="'size-select'"
              :value="selectedOptions.filters[att]"
              @input="(size) => updateFilter({ [att]: size })"
              :label="
                att.replace('pa_', '').replace(/^\w/, (c) => c.toUpperCase())
              "
              class="sf-select--underlined product__select-size"
              :required="true"
            >
              <SfSelectOption v-for="size in option" :key="size" :value="size">
                {{ size }}
              </SfSelectOption>
            </SfSelect>
          </div>
          <SfAddToCart
            v-e2e="'product_add-to-cart'"
            :stock="0"
            v-model="qty"
            :disabled="loading || !(product && product.inStock) || !isSimple"
            class="product__add-to-cart"
            @click="add({ id: product.id, quantity: parseInt(qty) })"
          />
        </div>

        <LazyHydrate when-idle>
          <SfTabs :open-tab="1" class="product__tabs">
            <SfTab title="Description">
              <div
                class="product__description"
                v-html="productGetters.getDescription(product)"
              ></div>
              <SfProperty
                v-for="(property, i) in properties"
                :key="i"
                :name="property.name"
                :value="property.value"
                class="product__property"
              >
                <template v-if="property.name === 'Category'" #value>
                  <SfButton class="product__property__button sf-button--text">
                    {{ property.value }}
                  </SfButton>
                </template>
              </SfProperty>
            </SfTab>
            <SfTab
              title="Additional Information"
              class="product__additional-info"
            >
              <div class="product__additional-info">
                <p class="product__additional-info__title">{{ $t('Brand') }}</p>
                <p>{{ brand }}</p>
                <p class="product__additional-info__title">
                  {{ $t('Instruction1') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction2') }}
                </p>
                <p class="product__additional-info__paragraph">
                  {{ $t('Instruction3') }}
                </p>
                <p>{{ careInstructions }}</p>
              </div>
            </SfTab>
          </SfTabs>
        </LazyHydrate>
      </div>
    </div>
  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfImage,
  SfBanner,
  SfAlert,
  SfSticky,
  SfReview,
  SfBreadcrumbs,
  SfButton,
  SfColor,
  SfLoader
} from '@storefront-ui/vue';

import InstagramFeed from '~/components/InstagramFeed.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';
import { ref, computed, useRoute, useAsync } from '@nuxtjs/composition-api';
import { productGetters } from '@vue-storefront/woocommerce';
import { useProduct } from '~/composables';
import { useUiHelpers } from '~/composables';
import { useCart } from '~/composables';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  name: 'Product',
  transition: 'fade',
  setup() {
    const qty = ref(1);
    const route = useRoute();
    const id = route.value.params.id;
    const {
      singleProduct,
      getProductSingle: search,
      loading: productLoading
    } = useProduct(id);
    const { changeFilters, getFacetsFromURL } = useUiHelpers();
    const { add, loading } = useCart();

    const selectedOptions = ref(getFacetsFromURL());

    const product = computed(() => {
      let product = productGetters.getSingleProduct(singleProduct.value);
      let variant = null;

      if (
        product?.variants &&
        product.variants.length > 0 &&
        Object.keys(selectedOptions?.value?.filters || {}).length > 0
      ) {
        variant = product.variants.find((variant) => {
          return Object.entries(variant.attributes).every(([key, value]) => {
            return Object.entries(selectedOptions.value.filters).some(
              ([attKey, attValue]) => {
                return attKey === key && attValue === value;
              }
            );
          });
        });
      }

      if (variant) {
        product = variant;
      }

      return product;
    });

    const isSimple = computed(
      () => (product?.value?.variants || []).length === 0
    );

    const breadcrumbs = computed(() =>
      productGetters.getProductBreadcrumbs(
        productGetters.getSingleProduct(singleProduct.value)
      )
    );

    const options = computed(() =>
      productGetters.getFilteredAttributes(
        productGetters.getSingleProduct(singleProduct.value),
        selectedOptions?.value?.filters
      )
    );

    const productGallery = computed(() =>
      productGetters
        .getGallery(productGetters.getSingleProduct(singleProduct.value))
        ?.map((img) => ({
          mobile: { url: img },
          desktop: { url: img },
          big: { url: img },
          alt: 'gallery image'
        }))
    );

    useAsync(() => {
      search({ id: id });
    });

    const updateFilter = (filter) => {
      changeFilters(filter);
    };

    return {
      updateFilter,
      product,
      options,
      qty,
      add,
      loading,
      productGetters,
      productGallery,
      productLoading,
      selectedOptions,
      breadcrumbs,
      isSimple
    };
  },
  components: {
    SfAlert,
    SfColor,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfSticky,
    SfReview,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    LazyHydrate,
    SfLoader
  },
  data() {
    return {
      stock: 5,
      properties: [
        {
          name: 'Product Code',
          value: '578902-00'
        },
        {
          name: 'Category',
          value: 'Pants'
        },
        {
          name: 'Material',
          value: 'Cotton'
        },
        {
          name: 'Country',
          value: 'Germany'
        }
      ],
      description:
        'Find stunning women cocktail and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.',
      detailsIsActive: false,
      brand:
        'Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.',
      careInstructions: 'Do not wash!'
    };
  }
};
</script>

<style lang="scss" scoped>
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
      margin-top: var(--spacer-xl);
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
    box-shadow: var(
      --color-box-shadow,
      var(--color-box-shadow-h-offset, 0px)
        var(--color-box-shadow-v-offset, 0.2px)
        var(--color-box-shadow-blur, 6px) var(--color-box-shadow-spread, 0px)
        var(--color-box-shadow-color, var(--c-black))
    );
  }
  &__add-to-cart {
    margin: var(--spacer-base) var(--spacer-sm) 0;
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    --tabs-title-z-index: 0;
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
