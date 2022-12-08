<template>
  <header
    data-test="header"
    :class="isTitle === 'true' ? '' : 'flex'"
  >
    <h1
      data-test="title"
      header="title"
      :class="
        isTitle === 'true'
          ? 'color-black font-semibold pl-0'
          : 'bg-title'
      "
    >
      {{ text || '在线考试系统' }}
    </h1>
    <slot name="menu"></slot>
    <div
      color-white
      absolute
      top-0
      right-0
      sm:right-2
      md:right-5
      lg:right-10
      v-if="isShow === 'true'"
    >
      <user-outlined />
      {{ username }}

      <a-button type="primary" ml-4 @click="exit">
        退出登录
      </a-button>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from '@/router'
import { UserOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
defineProps<{
  text?: string
  isTitle?: string
  isShow?: string
}>()

const username = localStorage.getItem('username')

const exit = () => {
  localStorage.clear()
  router.push('/login')
  message.success('退出成功')
}
</script>

<style lang="scss" scoped>
.ant-layout-header {
  position: relative;
}
</style>
