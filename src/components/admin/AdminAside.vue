<template>
  <a-sub-menu key="sub1" data-test="sub">
    <template #icon>
      <user-outlined />
    </template>
    <template #title>
      <span>学生信息管理</span>
    </template>
    <a-menu-item key="1" data-test="tab">
      <user-outlined />
      <span @click="goTab('/studentInfoUpload')">
        学生信息上传
      </span>
    </a-menu-item>
    <a-menu-item key="2" data-test="tab1">
      <user-outlined />
      <span @click="goTab('/studentInfoManage')">
        学生信息管理
      </span>
    </a-menu-item>
  </a-sub-menu>
</template>

<script setup lang="ts">
import router from '@/router'
import { UserOutlined } from '@ant-design/icons-vue'
const emit = defineEmits<{
  (event: 'openKeys', ...args: any[]): void
}>()

const goTab = (path: string) => {
  router.replace('/admin' + path)
  emit('openKeys', ['sub1'])
}
</script>

<style scoped></style>
