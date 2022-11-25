<template>
  <a-table
    :columns="columns"
    :data-source="data"
    data-test="table"
    :pagination="pagination"
    :loading="loading"
    @change="changePage"
  >
    <template #bodyCell="{ column, text, record, index }">
      <template v-if="column.dataIndex === 'no'">
        <span>{{ index + 1 }}</span>
      </template>
      <template
        v-if="column.dataIndex === 'questionAnswer'"
      >
        <span>{{ record.questionAnswer }}</span>
      </template>
      <template
        v-if="column.dataIndex === 'questionCorrect'"
      >
        <span>{{ record.questionCorrect }}</span>
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
import { inject, ref } from 'vue'

const columns = inject('columns')
const data = inject('data')
const pagination = inject('pagination')
const change: ((pagination: any) => void) | null =
  inject('change') ?? null
const loading = ref<boolean>(false)

// TODO: 孙传爷
const changePage = pagination => {
  loading.value = true
  change!(pagination)
  loading.value = false
}
</script>
