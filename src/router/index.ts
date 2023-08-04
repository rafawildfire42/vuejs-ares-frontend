// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/vue/layouts/AppLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/pages/index.vue'),
      },
      {
        path: 'orcamento',
        name: 'call-budget',
        component: () => import('@/pages/call-budget.vue'),
      },
      {
        path: 'sobre-nos',
        name: 'about-us',
        component: () => import('@/pages/about-us.vue'),
      },
      {
        path: 'cursos',
        name: 'courses',
        component: () => import('@/pages/courses.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
