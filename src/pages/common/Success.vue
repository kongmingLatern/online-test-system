<template>
  <a-result
    status="success"
    title="您已成功交卷"
    sub-title="请耐心等待，您无需操作，3秒后系统会自动进行跳转"
  >
    <template #extra>
      <a-button key="exit" type="primary" @click="exit">
        返回登录
      </a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import router from '@/router'
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    router.push('/login')
  }, 3000)
})

const exit = () => {
  localStorage.clear()
  router.push('/login')
}
</script>
