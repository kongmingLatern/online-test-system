<template>
  <a-list bordered :data-source="data">
    <template #renderItem="{ item, index }">
      <a-list-item hover="bg-red color-white">
        <div>
          <span mr-2 text-sm>{{ index + 1 }}</span>
          <a-tag color="red" text-sm>{{ item }}</a-tag>
        </div>
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
