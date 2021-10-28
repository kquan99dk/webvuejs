import Home from '../components/page/home-page.vue'
import Product from '../components/page/product-page.vue'
import Blog from '../components/page/blog-page.vue'
import Contact from "../components/page/contact-page.vue"
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
