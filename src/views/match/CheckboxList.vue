<template>
  <div v-for="(item, index) in data">
    <p :id="'checkbox' + (index + 1)">
      {{ index + 1 }}.{{ item.questionList }}
    </p>
    <a-checkbox-group
      v-model:value="item.questionCorrectList"
    >
      <a-checkbox
        v-for="(list, index) in item.questionAnswerList"
        :value="item.questionAnswerList[index]"
        @change="handleClick"
      >
        {{ String.fromCharCode(index + 65) }}.
        {{ list }}
      </a-checkbox>
    </a-checkbox-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any[]
}>()
const handleClick = e => {
  console.log(props.data)
}
console.log('多选题', props.data)
</script>

<style scoped></style>
