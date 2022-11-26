<template>
  <div data-test="radioContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="单选题管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="radioNav">
          <template #breadcrumb>
            <BreadCrumb />
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="radioMain" />
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  provide,
  reactive,
  ref,
} from 'vue'
import { RadioColumn } from '@/utils/TableData'
import { getQuestionByCurrentPage } from '@/api/request'
import type { Radio } from '@/utils'

let data = reactive<Radio[]>([])
const totalPage = ref<number>()
const current = ref<number>(1)
const pageSize = ref<number>(10)
const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value,
}))

onMounted(async () => {
  await getQuestionByCurrentPage(
    data,
    1,
    pageSize.value,
    totalPage,
    1
  )
})

const changePage: (
  pagination: any
) => Promise<void> = async pagination => {
  pagination.current = pagination.current
  current.value = pagination.current
  data.length = 0
  getQuestionByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    1
  )
}

provide('columns', RadioColumn)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
