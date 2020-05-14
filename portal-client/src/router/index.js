import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import User from '../views/User.vue'
import Account from '../views/Account.vue'
import Login from '../views/Login.vue'
import Product from '../views/Product.vue'

import store from '../store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/productos',
    name: 'product',
    component: Products
  },
  {
    path: '/producto',
    name: 'productonly',
    component: Product
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && store.state.userModule.user === null ) next({ name: 'Login' })
  else next()
})

export default router
