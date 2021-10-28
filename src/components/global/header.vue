<template>
  <div class="header">
    
    <div class="modal-login" :class="{showmodallogin : isshowmodallogin}">
        <div class="form-login">
            <div class="exitlogin">
              <button  @click="showModallogin()">X</button>
            </div>
            <div class="menu-login">
              <div class="menu-login1" 
              :class="{flowlogin : isflowlogin}"
              @click="isflowlogin = true,
                      isflowregister = false,
                      islogin = false,
                      isregister =true"
              >
                <span>Login</span>
              </div>
              <div class="menu-login2" 
              :class="{flowlogin : isflowregister}"
               @click="isflowlogin = false,
                      isflowregister = true,
                      islogin = true,
                      isregister =false"
              >
                <span>Register</span>
              </div>
            </div>
            
            <div class="login" :class="{showlogin : islogin}">
              <form action="">
                <div class="login-input">
                  <label for="login-username">User Name</label><br/>
                  <input type="text" id="login-username" required/>
                </div>
                <div class="login-input">
                    <label for="login-password">Password</label><br/>
                    <input type="password" id="login-password" required/>
                </div>
                <button type="submit">Login</button>
              </form>  
            </div>
            
            <div class="register" :class="{showregister : isregister}">
                <form action="">
                  <div class="register-input">
                    <label for="register-username">Email</label><br/>
                    <input type="email" id="register-username" required/>
                  </div>
                  <div class="register-input">
                    <label for="register-username">User Name</label><br/>
                    <input type="text" id="register-username" required/>
                  </div>
                  <div class="register-input">
                      <label for="register-password">Password</label><br/>
                      <input type="password" id="register-password" required/>
                  </div>
                  <button type="submit">Register</button>
              </form>
            </div>
        </div>
    </div>
    
    
    <div class="modal" :class="{ showmodal: isActive, exitmodal: isExit }">
      <div class="cart" :class="{ showcart: isActive, exitcart: isExit }">
        <div class="title-cart">
          <span>Giỏ Hàng</span>
          <button @click="exitCart()">X</button>
        </div>

        <div class="cart-empty" :class="{ checkinfo: ischeckcart }">
          <p>Trống</p>
        </div>
        <div class="list-product-cart">
          <div
            class="product-cart"
            v-for="(product, index) in listProductCart"
            :key="index"
          >
            <img :src="product.img" alt="quan ao" />

            <div class="prc-info">
              <span class="prc-info-name">{{ product.name }}</span>
              <p class="prc-info-price">{{ new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.price) }}</p>
              <div class="additions">
                <p 
                class="minus" 
                @click="minus(index)"
                >-</p>
                <input type="text" :value="product.quantity" readonly />
                <p 
                class="plus"
                @click="plus(index)"
                >+</p>
              </div>
            </div>
            <button class="delete" @click="deleteItem(index)">
              Xóa
            </button>
          </div>
        </div>

        <div class="cart-pay" :class="{ checkinfopay: ischeckcartpay }">
          <div class="cart-pay__text">
            <span>Tổng Tiền: {{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(totalpay)}}</span>
          </div>

          <button>Thanh Toán</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="logo">
        <a href="/"
          ><img src="../../assets/img/logowebreact.png" alt="logo"
        /></a>
      </div>
      <div class="menu">
        <i class="fa fa-bars" aria-hidden="true" />
        <ul>
            <div></div>
            <li v-for="(item, index) in routes" :key="index">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
        </ul>
      </div>
      <div class="search">
        <form>
          <input type="text" placeholder="Search..." />
          <button>
            <i class="fa fa-search" aria-hidden="true" />
          </button>
        </form>
      </div>
      <div class="header-item">
        <i
          @click="openCart()"
          class="fa fa-cart-plus header-item-cart"
          aria-hidden="true"
        />
        <p
          class="info-cart"
          :class="{ checkinfoquantity: ischeckcartquantity }"
        >
          {{ infocart }}
        </p>
        <i
          id="btn"
          class="fa fa-user-circle-o header-item-user"
          aria-hidden="true"
          @click="showModallogin()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '../../router/index'

export default {
  name: "Header",
  data() {
    return {
      isActive: false,
      isExit: false,
      ischeckcart: false,
      ischeckcartpay: true,
      ischeckcartquantity: true,
      isshowmodallogin : true,
      islogin: false,
      isregister: true,
      isflowlogin: true,
      isflowregister: false,
      infocart : '',
      totalQuantity : 0 ,
      totalpay : '',
      routes
    };
  },
  computed: {
    listProductCart() {
      return this.$store.state.listProductCart;
    },
    getTotalQuantity() {
      this.$store.state.listProductCart.forEach(x => {
        this.totalQuantity += x.quantity
      });
      return this.totalQuantity
    }
  }
  ,
  watch: {
    listProductCart() {
      const lg = this.listProductCart.length;
      this.infocart = lg;
      this.listProductCart
      if (lg >= 1) {
        this.ischeckcartpay = false;
        this.ischeckcart = true;
        this.ischeckcartquantity = false;
      } else {
        this.ischeckcartpay = true;
        this.ischeckcart = false;
        this.ischeckcartquantity = true;
      }
    },
    getTotalQuantity() {
      this.totalpay = 0
      this.listProductCart.forEach(X => {
            this.totalpay -= -X.price
        })
    }
  },
  methods: {
    showModallogin() {
            this.isshowmodallogin = !this.isshowmodallogin
    },
    openCart() {
      this.isExit = false;
      this.isActive = !this.isActive;
    },
    exitCart() {
      this.isExit = !this.isExit;
      setTimeout(() => {
        this.isActive = !this.isActive;
      }, 490);
    },
    deleteItem(index){
      this.$store.dispatch('handleDeleteListCart', index)
    },
    plus(index){
      this.$store.dispatch('handlePlusQuantity', index)
    },
    minus(index){
      this.$store.dispatch('handleMinusQuantity', index)
    }
  },
};
</script>

<style scoped>
.header {
  background: rgb(119, 168, 165);
}

  .header-item i:hover {
    color: rgb(33, 75, 114);
    transition: ease 0.5s;
  }
  .search button:hover {
    font-size: 16px;
    background-color:rgb(135, 177, 204);
    transition: 0.5s ease;
  }
  .menu ul li :hover {
    color: rgb(33, 75, 114);
  }
/* .header {
  width: 100%;
  height: 80px
  position: fixed;
  top: 0;
}

.header .container {
  height: 80px !important;
  justify-content: space-between;
}

.logo {
  height: 60px;
  width: 8%;
}
.logo img {
  height: 60px;
}

.menu {
  width: 500px;
  font-size: 25px;
}
.menu i{
  display: none;
}
.menu ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
.menu li {
  display: inline-table;
  width: 100px;
  height: 35px;
  line-height: 35px;
}
.menu a {
  text-decoration: none;
  display: block;
}
.menu ul li :hover {
  color: red;
  font-weight: 550;
}

.search {
  margin-left: 200px;
  width: 200px;
  display: flex;
}
.search form {
  width: 100%;
  height: 45px;
  display: flex;
  position: relative;
  align-items: center;
}
.search input {
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: 1px solid rgb(0, 0, 0);
  padding: 10px 30px 10px 10px;
  border-radius: 25px;
  outline: none;
}
.search button {
  cursor: pointer;
  height: 37px;
  width: 37px;
  position: absolute;
  right: 5px;
  border: 1px solid rgb(0, 0, 0);
  line-height: 30px;
  border-radius: 25px;
}
.search button:hover {
  background-color: red;
  transition: all 0.3s ease;
}

.header-item {
  width: 80px;
  height: 35px;
  display: flex;
  align-items: center;
}
.header-item i {
  cursor: pointer;
  font-size: 30px;
  width: 50%;
}
.header-item i:hover {
  color: red;
  transition: ease 0.3s;
} */
.header-item {
  position: relative;
}

/* modal login */
.modal-login{
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(170, 170, 170, 0.411);
}
.showmodallogin{
  display: none;
}
.form-login{
  margin: auto;
  margin-top: 100px;
  width: 400px;
}
/* exit */
.exitlogin{
  border-radius: 0 10px 0 0;
  background: rgb(107, 182, 176);
  text-align: right;
}
.exitlogin button{
  cursor: pointer;
  border: none;
  border-radius: 0 10px 0 0;
  height: 30px;
  width: 30px;
  font-size: 20px;
  color: #020202;
  background: rgb(107, 182, 176);
}
.exitlogin button:hover{
  background: rgb(235, 8, 8);
}
.menu-login{
  height: auto;
  width: 100%;
  display:flex;
  background: rgb(107, 182, 176);
}
.menu-login div{
  width: 50%;
  padding: 10px 0;
  cursor: pointer;
  font-size: 18px;
}
.menu-login div:hover{
  background: #68ad9e;
}
.login{
  background: rgb(107, 182, 176);
  padding: 50px 0;
  border-radius: 0 0 10px 10px;
}
.login form{
  width: 280px;
  margin: auto;
}
.login-input{
  text-align: left;
  margin-bottom: 30px;
}
.login form label{
  font-size: 20px;
  line-height: 35px;
}
.login form input{
  border:none;
  border-radius: 3px;
  width: 280px;
  padding: 0 5px;
  height: 25px;
  outline: none;
}
.login form button{
  width: 100px;
  height: 35px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.login form button:hover{
  background: rgb(53, 117, 112);
  color: #ffffff;
}

.register{
  background: rgb(107, 182, 176);
  padding: 50px 0;
}
.register form{
  width: 280px;
  margin: auto;
}
.register-input{
  text-align: left;
  margin-bottom: 30px;
}
.register form label{
  font-size: 20px;
  line-height: 35px;
}
.register form input{
  border:none;
  border-radius: 3px;
  width: 280px;
  padding: 0 5px;
  height: 25px;
  outline: none;
}
.register form button{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  width: 100px;
  height: 35px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
.register form button:hover{
  background: rgb(53, 117, 112);
  color: #ffffff;
  border: none;
}
/* xu li login */
.flowlogin{
  background: rgb(48, 107, 102);
}
.flowregister{
  background: rgb(48, 107, 102);
}
.showlogin{
  display: none;
}
.showregister{
  display: none;
}
/* modal */
.info-cart {
  background-color: red;
  position: absolute;
  font-size: 10px;
  line-height: 15px;
  height: 15px;
  width: 15px;
  border-radius: 10px 10px 2px 10px;
  top: -6px;
  left: -8px;
  color: #ffffff;
}
.checkinfoquantity {
  display: none;
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: rgba(170, 170, 170, 0.411);
}
.showmodal {
  display: block;
}
.showcart {
  animation: slideCart 0.5s ease;
}
.exitcart {
  animation: exitCart 0.5s ease;
}
.exitmodal {
  animation: exitModal 0.5s ease;
}
.cart {
  position: absolute;
  padding: 15px;
  width: 450px;
  height: 100vh;
  top: 0;
  right: 0;
  overflow-y: scroll;
  background-color: #ffff;
}

@keyframes slideCart {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes exitCart {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
@keyframes exitModal {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.title-cart {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid black;
}
.title-cart span {
  flex-grow: 1;
  font-size: 30px;
  font-weight: bolder;
}
.title-cart button {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 25px;
}
.title-cart button:hover {
  cursor: pointer;
  background-color: red;
}

/* gio hang */

.checkinfo {
  display: none;
}
.cart-empty {
  padding: 90px 0;
}
.cart-empty p {
  color: rgb(97, 107, 105);
  font-size: 100px;
  font-weight: 900;
}

.list-product-cart {
  width: 100%;
  padding: 15px 0;
}

.product-cart {
  display: flex;
  width: 400px;
  border-radius: 0 25px 0 0;
  margin-bottom: 5px;
  background-color: #d1e0e0;
}
.product-cart img {
  width: 120px;
  height: 120px;
}
.prc-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 10px;
}
.prc-info-name,
.prc-info-price,
.additions {
  text-align: left;
  margin-bottom: 8px;
}
.prc-info span {
  font-size: 20px;
}
.additions {
  display: flex;
  align-items: center;
  position: relative;
  width: 85px;
  height: 40px;
}
.additions input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 30.5px;
  font-size: 20px;
  border-radius: 25px;
}
.additions p {
  position: absolute;
  font-size: 30px;
  font-weight: bolder;
}
.additions p:hover {
  cursor: pointer;
  color: brown;
}
.additions .minus {
  left: 0;
  margin-left: 5px;
  margin-top: -5px;
}
.additions .plus {
  right: 0;
  margin-right: 5px;
}

.delete {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 0 25px 0 25px;
}
.delete:hover {
  cursor: pointer;
  background-color: red;
}

/* cartpay */

.cart-pay {
  display: flex;
  flex-direction: column;
  border: 2px solid #737373;
  border-radius: 5px;
}
.checkinfopay {
  display: none;
}
.cart-pay__text {
  text-align: left;
  height: 50px;
  width: 100;
}
.cart-pay__text span {
  font-size: 25px;
  font-weight: 600;
  line-height: 40px;
  text-align: left;
}
.cart-pay button {
  display: block;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  margin: auto;
}
.cart-pay button:hover {
  cursor: pointer;
  background-color: #ff8080;
  color: #ffffff;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  .cart {
    width: 490px;
  }
  .header {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
  }
  .header .container {
    width: 100% !important;
    height: 60px !important;
    justify-content: space-between;
  }

  .logo {
    height: 45px;
    width: 10%;
    margin-left: 50px;
  }
  .logo img {
    height: 45px;
  }

  .menu {
    position: fixed;
    width: 45px;
    height: 45px;
    font-size: 23px;
    cursor: pointer;
    border-radius: 5px;
  }
  .menu i {
    position: absolute;
    display: block;
    font-size: 35px;
    top: 5px;
    left: 7px;
  }
  .menu ul div {
    position: absolute;
    display: block;
    height: 18px;
    width: 45px;
    background-color: #ffffff;
    top: -13px;
    cursor: pointer;
  }
  .menu ul {
    display: none;
    position: absolute;
    text-align: left;
    background: #ffffff;
    top: 52px;
    list-style-type: none;
    flex-direction: column;
  }
  .menu li {
    width: 100px;
    height: 35px;
    margin-top: 5px;
    line-height: 35px;
  }
  .menu li a:hover{
    background: #59949c;
    color:#ffffff;
  }
  .menu a {
    text-decoration: none;
    display: block;
  }
  .menu:hover {
    background: #ffffff;
  }
  .menu:hover ul {
    display: block;
  }
  .search {
    margin-left: 150px;
    width: 180px;
    display: flex;
  }
  .search form {
    width: 100%;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
  }
  .search input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: 1px solid rgb(0, 0, 0);
    padding: 10px 50px 10px 10px;
    border-radius: 25px;
    outline: none;
  }
  .search button {
    cursor: pointer;
    height: 35px;
    width: 35px;
    position: absolute;
    right: 3px;
    border: none;
    line-height: 30px;
    border-radius: 25px;
  }

  .header-item {
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
  }
  .header-item i {
    cursor: pointer;
    font-size: 28px;
    width: 50%;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) {
  .header {
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
  }
  .header .container {
    height: 60px !important;
    justify-content: space-between;
  }

  .logo {
    height: 45px;
    width: 10%;
    margin-left: 50px;
  }
  .logo img {
    height: 45px;
  }

  .menu {
    position: fixed;
    width: 45px;
    height: 45px;
    font-size: 23.5px;
    cursor: pointer;
  }
  .menu i {
    position: absolute;
    display: block;
    font-size: 35px;
    top: 5px;
    left: 7px;
  }
  .menu ul div {
    position: absolute;
    display: block;
    height: 20px;
    width: 45px;
    background-color: #ffffff;
    top: -15px;
    cursor: pointer;
  }
  .menu ul {
    display: none;
    position: absolute;
    text-align: left;
    background: #ffffff;
    top: 52px;
    list-style-type: none;
    flex-direction: column;
  }
  .menu li {
    width: 100px;
    height: 35px;
    margin-top: 5px;
    line-height: 35px;
  }
  .menu a {
    text-decoration: none;
    display: block;
  }
  .menu li a:hover{
    background: #59949c;
    color:#ffffff;
  }
  .menu:hover {
    background-color: #ffffff;
  }
  
  .menu:hover ul {
    display: block;
  }
  .search {
    margin-left: 150px;
    width: 180px;
    display: flex;
  }
  .search form {
    width: 100%;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
  }
  .search input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: 1px solid rgb(0, 0, 0);
    padding: 10px 50px 10px 10px;
    border-radius: 25px;
    outline: none;
  }
  .search button {
    cursor: pointer;
    height: 35px;
    width: 35px;
    position: absolute;
    right: 3px;
    border: none;
    line-height: 30px;
    border-radius: 25px;
  }

  .header-item {
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
  }
  .header-item i {
    cursor: pointer;
    font-size: 28px;
    width: 50%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
  .header {
    width: 100%;
    height: 65px;
    position: fixed;
    top: 0;
  }
  .header .container {
    height: 60px !important;
    justify-content: space-between;
  }

  .logo {
    height: 55px;
    width: 8%;
  }
  .logo img {
    height: 55px;
  }

  .menu {
    font-size: 22px;
  }
  .menu i {
    display: none;
  }
  .menu ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  .menu li {
    display: inline-table;
    width: 90px;
    height: 35px;
    line-height: 35px;
  }
  .menu a {
    text-decoration: none;
    display: block;
  }

  .search {
    margin-left: 50px;
    width: 150px;
    display: flex;
  }
  .search form {
    width: 100%;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
  }
  .search input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: 1px solid rgb(0, 0, 0);
    padding: 10px 45px 10px 10px;
    border-radius: 25px;
    outline: none;
  }
  .search button {
    cursor: pointer;
    height: 35px;
    width: 35px;
    position: absolute;
    right: 3px;
    border: none;
    line-height: 30px;
    border-radius: 25px;
  }

  .header-item {
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
  }
  .header-item i {
    cursor: pointer;
    font-size: 28px;
    width: 50%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
  .header {
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
  }
  .header .container {
    height: 70px !important;
    justify-content: space-between;
  }

  .logo {
    height: 55px;
    width: 8%;
  }
  .logo img {
    height: 55px;
  }

  .menu {
    font-size: 23px;
  }
  .menu i {
    display: none;
  }
  .menu ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  .menu li {
    display: inline-table;
    width: 90px;
    height: 35px;
    line-height: 35px;
  }
  .menu a {
    text-decoration: none;
    display: block;
  }

  .search {
    margin-left: 180px;
    width: 180px;
    display: flex;
  }
  .search form {
    width: 100%;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
  }
  .search input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: 1px solid rgb(0, 0, 0);
    padding: 10px 50px 10px 10px;
    border-radius: 25px;
    outline: none;
  }
  .search button {
    cursor: pointer;
    height: 35px;
    width: 35px;
    position: absolute;
    right: 3px;
    border: none;
    line-height: 30px;
    border-radius: 25px;
  }

  .header-item {
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
  }
  .header-item i {
    cursor: pointer;
    font-size: 28px;
    width: 50%;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .header {
    width: 100%;
    height: 75px;
    position: fixed;
    top: 0;
  }
  .header .container {
    height: 75px !important;
    justify-content: space-between;
  }

  .logo {
    height: 60px;
    width: 8%;
  }
  .logo img {
    height: 60px;
  }

  .menu {
    font-size: 25px;
  }
  .menu i {
    display: none;
  }
  .menu ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  .menu li {
    display: inline-table;
    width: 100px;
    height: 35px;
    line-height: 35px;
  }
  .menu a {
    text-decoration: none;
    display: block;
  }
  

  .search {
    margin-left: 200px;
    width: 220px;
    display: flex;
  }
  .search form {
    width: 100%;
    height: 40px;
    display: flex;
    position: relative;
    align-items: center;
  }
  .search input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    border: 1px solid rgb(0, 0, 0);
    padding: 10px 50px 10px 10px;
    border-radius: 25px;
    outline: none;
  }
  .search button {
    cursor: pointer;
    height: 35px;
    width: 35px;
    position: absolute;
    right: 3px;
    border: none;
    line-height: 30px;
    border-radius: 25px;
  }
  

  .header-item {
    width: 80px;
    height: 35px;
    display: flex;
    align-items: center;
  }
  .header-item i {
    cursor: pointer;
    font-size: 28px;
    width: 50%;
  }
}
</style>
