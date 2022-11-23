<template>
  <a-table
    :columns="columns"
    :data-source="data"
    data-test="table"
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
// defineProps<{
//   columns?: any[]
//   data?: any[]
// }>()

import { inject } from 'vue'

const columns = inject('columns')
const data = inject('data')
</script>
