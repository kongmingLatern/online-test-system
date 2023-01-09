<template>
  <div data-test="taskContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="试卷管理" isTitle="true" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="taskNav" mb-2>
          <template #breadcrumb>
            <BreadCrumb :breadcrumb="breadcrumb" />
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="taskMain" isModal>
          <template #modal>
            <FormItem sort="classList" />
          </template>
        </Main>
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref } from 'vue';
import { getTasksByCurrentPage } from '../../api/request';
import type { Radio } from '@/utils';
import { addClassList } from '@/api/match';

let data = reactive<Radio[]>([]);
const isShow = ref<boolean>(false);
const totalPage = ref<number>();
const loading = ref<boolean>(false);
const current = ref<number>(1);
const pageSize = ref<number>(10);
const taskId = ref<string>('');

const breadcrumb = reactive([
  {
    name: '试卷生成',
    path: '/admin/taskGenerate'
  },
  {
    name: '试卷管理',
    path: '/admin/taskManage'
  }
]);

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value
}));

onMounted(async () => {
  await getTasksByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  );
});

const changePage: (pagination: any) => Promise<void> = async (pagination) => {
  pagination.current = pagination.current;
  current.value = pagination.current;

  getTasksByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  );
};

const allocation = (record) => {
  // console.log(record)
  taskId.value = record.taskId;
  isShow.value = true;
};

provide('title', '分配考试');
provide('finish', addClassList);
provide('taskId', taskId);
provide('isShow', isShow);
provide('columnSort', 'taskInfo');
provide('allocation', allocation);
provide('loading', loading);
provide('data', data);
provide('pagination', pagination);
provide('change', changePage);
</script>

<style scoped></style>
