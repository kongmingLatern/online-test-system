<template>
  <div data-test="taskContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="试卷管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="taskNav">
          <template #breadcrumb>
            <BreadCrumb />
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="taskMain" />
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
import { getQuestionByCurrentPage } from '@/api/request'
import type { Radio } from '@/utils'

let data = reactive<Radio[]>([])
const totalPage = ref<number>()
const loading = ref<boolean>(false)
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
    current.value,
    pageSize.value,
    totalPage,
    1,
    loading
  )
})

const changePage: (
  pagination: any
) => Promise<void> = async pagination => {
  pagination.current = pagination.current
  current.value = pagination.current

  getQuestionByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    1,
    loading
  )
}

provide('columnSort', 'radio')
provide('loading', loading)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
