<template>
  <div data-test="radioContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="单选题管理" isTitle="true" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav
          data-test="radioNav"
          flex="~"
          justify="between"
          items="center"
          mb-3
        >
          <template #breadcrumb>
            <BreadCrumb :breadcrumb="breadcrumb" />
          </template>
          <template #button>
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
            <FormItem sort="question" />
          </template>
        </Main>
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref } from 'vue';
import { finishQuestionForm, removeQuestion } from '../../api/question';
import { getQuestionByCurrentPage } from '@/api/request';
import type { Radio } from '@/utils';

let data = reactive<Radio[]>([]);
const totalPage = ref<number>();
const loading = ref<boolean>(false);
const current = ref<number>(1);
const isShow = ref<boolean>(false);
const pageSize = ref<number>(10);

const breadcrumb = reactive([
  {
    path: '/admin/taskBaseManage',
    name: '试题库管理'
  },
  {
    name: '多选题管理',
    path: '/admin/checkboxManage'
  },
  {
    name: '判断题管理',
    path: '/admin/judgeManage'
  },
  {
    name: '单选题管理',
    path: '/admin/radioManage'
  }
]);

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value
}));

const addRadio = () => {
  isShow.value = true;
};

onMounted(async () => {
  await getQuestionByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    1,
    loading
  );
});

const changePage: (pagination: any) => Promise<void> = async (pagination) => {
  pagination.current = pagination.current;
  current.value = pagination.current;

  getQuestionByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    1,
    loading
  );
};

provide('columnSort', 'question');
provide('title', '添加单选题');
provide('isShow', isShow);
provide('removeItem', removeQuestion);
provide('loading', loading);
provide('data', data);
provide('finish', finishQuestionForm);
provide('pagination', pagination);
provide('change', changePage);
</script>

<style scoped></style>
