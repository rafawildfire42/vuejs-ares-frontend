// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/vue/layouts/AppLayout.vue'
import Index from '@/vue/pages/index.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/vue/pages/index.vue'),
      },
      {
        path: 'call-budget',
        name: 'call-budget',
        component: () => import('@/vue/pages/call-budget.vue'),
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: () => import('@/vue/pages/about-us.vue'),
      },
      {
        path: 'contacts',
        name: 'contacts',
        component: () => import('@/vue/pages/contacts.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
