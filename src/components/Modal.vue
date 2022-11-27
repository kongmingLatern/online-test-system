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
import { inject, ref, type Ref } from 'vue'

defineProps<{
  title?: string
}>()

let visible: Ref<boolean | undefined> = inject('isShow')!

const handleOk = (e: MouseEvent) => {
  console.log(e)
  visible.value = false
}
</script>
