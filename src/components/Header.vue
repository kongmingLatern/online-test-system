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
      right-10
      top-0
      v-if="isShow === 'true'"
    >
      <user-outlined />
      用户名称
    </div>
  </header>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
defineProps<{
  text?: string
  isTitle?: string
  isShow?: string
}>()
</script>

<style scoped>
.ant-layout-header {
  position: relative;
}
</style>
