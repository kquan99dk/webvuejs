<template>
  <div class="homebanner">
            <img src="../../../assets/img/banner-beats.jpg" alt="banner" />
        </div>
</template>

<script>
export default {
  name: 'HomeBanner',
}
</script>

<style scoped>
.homebanner{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}    
.homebanner img{
    width: 100%;
    height: 100%;
}
@media (max-width: 575px) {
    .homebanner{
      margin-top: 60px;
    }
}


@media (min-width: 576px) and (max-width: 767px){
    .homebanner{
      margin-top: 60px;
    }
}


@media (min-width: 768px) and (max-width: 991px){
  .homebanner{
    margin-top: 65px;
  }
}

@media (min-width: 992px) and (max-width: 1199px){
  .homebanner{
    margin-top: 70px;
  }
}


@media (min-width: 1200px){
    .homebanner{
    margin-top: 75px;
  }
}
</style>
