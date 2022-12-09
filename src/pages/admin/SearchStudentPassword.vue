<template>
  <div data-test="searchStudentPasswordContent">
    <Content>
      <template #header>
        <Header text="查询学生密码" isTitle="true" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="searchStudentPasswordNav">
          <template #breadcrumb>
            <!-- <BreadCrumb /> -->
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="searchStudentPasswordMain" />
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
import type Match from '@/utils/Task/Match'
import { getMatchsByCurrentPage } from '@/api/request'

let data = reactive<Match[]>([])
const totalPage = ref<number>()
const current = ref<number>(1)
const pageSize = ref<number>(10)
const loading = ref<boolean>(false)
const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value,
}))

onMounted(async () => {
  await getMatchsByCurrentPage(
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
  getMatchsByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  )
}

provide('columnSort', 'searchPassword')
provide('data', data)
provide('pagination', pagination)
provide('loading', loading)
provide('change', changePage)
</script>

<style scoped></style>
