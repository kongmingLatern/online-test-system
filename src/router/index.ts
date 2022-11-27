import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/admin',
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/studentInfoUpload',
      component: () => import('@/components/Layout.vue'),
      children: [
        {
          path: 'studentInfoUpload',
          name: 'studentInfoUpload',
          component: () =>
            import('@/pages/admin/StudentInfoUpload.vue'),
        },
        {
          path: 'studentInfoManage',
          name: 'studentInfoManage',
          component: () =>
            import('@/pages/admin/StudentInfoManage.vue'),
        },
        {
          path: 'taskBaseManage',
          name: 'taskBaseManage',
          component: () =>
            import('@/pages/admin/TaskBaseManage.vue'),
        },
        {
          path: 'radioManage',
          name: 'radioManage',
          component: () =>
            import('@/pages/admin/RadioManage.vue'),
        },
        {
          path: 'checkboxManage',
          name: 'checkboxManage',
          component: () =>
            import('@/pages/admin/CheckBoxManage.vue'),
        },
        {
          path: 'judgeManage',
          name: 'judgeManage',
          component: () =>
            import('@/pages/admin/JudgeManage.vue'),
        },
        {
          path: 'gradeManage',
          name: 'gradeManage',
          component: () =>
            import('@/pages/admin/GradeManage.vue'),
        },
        {
          path: 'taskGenerate',
          name: 'taskGenerate',
          component: () =>
            import('@/pages/admin/TaskGenerate.vue'),
        },
        {
          path: 'taskManage',
          name: 'taskManage',
          component: () =>
            import('@/pages/admin/TaskManage.vue'),
        },
      ],
    },
  ],
})

export default router
