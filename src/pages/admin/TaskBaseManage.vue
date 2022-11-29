<template>
  <div data-test="taskBaseContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="试题库管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="taskBaseNav">
          <template #breadcrumb>
            <BreadCrumb />
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="taskBaseMain" />
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
import { getBasesByCurrentPage } from '@/api/request'
import type { Task } from '@/utils'
let data = reactive<Task[]>([])
const totalPage = ref<number>()
const current = ref<number>(1)
const pageSize = ref<number>(10)
const loading = ref<boolean>(false)
const isShow = ref<boolean>(false)
const impShow = ref<boolean>(false)

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value,
}))

onMounted(async () => {
  await getBasesByCurrentPage(
    data,
    1,
    pageSize.value,
    totalPage,
    loading
  )
})

const changePage: (
  pagination: any
) => Promise<void> = async pagination => {
  pagination.current = pagination.current
  current.value = pagination.current
  data.length = 0
  getBasesByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  )
}

provide('isShow', isShow)
provide('impShow', impShow)
provide('columnSort', 'task')
provide('data', data)
provide('loading', loading)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
