<template>
  <div class="footer">
         <div class="container container--footer">
                <div class="container--footer--column">  
                    <div class="container--footer--content">
                        <h2>Sound Master</h2>
                    </div>
                    <div class="container--footer--content">
                        <i class="fa fa-map-marker" aria-hidden="true"> 592 DV 14 KDT Mậu Lương</i>
                    </div>
                    <div class="container--footer--content">
                        <i class="fa fa-envelope" aria-hidden="true"> kquan99dk@gmail.com</i>
                        <p></p>
                    </div>
                    <div class="container--footer--content">
                        <i class="fa fa-phone" aria-hidden="true"> +0332158858</i>
                    </div>
                    <div class="container--footer--content container--footer--content--icon">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i>    
                    </div>
                </div>  

                <div class="container--footer--column"> 
                     <div class="container--footer--content">
                        <h3>Categories</h3>
                    </div>
                    <div class="container--footer--content">
                        <p>Earphone</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Speaker</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Earphone</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Speaker</p>
                    </div>
                </div>


                <div class="container--footer--column"> 
                     <div class="container--footer--content">
                        <h3>Infomation</h3>
                    </div>
                    <div class="container--footer--content">
                        <p>About Us</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Contact Us</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Terms & Conditions</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Returns & Exchanges</p>
                    </div>
                </div> 


                <div class="container--footer--column"> 
                     <div class="container--footer--content">
                        <h3>Useful links</h3>
                    </div>
                    <div class="container--footer--content">
                        <p>Store Location</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Latest News</p>
                    </div>
                    <div class="container--footer--content">
                        <p>My Account</p>
                    </div>
                    <div class="container--footer--content">
                        <p>Size Guides</p>
                    </div>
                </div> 
        </div>    
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* .footer{
    background-color: #f5f5f5;
    padding: 30px 0;
    margin-top: 30px;
}
.container--footer{
    justify-content: space-between;
}
.container--footer--column{

    width: 23%;
    line-height: 50px;
}
.container--footer--content--icon{
    font-size: 30px;
    display: flex;
    justify-content: space-between;
} */
@media (max-width: 575px) {
    .footer{
    background-color: #f5f5f5;
    padding: 10px 0;
    margin-top: 30px;
}
    .container--footer{
    flex-direction: column;
    justify-content: space-between;
}
    .container--footer--column{
    width: 80%;
    line-height: 50px;
    margin-bottom: 15px;
}
    .container--footer--content--icon{
    font-size: 30px;
    display: flex;
    justify-content: space-around;
}
}


@media (min-width: 576px) and (max-width: 767px){
     .footer{
    background-color: #f5f5f5;
    padding: 15px 0;
    margin-top: 30px;
}
    .container--footer{
    flex-wrap: wrap;    
    justify-content: space-between;
}
    .container--footer--column{
    width: 48%;
    line-height: 50px;
    margin-bottom: 15px;
}
    .container--footer--content--icon{
    font-size: 30px;
    display: flex;
    justify-content: space-around;
}
}


@media (min-width: 768px) and (max-width: 991px){
.footer{
    background-color: #f5f5f5;
    padding: 15px 0;
    margin-top: 30px;
}
    .container--footer{
    flex-wrap: wrap;    
    justify-content: space-between;
}
    .container--footer--column{
    width: 48%;
    line-height: 50px;
    margin-bottom: 15px;
}
    .container--footer--content--icon{
    font-size: 30px;
    display: flex;
    justify-content: space-around;
}
}

@media (min-width: 992px) and (max-width: 1199px){
    .footer{
    background-color: #f5f5f5;
    padding: 15px 0;
    margin-top: 30px;
}
    .container--footer{
    flex-wrap: wrap;    
    justify-content: space-between;
}
    .container--footer--column{
    width: 25%;
    line-height: 50px;
    margin-bottom: 15px;
}
    .container--footer--content--icon{
    font-size: 30px;
    display: flex;
    justify-content: space-around;
}
}


@media (min-width: 1200px){
        .footer{
    background-color: #f5f5f5;
    padding: 30px 0;
    margin-top: 30px;
}
    .container--footer{
    flex-wrap: wrap;    
    justify-content: space-between;
}
    .container--footer--column{
    width: 25%;
    line-height: 50px;
    margin-bottom: 15px;
}
    .container--footer--content--icon{
    font-size: 30px;
    display: flex;
    justify-content: space-around;
}
}
</style>
