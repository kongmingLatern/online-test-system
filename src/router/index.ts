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
        },
        {
          path: 'studentInfoManage',
          name: 'studentInfoManage',
          component: () => import('@/pages/admin/StudentInfoManage.vue')
        },
        {
          path: 'taskBase',
          name: 'taskBase',
          component: () => import('@/pages/admin/TaskBaseManage.vue')
        },
        {
          path: 'radio',
          name: 'radio',
          component: () => import('@/pages/admin/RadioManage.vue')
        },
        {
          path: 'checkbox',
          name: 'checkbox',
          component: () => import('@/pages/admin/CheckBoxManage.vue')
        },
        {
          path: 'judge',
          name: 'judge',
          component: () => import('@/pages/admin/JudgeManage.vue')
        },
      ]
    },
  ]
})

export default router
