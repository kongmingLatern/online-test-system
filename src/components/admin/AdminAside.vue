<template>
  <a-sub-menu key="student" data-test="student">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>学生信息管理</span>
    </template>
    <a-menu-item
      key="studentInfoUpload"
      data-test="studentInfoUpload"
      @click="goPath('/studentInfoUpload')"
    >
      <user-outlined />
      <span>学生信息上传</span>
    </a-menu-item>
    <a-menu-item
      key="studentInfoManage"
      data-test="studentInfoManage"
      @click="goPath('/studentInfoManage')"
    >
      <user-outlined />
      <span>学生信息管理</span>
    </a-menu-item>
  </a-sub-menu>
  <a-sub-menu key="question" data-test="question">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>试题管理</span>
    </template>
    <a-menu-item
      key="taskBase"
      data-test="taskBase"
      @click="goPath('/taskBaseManage')"
    >
      <user-outlined />
      <span>试题库管理</span>
    </a-menu-item>
    <a-menu-item key="radio" data-test="radio" @click="goPath('/radioManage')">
      <user-outlined />
      <span>单选题管理</span>
    </a-menu-item>

    <a-menu-item
      key="checkbox"
      data-test="checkbox"
      @click="goPath('/checkboxManage')"
    >
      <user-outlined />
      <span>多选题管理</span>
    </a-menu-item>
    <a-menu-item key="judge" data-test="judge" @click="goPath('/judgeManage')">
      <user-outlined />
      <span>判断题管理</span>
    </a-menu-item>
  </a-sub-menu>
  <a-sub-menu key="grade" data-test="grade">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>成绩管理</span>
    </template>
    <a-menu-item key="grade" data-test="grade" @click="goPath('/gradeManage')">
      <user-outlined />
      <span>成绩管理</span>
    </a-menu-item>
  </a-sub-menu>
  <a-sub-menu key="task" data-test="task">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>试卷管理</span>
    </template>
    <a-menu-item
      key="taskGenerate"
      data-test="taskGenerate"
      @click="goPath('/taskGenerate')"
    >
      <user-outlined />
      <span>试卷生成</span>
    </a-menu-item>
    <a-menu-item
      key="taskManage"
      data-test="taskManage"
      @click="goPath('/taskManage')"
    >
      <user-outlined />
      <span>试卷管理</span>
    </a-menu-item>
  </a-sub-menu>
  <a-sub-menu key="proctor" data-test="proctor">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>监考管理</span>
    </template>
    <a-menu-item
      key="searchStudentPassword"
      data-test="searchStudentPassword"
      @click="goPath('/searchStudentPassword')"
    >
      查询考生密码
    </a-menu-item>
  </a-sub-menu>
  <a-sub-menu key="teacher" data-test="teacher">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>高级管理</span>
    </template>
    <a-menu-item
      key="teacherManage"
      data-test="teacherManage"
      @click="goPath('/teacherManage')"
    >
      教师管理
    </a-menu-item>
  </a-sub-menu>
</template>

<script setup lang="ts">
import router from '@/router';
import { UserOutlined } from '@ant-design/icons-vue';

const goPath = (path: string) => {
  router.push('/admin' + path);
};
</script>

<style scoped></style>
