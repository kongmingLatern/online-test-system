<template>
  <a-input-search
    v-model:value="value"
    :placeholder="text || '请输入信息'"
    enter-button
    @search="onSearch"
    data-test="search"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  text?: string;
}>();

const emits = defineEmits<{
  (event: "search", values: string): void;
}>();

const value = ref<string>("");

const onSearch = (values) => {
  emits("search", values);
};
</script>

<style scoped></style>
