<template>
  <div v-for="(item, index) in data">
    <p :id="'judge' + (index + 1)">
      {{ index + 1 }}.{{ item.questionList }}
    </p>
    <a-radio-group v-model:value="item.questionAnswer">
      <a-radio
        v-for="(list, index) in item.questionAnswerList"
        :value="item.questionAnswerList[index]"
        @change="handleClick(item, index)"
      >
        {{ String.fromCharCode(index + 65) }}.
        {{ list }}
      </a-radio>
    </a-radio-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any[]
}>()

const emits = defineEmits<{
  (event: 'selected', ...args: any[]): void
}>()

const handleClick = (item, index) => {
  console.log(props.data)
  emits('selected', item, index)
}
</script>

<style scoped></style>
