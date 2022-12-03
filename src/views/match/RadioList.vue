<template>
  <div v-for="(item, index) in data">
    <p>{{ index + 1 }}.{{ item.questionList }}</p>
    <a-radio-group v-model:value="value">
      <a-radio
        v-for="(list, index) in item.questionAnswerList"
        :value="item.questionAnswerList[index].answer"
      >
        {{ String.fromCharCode(index + 65) }}.
        {{ list }}
      </a-radio>
    </a-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string>('')
const props = defineProps<{
  data: any[]
}>()
console.log('单选题', props.data)
</script>

<style scoped></style>
