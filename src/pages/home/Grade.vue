<template>
  <Table />
</template>

<script setup lang="ts">
import { getSelfGrade } from '@/api/request'
import { onMounted, provide, reactive } from 'vue'
const data = reactive([])
onMounted(async () => {
  await getSelfGrade(data)
  console.log(data)
})
provide('columnSort', 'queryGrade')
provide('data', data)
</script>

<style scoped></style>
