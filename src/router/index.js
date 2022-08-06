import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import GameView from '@/views/GameView'
import ScoreboardView from '@/views/ScoreboardView'

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
  },
  {
    path: '/Scoreboard',
    name: 'scoreboard',
    component: ScoreboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
