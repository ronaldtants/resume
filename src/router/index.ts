import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import ResumeView from '@/views/ResumeView.vue'
import PortfolioPage from '@/views/PortfolioPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: PortfolioPage,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
