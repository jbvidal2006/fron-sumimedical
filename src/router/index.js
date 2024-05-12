import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserNew from '../views/UserNew.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createUser',
    name: 'create',
    component: UserNew
  },
  {
    path: '/listProduct',
    name: 'listProduct',
    component: ProductView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
