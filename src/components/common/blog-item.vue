<template>
        <div class= 'blogitem'>
            <div class='blog-photo'>
                <img :src="blog.img" alt="product" />
            </div>
            <p class="blogitem-date">By admin on {{blog.date}}</p>
            <div class='blog-content'>
                <h3>{{blog.title}}</h3>
                <p>{{blog.content}}</p>
            </div>
        </div>
</template>

<script>
export default {
  name: 'BlogItem',
  props: {
    blog: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
}
</script>

<style scoped>
.blogitem{
    height: 400px;
    background: rgba(212, 209, 184, 0.37);
    width: 350px;
    margin-bottom: 40px;
    text-align: left;
}
.blog-photo{
    width: 100%;
    height: 236px;
    
}
.blog-photo img{
    width: 100%;
    height: 100%;
    border-radius: 2px;
    box-shadow:  0px 2px 10px 2px #888888;
}
.blogitem-date{
    margin-top: 5px;
    font-size: 15px;
    font-weight: 100;
    color: rgb(99, 85, 84);
}
.blog-content{
    width: 100%;
    height: 100px;
    padding: 10px 0 0 0;
}
.blog-content h3{
    cursor: pointer;
    font-size: 20px;
    margin-bottom: 5px;
}
.blog-content h3:hover{
    color: rgb(57, 175, 159);
}

@media (max-width: 575px) {
    .blogitem{
    height: 380px;
    width: 440px;
}
}


@media (min-width: 576px) and (max-width: 767px){
    .blogitem{
    height: 380px;
    width: 460px;
}
}


@media (min-width: 768px) and (max-width: 991px){
  .blogitem{
    height: 410px;
    width: 350px;
  }
}

@media (min-width: 992px) and (max-width: 1199px){
  .blogitem{
    height: 390px;
    width: 460px;
  }
}


@media (min-width: 1200px){
    .blogitem{
    height: 410px;
    width: 350px;
  }
}

</style>
