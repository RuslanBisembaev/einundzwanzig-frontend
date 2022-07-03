import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/GameView.vue'
import AboutView from '../views/AboutView.vue'
import UsersView from '@/views/UsersView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/users',
    name: 'ranking',
    component: UsersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
