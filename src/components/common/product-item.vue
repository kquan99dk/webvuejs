<template>
  <div class="productitem">
    <div class="productitem-photo">
      <img :src="product.img" alt="product" />
    </div>
    <div class="productitem-content">
      <h3>{{ product.name }}</h3>
      <p>{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price) }}</p>
      <button type="button" @click="addCart(product.id)">Add To Card</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      newProduct: {},
    }
  },
  computed: {
    listProduct() {
      return this.$store.state.listProduct
    },
  },
  methods: {
    addCart(id){
      const product = this.listProduct.find(x => x.id == id)
      this.newProduct={
         id: product.id,
         name: product.name,
         img: product.img,
         price: product.price,
         star: product.star,
         variation: product.variation,
         quantity:1,
      }
      this.$store.dispatch('handleAddListCart', this.newProduct)
    }
  },
};
</script>

<style scoped>
.productitem {
  height: 380px;
  width: 250px;
  margin-bottom: 40px;
  box-shadow: 0px 2px 10px 2px #888888;
}
.productitem-photo {
  width: 100%;
  height: 250px;
  overflow: hidden;
}
.productitem-photo img {
  width: 100%;
  height: 100%;
}
.productitem-photo img:hover {
  width: 108%;
  height: 108%;
  object-position: -10px -10px;
  transition: 1s ease;
}
.productitem-content {
  width: 100%;
  height: 130px;
  padding: 20px 0 0 0;
}
.productitem-content p {
  margin-top: 5px;
  color: rgb(87, 82, 82);
}
.productitem-content button {
  cursor: pointer;
  margin-top: 15px;
  height: 35px;
  width: 130px;
  border: none;
  border-radius: 5px;
  background-color: rgb(119, 168, 165);
  outline: none;
}
.productitem-content button:hover {
  background-color: rgb(53, 139, 134);
  color: rgb(255, 255, 255);
  transition: 0.5s ease;
}

@media (max-width: 575px) {
  .productitem {
    height: 400px;
    width: 90%;
    margin: auto;
    margin-bottom: 40px;
    box-shadow: 0px 2px 10px 2px #888888;
  }
  .productitem-photo {
    margin: auto;
    width: 340px;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .productitem {
    height: 380px;
    width: 250px;
    margin-bottom: 40px;
    box-shadow: 0px 2px 10px 2px #888888;
  }
  .productitem-photo {
    width: 100%;
    height: 250px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .productitem {
    height: 380px;
    width: 300px;
    margin-bottom: 40px;
    box-shadow: 0px 2px 10px 2px #888888;
  }
  .productitem-photo {
    width: 90%;
    margin: auto;
    height: 250px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .productitem {
    height: 380px;
    width: 280px;
    margin-bottom: 40px;
    box-shadow: 0px 2px 10px 2px #888888;
  }
  .productitem-photo {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
}

@media (min-width: 1200px) {
  .productitem {
    height: 380px;
    width: 250px;
    margin-bottom: 40px;
    box-shadow: 0px 2px 10px 2px #888888;
  }
  .productitem-photo {
    width: 100%;
    height: 250px;
    overflow: hidden;
  }
}
</style>
