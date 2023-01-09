<template>
  <a-result
    status="success"
    title="您已成功交卷"
    sub-title="请耐心等待，您无需操作，3秒后系统会自动进行跳转至主页"
  >
    <template #extra>
      <a-button key="exit" type="primary" @click="exit"> 返回主页 </a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import router from '@/router';
import { onMounted } from 'vue';

onMounted(() => {
  setTimeout(() => {
    router.push('/home');
  }, 3000);
});

const exit = () => {
  router.push('/home');
};
</script>
