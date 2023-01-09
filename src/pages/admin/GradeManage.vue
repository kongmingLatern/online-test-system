<template>
  <div data-test="gradeContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="成绩管理" isTitle="true" />
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="gradeMain" />
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref } from 'vue';
import { getGradeByCurrentPage } from '@/api/request';
import type { Grade } from '@/utils';

let data = reactive<Grade[]>([]);
const totalPage = ref<number>();
const loading = ref<boolean>(false);
const current = ref<number>(1);
const pageSize = ref<number>(10);

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value
}));

onMounted(async () => {
  await getGradeByCurrentPage(
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

  await getGradeByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  );
};

provide('columnSort', 'grade');
provide('loading', loading);
provide('data', data);
provide('pagination', pagination);
provide('change', changePage);
</script>

<style scoped></style>
