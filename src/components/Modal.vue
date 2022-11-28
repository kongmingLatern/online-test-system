<template>
  <a-modal
    v-model:visible="visible"
    @ok="handleOk"
    data-test="modal"
    :footer="null"
  >
    <template #title>
      <span data-test="title">{{ title || '添加' }}</span>
    </template>
    <slot name="modalContent"></slot>
  </a-modal>
</template>
<script lang="ts" setup>
import { inject, type Ref } from 'vue'

const title = inject('title') ?? null
let visible: Ref<boolean | undefined> =
  inject('isShow')! ?? null

const handleOk = (e: MouseEvent) => {
  console.log(e)
  visible.value = false
}
</script>
