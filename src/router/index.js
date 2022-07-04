import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import UsersView from '@/views/UsersView'
import GameView from '@/views/GameView'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '/users',
    name: 'ranking',
    component: UsersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
