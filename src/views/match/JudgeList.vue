<template>
  <div v-for="(item, index) in data" :key="item.questionId" mb-3>
    <p :id="'judge' + (index + 1)">{{ index + 1 }}.{{ item.questionList }}</p>
    <a-radio-group v-model:value="item.questionAnswer">
      <a-space flex="~ col">
        <a-radio
          v-for="(list, index) in item.questionAnswerList"
          :key="list + index"
          :value="item.questionAnswerList[index]"
          @change="handleClick(item, index)"
        >
          {{ String.fromCharCode(index + 65) }}.
          {{ list }}
        </a-radio>
      </a-space>
    </a-radio-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any[];
}>();

const emits = defineEmits<{
  (event: 'selected', ...args: any[]): void;
}>();

const handleClick = (item, index) => {
  emits('selected', item, index);
};
</script>

<style scoped>
:deep(.ant-radio-group) {
  display: flex;
  flex-direction: column;
}
:deep(.ant-space-align-center) {
  align-items: start;
}
</style>
