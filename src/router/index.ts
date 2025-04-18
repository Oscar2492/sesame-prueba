import { createRouter, createWebHistory } from 'vue-router'
import RecruitmentBody from '@/views/RecruitmentBody.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RecruitmentBody',
      component: RecruitmentBody,
    },
  ],
})

export default router
