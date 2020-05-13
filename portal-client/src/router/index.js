import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/productos',
    name: 'Productos',
    component: Products
  }
]

const router = new VueRouter({
  routes
})

export default router
