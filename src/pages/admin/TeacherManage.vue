<template>
  <div data-test="teacherContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="教师管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="teacherNav"
          flex="~"
          justify="between"
          mb-3
        >
          <template #breadcrumb>
            <BreadCrumb />
            <a-button
              class="button-blue"
              rounded
              @click="addTeacher"
            >
              添加教师
            </a-button>
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="teacherMain" isModal>
          <template #modal>
            <FormItem sort="teacher" />
          </template>
        </Main>
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { getTeachersByCurrentPage } from '@/api/request'
import type { Teacher } from '@/utils'
import {
  computed,
  onMounted,
  provide,
  reactive,
  ref,
} from 'vue'
import { finishForm } from '../../api/teacher'

let data = reactive<Teacher[]>([])
const totalPage = ref<number>()
const loading = ref<boolean>(false)
const current = ref<number>(1)
const isShow = ref<boolean>(false)
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

const addTeacher = () => {
  isShow.value = true
}

provide('columnSort', 'teacher')
provide('finish', finishForm)
provide('title', '添加教师')
provide('isShow', isShow)
provide('loading', loading)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
