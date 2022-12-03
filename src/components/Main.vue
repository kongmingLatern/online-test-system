<template>
  <div>
    <!-- NOTE:模态框---(表单)-->
    <!-- FLAG:(isModal): -->
    <Modal type="content" v-if="isModal" data-test="main-modal">
      <template #modalContent>
        <slot name="modal"></slot>
      </template>
    </Modal>
    <!-- NOTE:模态框——导入信息 -->
    <!-- FLAG:(isImport): -->
    <Modal type="import" v-if="isImport" data-test="main-modal-import">
      <template #modalContent>
        <slot name="import"></slot>
      </template>
    </Modal>
    <!-- NOTE:普通信息 -->
    <!-- FLAG:(isCommon): -->
    <Modal type="common" v-if="isCommon" data-test="main-modal-common">
      <template #modalContent>
        <slot name="common"></slot>
      </template>
    </Modal>

    <!-- NOTE:表格 -->
    <Table />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isModal?: boolean;
  isImport?: boolean;
  isCommon?: boolean;
}>();
</script>

<style scoped></style>
