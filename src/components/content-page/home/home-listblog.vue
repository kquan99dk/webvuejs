<template>
    <div class="container container-homelistblog">
            <div class="container-homelistblog-title">
                <h1>LATEST FROM BLOG</h1>
                <p>The freshest and most exciting news</p>
            </div>
            <div class="container-homelistblog-item">
                <BlogItem 
                v-for="(blog, index) in listBlogHome"
                :key="index"
                :blog="blog"/>
            </div>
        </div>
</template>

<script>
import BlogItem from '../../common/blog-item.vue'
export default {
  name: 'HomeListblog',
  data() {
      return{
          listBlogHome: []
      }
  },
  components: {
      BlogItem
  },
  computed: {
      listBlog() {
         return this.$store.state.listBlog
      }
  },
  mounted() {
      var i = Math.floor(Math.random() * (this.listBlog.length - 2))
         for(var j = i; j <= i+2; j++){
            this.listBlogHome.push(this.listBlog[j])
        }
  }
}
</script>

<style scoped>
.container-homelistblog{
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 100px;
}
.container-homelistblog-title{
    height: 60px;;
    margin-bottom: 30px;
}
.container-homelistblog-item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}


@media (max-width: 575px) {
    .container-homelistblog-item{
    justify-content: center;
}
}


@media (min-width: 576px) and (max-width: 767px){
    .container-homelistblog-item{
    justify-content: center;
}
}


@media (min-width: 768px) and (max-width: 991px){
  .container-homelistblog-item{
      justify-content: space-between;
  }
}

@media (min-width: 992px) and (max-width: 1199px){
  .container-homelistblog-item{
      justify-content: space-between;
  }
}


@media (min-width: 1200px){
   .container-homelistblog-item{
      justify-content: space-between;
  }
}


</style>
