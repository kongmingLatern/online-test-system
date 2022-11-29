<template>
  <div data-test="radioContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="单选题管理" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="radioNav"
          flex="~"
          justify="between"
          mb-3
        >
          <template #breadcrumb>
            <BreadCrumb />
            <a-button
              type="primary"
              float-right
              @click="addRadio"
              class="button-blue"
            >
              添加单选题
            </a-button>
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="radioMain" isModal>
          <template #modal>
            <FormItem sort="radio" />
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
const isShow = ref<boolean>(false)
const pageSize = ref<number>(10)

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value,
}))

const addRadio = () => {
  isShow.value = true
}

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
provide('title', '添加单选题')
provide('isShow', isShow)
provide('loading', loading)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
