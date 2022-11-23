<template>
  <header data-test="header">
    <h1
      data-test="title"
      header="title"
      :class="
        isTitle ? 'color-black font-semibold pl-0' : 'bg-title'
      "
    >
      {{ text || '在线考试系统' }}
    </h1>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
  isTitle?: string
}>()
</script>

<style scoped></style>
