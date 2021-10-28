<template>
  <div class="container container-productlist">
    <div class="container-productlist-filter">
        <form>
          <h3>Categories</h3>
          <div class="Categories-box">
              <input type="radio" id="all" name="categories" value="All" @click="selectVariation(5)">
              <label for="all">All</label>
          </div>
          <div class="Categories-box">
              <input type="radio" id="earphone" name="categories" value="Earphone" @click="selectVariation(0)">
              <label for="earphone">Earphone</label>
          </div>
          <div class="Categories-box">
              <input type="radio" id="speaker" name="categories" value="Speaker" @click="selectVariation(1)">
              <label for="speaker">Speaker</label>
          </div>
        </form>
      <div class="productlist-filter-sortby">
        <p>Sort by</p>
        <select 
        id="selectlist"
        @change="selectPrice($event)"
        >
          <option value="0">Mặc định</option>
          <option value="1">Top đánh giá</option>
          <option value="2">Giá thấp->Cao</option>
          <option value="3">Giá cao->Thấp</option>
        </select>
      </div>
    </div>
    
    
    <div class="productlist">
      <ProductItem 
      class="productitem"
      v-for="(product, index) in list"
      :key="index"
      :product="product"
      />
    </div>

  </div>
</template>

<script>
import ProductItem from "../../common/product-item.vue";
export default {
  name: "ProductList",
  data() {
    return {
      list: []
    }
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
    selectVariation(variation) {
      this.list = []
      this.$store.dispatch('handleSeselectVariation', variation)
      return this.list = this.$store.state.listSelectVariation
    },
    selectPrice(event){
      const number = parseInt(event.target.value)
      this.list = []
      this.$store.dispatch('handleselectPrice', number)
      return this.list = this.$store.state.listSelectVariation
    }
  },
  mounted(){
      for(var i = 0; i <= 5; i++){
        this.list.push(this.listProduct[i])
      }
  }
};
</script>

<style scoped>
.container-productlist {
  margin-top: 50px;
  align-items: flex-start;
}

.container-productlist-filter {
  text-align: left;
  background: rgba(245, 243, 243, 0.315);
}
.container-productlist-filter form {
  width: 80%;
  padding: 20px;
}
.Categories-box {
  margin: 10px 0;
}
.productlist-filter-sortby {
  width: 100%;
  padding: 20px 0;
  font-size: 30px;
}
#selectlist {
  width: 90%;
  height: 30px;
}
.productlist-filter-sortby select{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

@media (max-width: 575px) {
    .container-productlist {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.container-productlist-filter {
  width: 90%;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.container-productlist-filter form {
  width: 200px;
  padding: 20px;
}
.Categories-box  input{
  margin-right: 5px;
}
.productlist-filter-sortby {
  width: 150px;
  padding: 20px 0;
  font-size: 30px;
  padding: 20px;
}
#selectlist {
  width: 90%;
  height: 30px;
}
.productlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


}


@media (min-width: 576px) and (max-width: 767px){
 .container-productlist {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.container-productlist-filter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.container-productlist-filter form {
  width: 200px;
  padding: 20px;
}
.Categories-box  input{
  margin-right: 5px;
}
.productlist-filter-sortby {
  width: 150px;
  padding: 20px 0;
  font-size: 30px;
}
#selectlist {
  width: 90%;
  height: 30px;
}
.productlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
}


@media (min-width: 768px) and (max-width: 991px){
   .container-productlist {
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
}

.container-productlist-filter {
  width: 22%;
  text-align: left;
}
.container-productlist-filter form {
  width: 100%;
  padding: 5px;
}
.Categories-box input{
  margin-right: 5px;
}
.productlist-filter-sortby {
  width: 100%;
  padding: 20px 0;
  font-size: 30px;
}
#selectlist {
  width: 90%;
  height: 30px;
}
.productlist{
  width: 78%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.productitem{
  width: 270px;
}
}

@media (min-width: 992px) and (max-width: 1199px){
  .container-productlist {
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
}

.container-productlist-filter {
  width: 16%;
  text-align: left;
}
.container-productlist-filter form {
  width: 100%;
  padding: 5px;
}
.Categories-box input{
  margin-right: 5px;
}
.productlist-filter-sortby {
  width: 100%;
  padding: 20px 0;
  font-size: 30px;
}
#selectlist {
  width: 90%;
  height: 30px;
}
.productlist{
  width: 84%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.productitem{
  width: 260px;
}
}


@media (min-width: 1200px){
  .container-productlist {
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
}

.container-productlist-filter {
  width: 20%;
  text-align: left;
}
.container-productlist-filter form {
  width: 100%;
  padding: 5px;
}
.Categories-box input{
  margin-right: 5px;
}
.productlist-filter-sortby {
  width: 100%;
  padding: 20px 0;
  font-size: 30px;
}
#selectlist {
  width: 90%;
  height: 30px;
}
.productlist{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
}
</style>
