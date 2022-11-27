<template>
  <div data-test="teacherContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="教师管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="teacherNav">
          <template #breadcrumb>
            <BreadCrumb />
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="teacherMain" />
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { getTeachersByCurrentPage } from '@/api/request'
import type { Teacher } from '@/utils'
import { TeacherColumn } from '@/utils/TableData'
import {
  computed,
  onMounted,
  provide,
  reactive,
  ref,
} from 'vue'

let data = reactive<Teacher[]>([])
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
  await getTeachersByCurrentPage(
    data,
    current.value,
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

  getTeachersByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  )
}

provide('columns', TeacherColumn)
provide('loading', loading)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
