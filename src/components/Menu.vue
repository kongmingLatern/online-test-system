<template>
  <a-menu
    data-test="menu"
    v-model:selectedKeys="current"
    mode="horizontal"
    class="menu"
  >
    <a-menu-item key="index">
      <template #icon>
        <HomeOutlined />
      </template>
      首页
    </a-menu-item>
    <a-menu-item key="task">
      <template #icon>
        <PaperClipOutlined />
      </template>
      试题库
    </a-menu-item>
    <a-menu-item key="grade">
      <template #icon>
        <FileSyncOutlined />
      </template>
      成绩管理
    </a-menu-item>
    <a-menu-item key="personal">
      <template #icon>
        <UserOutlined />
      </template>
      我的考试
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  HomeOutlined,
  PaperClipOutlined,
  FileSyncOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
const current = ref<string[]>(['index'])
</script>

<style scoped>
.menu {
  height: 64px;
  padding: 0 50px;
  /* color: #fff; */
  /* color: rgba(0, 0, 0, 0.85); */
  line-height: 64px;
  background: #001529;
}
:deep(.ant-menu-item-selected) {
  color: skyblue;
}
:deep(.ant-menu-title-content) {
  color: #fff;
}
:deep(.ant-menu-title-content):hover {
  color: skyblue;
}
:deep(.ant-menu-item-icon) {
  color: #fff;
}
</style>
