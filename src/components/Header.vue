<template>
  <header data-test="header" flex relative class="width">
    <h1
      data-test="title"
      header="title"
      :class="
        isTitle
          ? 'color-black font-semibold pl-0'
          : 'bg-title'
      "
    >
      {{ text || '在线考试系统' }}
    </h1>
    <slot name="menu"></slot>
    <div color-white absolute right-0>
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
}>()
</script>

<style scoped>
.width {
  width: 100%;
}
</style>
