<template>
    <div class = "container container--intro">
                <div class="intro">
                    <div class="logo-intro">
                        <i class="fa fa-life-ring" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <div class="text-title"><b>SUPPORT 24/7</b></div>
                        <div class="text-content">We support 24 hours a day</div>
                    </div>
                </div>
                <div class="intro">
                    <div class="logo-intro">
                        <i class="fa fa-retweet" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <div class="text-title"><b>30 DAYS RETURN</b></div>
                        <div class="text-content">You have 30 days to return</div>
                    </div>
                </div>
                <div class="intro">
                    <div class="logo-intro">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div class="text">
                        <div class="text-title"><b>PAYMENT 100% SECURE</b></div>
                        <div class="text-content">Payment 100% Secure</div>
                    </div>
                </div>
            </div> 
</template>

<script>
export default {
  name: 'HomeIntro',
}
</script>

<style scoped>
/* .container--intro{
    justify-content: space-between;

}
.intro{
    width: 30%;
    height: 80px;
    background-color: blanchedalmond;
    border-radius: 20px;
    display: flex;
    align-items: center;
}
.intro .logo-intro{
    width: 20%;
    height: 50px;
}
.intro i{
    font-size: 50px;
}

.text{
    width: 80%;
    text-align: center;
}
.text-title{
    font-size: 20px;
} */
.intro{
    background: rgb(132, 175, 172);
}
@media (max-width: 575px) {
    .container--intro{
    margin-top: 25px;
    justify-content: center;
    flex-wrap: wrap;

}
.intro{
    width: 90%;
    height: 60px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.intro .logo-intro{
    width: 20%;
    height: 40px;
}
.intro i{
    font-size: 40px;
}

.text{
    width: 80%;
    text-align: center;
}
.text-title{
    font-size: 18px;
    margin-bottom: 5px;
}
}


@media (min-width: 576px) and (max-width: 767px){
    .container--intro{
    margin-top: 25px;
    justify-content: center;
    flex-wrap: wrap;

}
.intro{
    width: 90%;
    height: 65px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin: auto;
    margin-bottom: 10px;
}
.intro .logo-intro{
    width: 20%;
    height: 40px;
}
.intro i{
    font-size: 40px;
}

.text{
    width: 80%;
    text-align: center;
}
.text-title{
    font-size: 18px;
    margin-bottom: 5px;
}
}


@media (min-width: 768px) and (max-width: 991px){
    .container--intro{
    margin-top: 30px;
    justify-content: center;
    flex-wrap: wrap;

    }
    .intro{
    width: 90%;
    height: 65px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    }
    .intro .logo-intro{
        width: 20%;
        height: 45px;
    }
    .intro i{
        font-size: 45px;
    }

    .text{
        width: 80%;
        text-align: center;
    }
    .text-title{
        font-size: 18.5px;
        margin-bottom: 5px;
    }
}

@media (min-width: 992px) and (max-width: 1199px){
 .container--intro{
    margin-top: 40px;
    justify-content: space-between;

    }
    .intro{
    width: 30%;
    height: 70px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    }
    .intro .logo-intro{
        width: 20%;
        height: 47px;
    }
    .intro i{
        font-size: 47px;
    }

    .text{
        width: 80%;
        text-align: center;
    }
    .text-title{
        font-size: 19px;
        margin-bottom: 5px;
    }
}


@media (min-width: 1200px){
   .container--intro{
    margin-top: 40px;
    justify-content: space-between;

    }
    .intro{
    width: 30%;
    height: 75px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    }
    .intro .logo-intro{
        width: 20%;
        height: 50px;
    }
    .intro i{
        font-size: 50px;
    }

    .text{
        width: 80%;
        text-align: center;
    }
    .text-title{
        font-size: 20px;
        margin-bottom: 5px;
    }
}


</style>
