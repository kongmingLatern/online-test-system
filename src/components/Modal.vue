<template>
  <a-modal
    v-model:visible="visible"
    data-test="modal"
    :footer="null"
    :width="width"
  >
    <template #title>
      <span
        data-test="title"
        :class="
          isMatch ? 'text-center text-lg font-bold' : null
        "
      >
        {{ title }}
      </span>
    </template>
    <slot name="modalContent"></slot>
  </a-modal>
</template>
<script lang="ts" setup>
import { inject, type Ref } from 'vue'

const props = defineProps<{
  type?: string
  width?: string
  isMatch?: boolean
}>()

const title = inject('title') ?? null
let visible: Ref<boolean | undefined> =
  props.type === 'content'
    ? inject('isShow')!
    : props.type === 'import'
    ? inject('impShow')!
    : inject('comShow')!
</script>

<style lang="scss">
.full-modal {
  .ant-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }
  .ant-modal-body {
    flex: 1;
  }
}
</style>
