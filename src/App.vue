<template>
  <div id="app">
      <Header/>
      <router-view/>
      <Footer/>
  </div>
</template>

<script>
import Header from './components/global/header.vue'
import Footer from './components/global/footer.vue'
export default {
  name: 'App',
  data() {
    return {
        
    }
  },
  components: {
      Header,
      Footer
  }
}
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #000000;
  transition:all 0.5s ease;
}
html{

   font-size: 16px;
}
body {
  margin: 0;
  padding: 0;
  text-align: center;
}

a.router-link-exact-active {
  color: rgb(38, 82, 133);
}

.container{
  height: auto !important;
  width: 100%;
  margin:auto;
  display: flex;
  align-items: center;
}



@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}



</style>
