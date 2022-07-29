import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import GameView from '@/views/GameView'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Spiel',
    name: 'game',
    component: GameView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
