<template>
  <div>
    <Modal
      type="content"
      v-if="isModal"
      data-test="main-modal"
    >
      <template #modalContent>
        <slot name="modal"></slot>
      </template>
    </Modal>
    <Modal
      type="import"
      v-if="isImport"
      data-test="main-modal-import"
    >
      <template #modalContent>
        <slot name="import"></slot>
      </template>
    </Modal>
    <Modal
      type="common"
      v-if="isCommon"
      data-test="main-modal-common"
    >
      <template #modalContent>
        <slot name="common"></slot>
      </template>
    </Modal>
    <Table />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isModal?: boolean
  isImport?: boolean
  isCommon?: boolean
}>()
</script>

<style scoped></style>
