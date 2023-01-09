<template>
  <div v-for="(item, index) in data" :key="item.questionId" mb-3>
    <p :id="'checkbox' + (index + 1)">
      {{ index + 1 }}.{{ item.questionList }}
    </p>
    <a-checkbox-group flex="~ col" v-model:value="item.questionCorrectList">
      <a-checkbox
        v-for="(list, index) in item.questionAnswerList"
        :key="list"
        :value="item.questionAnswerList[index]"
        @change="handleClick(item)"
      >
        {{ String.fromCharCode(index + 65) }}.
        {{ list }}
      </a-checkbox>
    </a-checkbox-group>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any[];
}>();
const emits = defineEmits<{
  (event: 'selected', ...args: any[]): void;
}>();
const handleClick = (item) => {
  console.log(props.data);
  emits('selected', item);
};
</script>

<style scoped>
.ant-checkbox-wrapper {
  margin-bottom: 5px;
}
</style>
