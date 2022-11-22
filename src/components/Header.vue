<template>
  <header data-test="header">
    <h1 data-test="title" header="title" class="bg-title">
      {{ text || '在线考试系统' }}
    </h1>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<style scoped></style>
