<template>
  <div class="home">
      <HomeBanner/>
      <HomeIntro/>
      <HomeListbestseller/>
      <HomeListblog/>
  </div>
</template>

<script>
import HomeBanner from '../content-page/home/home-banner.vue'
import HomeIntro from '../content-page/home/home-intro.vue'
import HomeListbestseller from '../content-page/home/home-listbestseller.vue'
import HomeListblog from '../content-page/home/home-listblog.vue'
export default {
  name: 'Home',
  components: {
    HomeBanner,
    HomeIntro,
    HomeListbestseller,
    HomeListblog  
  },
}
</script>

<style scoped>
</style>
