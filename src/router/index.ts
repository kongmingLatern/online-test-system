import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/index',
      component: () =>
        import('@/components/MainLayout.vue'),
      children: [
        {
          // 主页
          path: 'index',
          name: 'index',
          component: () =>
            import('@/pages/home/HomeIndex.vue'),
        },
        {
          // 试题库
          path: 'task',
          name: 'task',
          component: () =>
            import('@/pages/home/TaskBase.vue'),
        },
        {
          //成绩管理
          path: 'grade',
          name: 'grade',
          component: () => import('@/pages/home/Grade.vue'),
        },
        {
          // 我的考试
          path: 'personal',
          name: 'personal',
          component: () =>
            import('@/pages/home/Personal.vue'),
        },
      ],
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
        {
          path: 'searchStudentPassword',
          name: 'searchStudentPassword',
          component: () =>
            import(
              '@/pages/admin/SearchStudentPassword.vue'
            ),
        },
        {
          path: 'proctorManage',
          name: 'proctorManage',
          component: () =>
            import('@/pages/admin/ProctorManage.vue'),
        },
        {
          path: 'teacherManage',
          name: 'teacherManage',
          component: () =>
            import('@/pages/admin/TeacherManage.vue'),
        },
      ],
    },
    {
      path: '/match',
      name: 'match',
      component: () => import('@/pages/home/Match.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue'),
    },
  ],
})

export default router
