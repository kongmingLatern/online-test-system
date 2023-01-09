<template>
  <a-menu
    data-test="menu"
    v-model:selectedKeys="current"
    mode="horizontal"
    class="menu"
  >
    <a-menu-item key="index" @click="goRouter('/index')">
      <template #icon>
        <HomeOutlined />
      </template>
      首页
    </a-menu-item>
    <a-menu-item key="grade" @click="goRouter('/grade')">
      <template #icon>
        <FileSyncOutlined />
      </template>
      查看成绩
    </a-menu-item>
    <a-menu-item key="personal" @click="goRouter('/personal')">
      <template #icon>
        <UserOutlined />
      </template>
      我的考试
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
  HomeOutlined,
  FileSyncOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
import router from '@/router';
const current = ref<string[]>(['index']);
const goRouter = (path: string) => {
  router.push('/home' + path);
};
</script>

<style scoped>
.menu {
  height: 64px;
  padding: 0 50px;
  border: unset;
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
