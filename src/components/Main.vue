<template>
  <div>
    <Modal v-if="isModal" data-test="main-modal" />
    <Table />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isModal?: boolean
}>()
</script>

<style scoped></style>
