<template>
  <div data-test="taskBaseContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="试题库管理" isTitle="true" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="taskBaseNav"
          flex
          justify="between"
          items="center"
          mb-2
        >
          <template #breadcrumb>
            <BreadCrumb :breadcrumb="breadcrumb" />
          </template>
          <template #button>
            <a-button
              type="primary"
              class="button-green"
              @click="importBase"
            >
              导入题库
            </a-button>
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="taskBaseMain" isImport>
          <template #import>
            <ImportInfo sort="list" />
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
import { getBasesByCurrentPage } from '@/api/request'
import type { Task } from '@/utils'
import { finishForm, removeBase } from '@/api/base'
let data = reactive<Task[]>([])
const totalPage = ref<number>()
const current = ref<number>(1)
const pageSize = ref<number>(10)
const loading = ref<boolean>(false)
const isShow = ref<boolean>(false)
const impShow = ref<boolean>(false)

const breadcrumb = reactive([
  {
    name: '单选题管理',
    path: '/admin/radioManage',
  },
  {
    name: '多选题管理',
    path: '/admin/checkboxManage',
  },
  {
    name: '判断题管理',
    path: '/admin/judgeManage',
  },
  {
    name: '试题库管理',
    path: '/admin/taskBaseManage',
  },
])

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

const importBase = () => {
  impShow.value = true
}
provide('isShow', isShow)
provide('title', '导入试题')
provide('impShow', impShow)
provide('columnSort', 'task')
provide('data', data)
provide('loading', loading)
provide('removeItem', removeBase)
provide('pagination', pagination)
provide('finish', finishForm(loading))
provide('change', changePage)
</script>

<style scoped></style>
