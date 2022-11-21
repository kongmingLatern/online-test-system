import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/admin'
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/studentUpload',
      children: [
        {
          path: 'studentUpload',
          name: 'studentUpload',
          component: () => import('@/pages/admin/StudentInfoUpload.vue')
        }
      ]
    },
  ]
})

export default router
