<template>
  <a-list bordered :data-source="data">
    <template #renderItem="{ item, index }">
      <a-list-item>
        <a-tag>
          <span mr-3 rounded>{{ index + 1 }}</span>
          <a-tag color="red" text-sm>{{ item }}</a-tag>
        </a-tag>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
const data: string[] = [
  '高等数学A 2021-06-01 08:00',
  '高等数学A 2021-06-01 08:00',
  '高等数学A 2021-06-01 08:00',
  '高等数学A 2021-06-01 08:00',
  '高等数学A 2021-06-01 08:00',
]
</script>

<style scoped></style>
