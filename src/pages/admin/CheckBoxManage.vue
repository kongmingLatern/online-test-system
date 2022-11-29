<template>
  <div data-test="checkBoxContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="多选题管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="checkBoxNav"
          flex="~"
          justify="between"
          mb-3
        >
          <template #breadcrumb>
            <BreadCrumb />
            <a-button
              type="primary"
              float-right
              @click="addCheckbox"
              class="button-blue"
            >
              添加多选题
            </a-button>
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="checkBoxMain" isModal>
          <template #modal>
            <FormItem sort="checkbox" />
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

let data = reactive<Radio[]>([])
const totalPage = ref<number>()
const loading = ref<boolean>(false)
const current = ref<number>(1)
const pageSize = ref<number>(10)
const isShow = ref<boolean>(false)
const addCheckbox = () => {
  isShow.value = true
}

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
    2,
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
    2,
    loading
  )
}

provide('columnSort', 'checkbox')
provide('title', '添加多选题')
provide('isShow', isShow)
provide('loading', loading)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
