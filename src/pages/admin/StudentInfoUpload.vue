<template>
  <div data-test="studentContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="学生信息上传" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="studentNav"
          flex="~"
          justify="between"
          mb-2
        >
          <template #breadcrumb>
            <BreadCrumb />
            <a-button
              type="primary"
              float-right
              @click="addStudent"
            >
              添加学生
            </a-button>
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="studentMain" isModal>
          <template #modal>
            <FormItem sort="teacher" />
          </template>
        </Main>
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
import type { Student } from '@/utils'
import { getStudentDataByCurrentPage } from '@/api/request'
import { StudentColumn } from '@/utils/TableData'
let data = reactive<Student[]>([])
const totalPage = ref<number>()
const current = ref<number>(1)
const pageSize = ref<number>(10)
const loading = ref<boolean>(false)
const isShow = ref<boolean>(false)

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value,
}))

onMounted(async () => {
  await getStudentDataByCurrentPage(
    data,
    1,
    pageSize.value,
    totalPage,
    loading
  )
})

const addStudent = () => {
  isShow.value = true
}

const changePage: (
  pagination: any
) => Promise<void> = async pagination => {
  pagination.current = pagination.current
  current.value = pagination.current
  data.length = 0
  getStudentDataByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  )
}
provide('isShow', isShow)
provide('title', '添加学生')
provide('columns', StudentColumn)
provide('data', data)
provide('loading', loading)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
