<template>
  <div data-test="studentContent">
    <Content>
      <template #header>
        <Header text="学生信息管理" isTitle="true" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="studentNav" flex justify="between" items="center" mb-3>
          <template #breadcrumb>
            <BreadCrumb :breadcrumb="breadcrumb" />
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="studentMain" />
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, reactive, ref } from 'vue';
import { removeStudent } from '../../api/student';
import { getStudentDataByCurrentPage } from '@/api/request';
import type { Student } from '@/utils';

let data = reactive<Student[]>([]);
const totalPage = ref<number>();
const current = ref<number>(1);
const pageSize = ref<number>(10);
const loading = ref<boolean>(false);

const breadcrumb = reactive([
  {
    name: '学生信息上传',
    path: '/admin/studentInfoUpload'
  },
  {
    name: '学生信息管理',
    path: '/admin/studentInfoManage'
  }
]);

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value
}));

onMounted(async () => {
  await getStudentDataByCurrentPage(
    data,
    1,
    pageSize.value,
    totalPage,
    loading
  );
});

const changePage: (pagination: any) => Promise<void> = async (pagination) => {
  pagination.current = pagination.current;
  current.value = pagination.current;
  data.length = 0;
  getStudentDataByCurrentPage(
    data,
    current.value,
    pageSize.value,
    totalPage,
    loading
  );
};

// const resetPassword = student => {
//   console.log(student)
// }

provide('columnSort', 'studentInfo');
// provide('resetItem', resetPassword)
provide('data', data);
provide('pagination', pagination);
provide('loading', loading);
provide('change', changePage);
provide('removeItem', removeStudent);
</script>

<style scoped>
:deep(.ant-input-search) {
  width: 300px;
}
</style>
