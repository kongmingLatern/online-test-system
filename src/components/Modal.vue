<template>
  <a-modal
    v-model:visible="visible"
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

const props = defineProps<{
  type?: string
}>()

const title = inject('title') ?? null
let visible: Ref<boolean | undefined> =
  props.type === 'content'
    ? inject('isShow')!
    : inject('impShow')!
</script>
