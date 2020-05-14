import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import User from '../views/User.vue'
import Account from '../views/Account.vue'
import Login from '../views/Login.vue'

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
  },
  {
    path: '/cuenta',
    name: 'Account',
    component: Account
  },
  {
    path: '/entrar',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
