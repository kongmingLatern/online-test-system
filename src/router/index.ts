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
      redirect: '/admin/studentInfoUpload',
      children: [
        {
          path: 'studentInfoUpload',
          name: 'studentInfoUpload',
          component: () => import('@/pages/admin/StudentInfoUpload.vue')
        }
      ]
    },
  ]
})

export default router
