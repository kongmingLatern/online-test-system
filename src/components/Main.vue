<template>
  <div>
    <Modal v-if="isModal" data-test="main-modal">
      <template #modalContent>
        <slot name="modal"></slot>
      </template>
    </Modal>
    <Table />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isModal?: boolean
}>()
</script>

<style scoped></style>
