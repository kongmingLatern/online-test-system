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
      <template v-if="column.dataIndex === 'detail'">
        <a>点击查看详情</a>
      </template>
      <template v-if="column.dataIndex === 'delete'">
        <a-button type="danger" rounded>删除</a-button>
      </template>
      <template v-if="column.dataIndex === 'student'">
        <a-space>
          <a-button type="primary" rounded>
            重置密码
          </a-button>
          <a-button type="danger" rounded>删除</a-button>
        </a-space>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { inject } from 'vue'

const columns = inject('columns')
const data = inject('data')
</script>
