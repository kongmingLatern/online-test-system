<template>
  <div v-for="(item, index) in data">
    <p :id="'question' + (index + 1)">
      {{ index + 1 }}.{{ item.questionList }}
    </p>
    <a-radio-group v-model:value="item.questionCorrectList">
      <a-radio
        v-for="(list, index) in item.questionAnswerList"
        :value="item.questionAnswerList[index]"
        @change="handleClick"
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
console.log('单选题', props.data)
const emits = defineEmits<{
  (event: 'selected', ...args: any[]): void
}>()

const handleClick = (e: any) => {
  emits('selected', e)
}
</script>

<style scoped></style>
