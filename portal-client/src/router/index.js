import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/productos',
    name: 'product',
    component: Products
  },
  {
    path: '/usuario',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  routes
})

export default router
