import { message } from 'ant-design-vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      redirect: '/login',
      meta: {
        title: '在线考试系统'
      }
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/index',
      component: () => import('@/components/MainLayout.vue'),
      children: [
        {
          // 主页
          path: 'index',
          name: 'index',
          component: () => import('@/pages/home/HomeIndex.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          // 试题库
          path: 'task',
          name: 'task',
          component: () => import('@/pages/home/TaskBase.vue'),
          meta: {
            title: '试题库'
          }
        },
        {
          //成绩管理
          path: 'grade',
          name: 'grade',
          component: () => import('@/pages/home/Grade.vue'),
          meta: {
            title: '成绩查询'
          }
        },
        {
          // 我的考试
          path: 'personal',
          name: 'personal',
          component: () => import('@/pages/home/Personal.vue'),
          meta: {
            title: '我的考试'
          }
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      redirect: '/admin/studentInfoUpload',
      component: () => import('@/components/Layout.vue'),
      beforeEnter: (to, from, next) => {
        const role = Number.parseInt(
          (localStorage.getItem('identity') as string) ||
            (localStorage.getItem('isAuth') as string)
        );
        if (role === 1) {
          next();
        } else {
          message.error('您没有权限访问此页面');
          next('/home/index');
        }
      },
      children: [
        {
          path: 'studentInfoUpload',
          name: 'studentInfoUpload',
          component: () => import('@/pages/admin/StudentInfoUpload.vue'),
          meta: {
            title: '学生信息上传'
          }
        },
        {
          path: 'studentInfoManage',
          name: 'studentInfoManage',
          component: () => import('@/pages/admin/StudentInfoManage.vue'),
          meta: {
            title: '学生信息管理'
          }
        },
        {
          path: 'taskBaseManage',
          name: 'taskBaseManage',
          component: () => import('@/pages/admin/TaskBaseManage.vue'),
          meta: {
            title: '试题库管理'
          }
        },
        {
          path: 'radioManage',
          name: 'radioManage',
          component: () => import('@/pages/admin/RadioManage.vue'),
          meta: {
            title: '单选题管理'
          }
        },
        {
          path: 'checkboxManage',
          name: 'checkboxManage',
          component: () => import('@/pages/admin/CheckBoxManage.vue'),
          meta: {
            title: '多选题管理'
          }
        },
        {
          path: 'judgeManage',
          name: 'judgeManage',
          component: () => import('@/pages/admin/JudgeManage.vue'),
          meta: {
            title: '判断题管理'
          }
        },
        {
          path: 'gradeManage',
          name: 'gradeManage',
          component: () => import('@/pages/admin/GradeManage.vue'),
          meta: {
            title: '成绩管理'
          }
        },
        {
          path: 'taskGenerate',
          name: 'taskGenerate',
          component: () => import('@/pages/admin/TaskGenerate.vue'),
          meta: {
            title: '试卷生成'
          }
        },
        {
          path: 'taskManage',
          name: 'taskManage',
          component: () => import('@/pages/admin/TaskManage.vue'),
          meta: {
            title: '试卷管理'
          }
        },
        {
          path: 'searchStudentPassword',
          name: 'searchStudentPassword',
          component: () => import('@/pages/admin/SearchStudentPassword.vue'),
          meta: {
            title: '查询考生密码'
          }
        },
        {
          path: 'teacherManage',
          name: 'teacherManage',
          component: () => import('@/pages/admin/TeacherManage.vue'),
          meta: {
            title: '教师管理'
          }
        }
      ]
    },
    {
      path: '/match',
      name: 'match',
      component: () => import('@/pages/home/Match.vue'),
      meta: {
        title: '在线考试'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/pages/common/Success.vue'),
      meta: {
        title: '提交成功'
      }
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/pages/common/404.vue'),
      meta: {
        title: '404 NOT FOUND'
      }
    }
  ]
});
// 路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  if (to.path === '/login') {
    localStorage.clear();
    next();
  } else {
    next();
  }
});

export default router;
