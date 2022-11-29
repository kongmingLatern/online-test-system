<template>
  <div data-test="judgeContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="判断题管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="judgeNav"
          flex="~"
          justify="between"
          mb-3
        >
          <template #breadcrumb>
            <BreadCrumb />
            <a-button
              type="primary"
              float-right
              @click="addJudge"
              class="button-blue"
            >
              添加判断题
            </a-button>
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="judgeMain" isModal>
          <template #modal>
            <FormItem sort="judge" />
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
import { getQuestionByCurrentPage } from '@/api/request'
import type { Radio } from '@/utils'
import { getColumn } from '@/utils/column'

let data = reactive<Radio[]>([])
const totalPage = ref<number>()
const loading = ref<boolean>(false)
const current = ref<number>(1)
const pageSize = ref<number>(10)
const isShow = ref<boolean>(false)

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
    3,
    loading
  )
})

const addJudge = () => {
  isShow.value = true
}

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
    3,
    loading
  )
}

provide('columns', getColumn('judge'))
provide('title', '添加判断题')
provide('isShow', isShow)
provide('loading', loading)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
