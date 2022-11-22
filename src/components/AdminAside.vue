<template>
  <a-sub-menu key="sub1" data-test="sub" @click="goTab">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>学生信息管理</span>
    </template>
    <a-menu-item key="1" data-test="tab">
      <user-outlined />
      <span>学生信息上传</span>
    </a-menu-item>
    <a-menu-item key="2" data-test="tab1">
      <user-outlined />
      <span>学生信息管理</span>
    </a-menu-item>
  </a-sub-menu>
</template>

<script setup lang="ts">
import router from '@/router'
import { UserOutlined } from '@ant-design/icons-vue'

const goTab = () => {
  router.push('/admin/studentInfoUpload')
}
</script>

<style scoped></style>
