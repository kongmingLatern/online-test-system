<template>
  <Layout>
    <template #header>
      <!-- 头部 -->
      <Header
        data-test="taskBaseHeader"
        text="在线考试系统"
      />
    </template>
    <template #content>
      <div data-test="taskBaseContent">
        <Content>
          <!-- 头部 -->
          <template #header>
            <Header text="试题库管理" isTitle="false" />
          </template>

          <!-- 导航 -->
          <template #nav>
            <Nav data-test="taskBaseNav">
              <template #breadcrumb>
                <BreadCrumb />
              </template>
            </Nav>
          </template>

          <!-- 内容 -->
          <template #main>
            <Main data-test="taskBaseMain" />
          </template>
        </Content>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/views/admin/Layout.vue'
import Header from '@/components/Header.vue'
import Content from '@/views/admin/Content.vue'
import Nav from '@/components/Nav.vue'
import Main from '@/components/Main.vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import { provide } from 'vue'
import type { TableColumnsOptions } from '@/type'
import { setData } from '@/utils'
import Column from '@/utils/Column'
import Task from '@/utils/Task'
const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
const columns = [
  new Column('试卷编号', 'no', 'no', {
    ...options,
    width: 90,
  }),
  new Column('题库名称', 'baseTitle', 'baseTitle', options),
  new Column(
    '所属科目',
    'subjectName',
    'subjectName',
    options
  ),
  new Column(
    '出题老师',
    'teacherName',
    'teacherName',
    options
  ),
  new Column('查看详情', 'detail', 'detail', options),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    align: 'center',
  }),
]

const data = [
  new Task(
    '马克思主义',
    '马克思主义与毛泽东思想',
    '孔祥琦'
  ),
  new Task(
    '马克思主义',
    '马克思主义与毛泽东思想',
    '孔祥琦'
  ),
  new Task(
    '马克思主义',
    '马克思主义与毛泽东思想',
    '孔祥琦'
  ),
]
const result = setData(data)
provide('columns', columns)
provide('data', result)
</script>

<style scoped></style>
