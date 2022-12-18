<template>
  <a-table
    :columns="columns"
    :data-source="data"
    data-test="table"
    :pagination="pagination"
    :loading="loading"
    @change="changePage"
    :scroll="{ x: '100%', y: '100%' }"
  >
    <template #bodyCell="{ column, text, record, index }">
      <template v-if="column.dataIndex === 'no'">
        <span>{{ index + 1 }}</span>
      </template>
      <template v-if="column.dataIndex === 'status'">
        <a-tag
          v-if="record.status === '考完了'"
          color="red"
        >
          {{ record.status }}
        </a-tag>
        <a-tag
          v-if="record.status === '考试中'"
          color="green"
        >
          {{ record.status }}
        </a-tag>
        <a-tag v-if="record.status === '未开考'">
          {{ record.status }}
        </a-tag>
        <a-tag
          v-if="record.status === '作弊'"
          bg-red
          text-2
          rounded
          color-white
        >
          {{ record.status }}
        </a-tag>
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
        <a-button
          type="danger"
          rounded
          @click="deleteItem(record)"
        >
          删除
        </a-button>
      </template>
      <template v-if="column.dataIndex === 'deleteAndAuth'">
        <a-space>
          <a-button
            type="danger"
            rounded
            @click="authItem(record)"
          >
            授权
          </a-button>
        </a-space>
      </template>
      <template v-if="column.dataIndex === 'student'">
        <a-space>
          <a-button
            type="danger"
            rounded
            @click="deleteItem(record)"
          >
            删除
          </a-button>
        </a-space>
      </template>
      <template v-if="column.dataIndex === 'grade'">
        <a-tag v-if="record.grade < 60" color="red" text-sm>
          {{ record.grade }}
        </a-tag>
        <a-tag
          v-else-if="record.grade >= 60"
          color="green"
          text-sm
        >
          {{ record.grade }}
        </a-tag>
      </template>
      <template v-if="column.dataIndex === 'allocation'">
        <a-button
          type="danger"
          @click="allocationTask(record)"
        >
          分配考试
        </a-button>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
import { getColumn } from '@/utils'
import { inject } from 'vue'

const columnSort = inject('columnSort')
const data = inject('data')
const loading = inject('loading')
const pagination = inject('pagination')
const change: any = inject('change') ?? null
const removeItem: any = inject('removeItem') ?? null
const allocation: any = inject('allocation') ?? null
const auth: any = inject('authItem') ?? null
// const reset: any = inject('resetItem') ?? null

const columns = getColumn(columnSort)

// NOTE: 孙传爷
const changePage = pagination => {
  change(pagination)
}

const deleteItem = record => {
  removeItem(record)
}

const allocationTask = record => {
  allocation(record)
}

const authItem = record => {
  auth(record)
}

// const resetItem = record => reset(record)
</script>
