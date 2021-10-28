<template>
   <div class="container container-listblog">
            <BlogItem
            v-for="(blog, index) in listBlog"
            :key="index"
            :blog="blog"
            />
        </div>
</template>

<script>
import BlogItem from '../../common/blog-item.vue'
export default {
  name: 'BlogList',
  components: {
    BlogItem,
  },
  computed: {
      listBlog() {
        return this.$store.state.listBlog
      }
  }
}
</script>

<style scoped>
.container-listblog{
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
}


@media (max-width: 575px) {
    .container-listblog{
    justify-content: center;
}
}


@media (min-width: 576px) and (max-width: 767px){
    .container-listblog{
    justify-content: center;
}
}



</style>
