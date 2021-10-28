<template>
        <div class="banner-p-b-c">
                <img src="../../assets/img/bannerpbc.jpg" alt="banner" />
        </div>
</template>

<script>
export default {
  name: 'Banner-pbc',
}
</script>

<style scoped>
.banner-p-b-c{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.banner-p-b-c img{
    width: 100%;
}

@media (max-width: 575px) {
    .banner-p-b-c{
    margin-top: 60px;
  }
}


@media (min-width: 576px) and (max-width: 767px){
    .banner-p-b-c{
    margin-top: 60px;
  }
}


@media (min-width: 768px) and (max-width: 991px){
  .banner-p-b-c{
    margin-top: 60px;
  }
}

@media (min-width: 992px) and (max-width: 1199px){
  .banner-p-b-c{
    margin-top: 70px;
  }
}


@media (min-width: 1200px){
    .banner-p-b-c{
    margin-top: 75px;
  }
}


</style>
