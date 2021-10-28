<template>
        <div class="blog">
            <BannerPBC/>
            <ListBlog/>
        </div>
</template>

<script>
import BannerPBC from '../common/banner-pbc.vue'
import ListBlog from '../content-page/blog/blog-list.vue'
export default {
  name: 'Blog',
  components: {
    BannerPBC,
    ListBlog
  }
}
</script>

<style scoped>
</style>
