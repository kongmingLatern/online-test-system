<template>
  <Layout>
    <template #header>
      <!-- 头部 -->
      <Header data-test="judgeHeader" text="在线考试系统" />
    </template>
    <template #content>
      <div data-test="judgeContent">
        <Content>
          <!-- 头部 -->
          <template #header>
            <Header text="判断题管理" isTitle="false" />
          </template>

          <!-- 导航 -->
          <template #nav>
            <Nav data-test="judgeNav">
              <template #breadcrumb>
                <BreadCrumb />
              </template>
            </Nav>
          </template>

          <!-- 内容 -->
          <template #main>
            <Main data-test="judgeMain" />
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
import Column from '@/utils/Task/Column'
import Judge from '@/utils/Task/Judge'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
const columns = [
  new Column('题目编号', 'no', 'no', options),
  new Column(
    '题目',
    'questionList',
    'questionList',
    options
  ),
  new Column(
    '答案',
    'questionCorrect',
    'questionCorrect',
    options
  ),
  new Column(
    '所属试题名称',
    'baseTitle',
    'baseTitle',
    options
  ),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    ...options,
  }),
]

const data = [
  new Judge(
    '马克思主义',
    '下列选项属于马克思主义三个组成部分之一的是()',
    ['对']
  ),
  new Judge(
    '马克思主义',
    '下列选项属于马克思主义三个组成部分之一的是()',
    ['对']
  ),
  new Judge(
    '马克思主义',
    '下列选项属于马克思主义三个组成部分之一的是()',
    ['对']
  ),
]
const result = setData(data)
provide('columns', columns)
provide('data', result)
</script>

<style scoped></style>
