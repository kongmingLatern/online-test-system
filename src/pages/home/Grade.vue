<template>
  <div mt-5>
    <Table />
  </div>
</template>

<script setup lang="ts">
import { getSelfGrade } from '@/api/request';
import { onMounted, provide, reactive } from 'vue';
const data = reactive([]);
onMounted(async () => {
  await getSelfGrade(data);
});
provide('columnSort', 'queryGrade');
provide('data', data);
</script>

<style scoped></style>
