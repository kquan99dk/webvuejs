<template>
  <div class="container container-bestseller">
    <div class="container-bestseller-title">
      <h2>BESTSELLER</h2>
      <p>Top seller in the week</p>
    </div>
    <div class="container-bestseller-product">
      <ProductItem
        class="productitem"
        v-for="(product, index) in listProductPage"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "../../common/product-item.vue";
export default {
  name: "HomeListbestseller",
  data() {
    return {
      listProductPage:[]
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    listProduct() {
      return this.$store.state.listProduct
    }
  },
  methods: {
  },
  mounted(){
      for(var i = 0; i <= 7; i++){
        this.listProductPage.push(this.listProduct[i])
      }
  }
};
</script>

<style scoped>
.container-bestseller {
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 100px;
}

.container-bestseller-title {
  height: 60px;
  margin-bottom: 30px;
}

.container-bestseller-product {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (min-width: 768px) and (max-width: 991px) {
  .container-bestseller-product {
    justify-content: space-around;
  }
}
</style>
