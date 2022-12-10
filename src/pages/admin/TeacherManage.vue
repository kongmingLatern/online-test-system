<template>
  <div data-test="teacherContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="教师管理" isTitle="true" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="teacherNav"
          flex="~"
          justify="between"
          items="center"
          mb-3
        >
          <template #breadcrumb>
            <BreadCrumb :breadcrumb="breadcrumb" />
          </template>
          <template #button>
            <a-space>
              <a-button
                class="button-blue"
                rounded
                @click="addTeacher"
              >
                添加教师
              </a-button>
              <a-button
                type="primary"
                class="button-green"
                rounded
                @click="addSubject"
              >
                添加教学科目
              </a-button>
            </a-space>
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="teacherMain" isModal isCommon>
          <template #modal>
            <FormItem sort="teacher" />
          </template>
          <template #common>
            <FormItem sort="teacherAdd" isSelected />
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
import {
  finishAddForm,
  finishForm,
} from '../../api/teacher'

let data = reactive<Teacher[]>([])
const totalPage = ref<number>()
const loading = ref<boolean>(false)
const comShow = ref<boolean>(false)
const current = ref<number>(1)
const isShow = ref<boolean>(false)
const pageSize = ref<number>(10)

const breadcrumb = reactive([
  {
    name: '首页',
    path: '/admin',
  },
  {
    name: '教师管理',
    path: '/admin/teacher',
  },
])

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

const addSubject = async () => {
  comShow.value = true
}

provide('columnSort', 'teacher')
provide('finish', finishForm)
provide('title', '添加')
provide('isShow', isShow)
provide('comShow', comShow)
provide('loading', loading)
provide('data', data)
provide('addItem', addSubject)
provide('pagination', pagination)
provide('change', changePage)
provide('select', finishAddForm(comShow))
</script>

<style scoped></style>
