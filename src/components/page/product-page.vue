<template>
  <div class="product">
    <BannerPBC />
    <ProductList />
    <ProductSuggestions />
  </div>
</template>

<script>
import BannerPBC from "../common/banner-pbc.vue";
import ProductList from "../content-page/product/product-list.vue";
import ProductSuggestions from "../content-page/product/product-suggestions.vue";
export default {
  name: "Product",
  components: {
    BannerPBC,
    ProductList,
    ProductSuggestions,
  },
};
</script>

<style scoped>
</style>
