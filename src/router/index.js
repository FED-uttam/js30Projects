import { createRouter, createWebHistory } from 'vue-router'
import JSClock from '../components/JSClock.vue'
import ExpenseHeader from '@/components/ExpenseTracker/ExpenseHeader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/jsclock',
      name: 'JSClock',
      component: JSClock
    },
    {
      path: '/expense-tracker',
      name: 'ExpenseHeader',
      component: ExpenseHeader
    }
  ]
})

export default router
