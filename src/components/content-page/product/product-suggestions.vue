<template>
        <div class="container container-suggestion">
                <div class="suggestion-title">
                    <p>-----You may also like-----</p>
                    
    
                </div>
                <div class="suggestion-list">
                    <ProductItem 
                    v-for="(product, index) in listSugg"
                    :key="index"
                    :product="product"
                    />
                </div>
            </div>
</template>

<script>
import ProductItem from '../../common/product-item.vue'
export default {
  name: 'ProductSuggestions',
  data() {
      return{
          listSugg:[]
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
  },
  mounted(){
         var i = Math.floor(Math.random() * (this.listProduct.length - 3))
         for(var j = i; j <= i+3; j++){
            this.listSugg.push(this.listProduct[j])
        }
        
  }
  ,
}
</script>

<style scoped>
.container-suggestion{
    display: flex;
    flex-direction: column;
    padding: 100px 0;
}

.suggestion-title{
    font-size: 35px;
}

.suggestion-list{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
@media (max-width: 575px) {
    .container-suggestion{
    display: flex;
    flex-direction: column;
    padding: 25px 0;
}

.suggestion-title{
    font-size: 26px;
}

.suggestion-list{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
}


@media (min-width: 576px) and (max-width: 767px){
     .container-suggestion{
    display: flex;
    flex-direction: column;
    padding: 30px 0;
}

.suggestion-title{
    font-size: 27px;
}

.suggestion-list{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
}


@media (min-width: 768px) and (max-width: 991px){
   .container-suggestion{
    display: flex;
    flex-direction: column;
    padding: 30px 0;
}

.suggestion-title{
    font-size: 28px;
}

.suggestion-list{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
}

@media (min-width: 992px) and (max-width: 1199px){
   .container-suggestion{
    display: flex;
    flex-direction: column;
    padding: 45px 0;
}

.suggestion-title{
    font-size: 30px;
}

.suggestion-list{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
}


@media (min-width: 1200px){
     .container-suggestion{
    display: flex;
    flex-direction: column;
    padding: 50px 0;
}

.suggestion-title{
    font-size: 30px;
}

.suggestion-list{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
}
</style>
