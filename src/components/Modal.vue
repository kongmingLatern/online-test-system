<template>
  <a-modal
    v-model:visible="visible"
    @ok="handleOk"
    data-test="modal"
  >
    <template #title>
      <span data-test="title">{{ title || '添加' }}</span>
    </template>
    <slot name="modalContent"></slot>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{
  title?: string
}>()

const visible = ref<boolean>(false)

const handleOk = (e: MouseEvent) => {
  console.log(e)
  visible.value = false
}
</script>
