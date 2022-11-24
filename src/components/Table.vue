<template>
  <a-table
    :columns="columns"
    :data-source="data"
    data-test="table"
  >
    <template #bodyCell="{ column, text, _, index }">
      <template v-if="column.dataIndex === 'no'">
        <span>{{ index + 1 }}</span>
      </template>
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
      <template v-if="column.dataIndex === 'operation'">
        <a-button type="danger">删除</a-button>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { inject } from 'vue'

const columns = inject('columns')
const data = inject('data')
</script>
