<template>
  <div v-for="(item, index) in data">
    <p>{{ index + 1 }}.{{ item.questionList }}</p>
    <a-checkbox-group v-model:value="value">
      <a-checkbox
        v-for="(list, index) in item.questionAnswerList"
        :value="item.questionAnswerList[index].answer"
      >
        {{ String.fromCharCode(index + 65) }}.
        {{ list }}
      </a-checkbox>
    </a-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref<string[]>([])
const props = defineProps<{
  data: any[]
}>()
console.log('多选题', props.data)
</script>

<style scoped></style>
