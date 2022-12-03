<template>
  <Table />
</template>

<script setup lang="ts">
import { provide } from 'vue'

provide('columnSort', 'queryGrade')
</script>

<style scoped></style>
