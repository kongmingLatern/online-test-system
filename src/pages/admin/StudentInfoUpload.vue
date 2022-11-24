<template>
  <Layout>
    <template #header>
      <!-- 头部 -->
      <Header
        data-test="studentHeader"
        text="在线考试系统"
      />
    </template>
    <template #content>
      <div data-test="studentContent">
        <Content>
          <!-- 头部 -->
          <template #header>
            <Header text="学生信息上传" isTitle="false" />
          </template>

          <!-- 导航 -->
          <template #nav>
            <Nav data-test="studentNav">
              <template #breadcrumb>
                <BreadCrumb />
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
import Student from '@/utils/Student'
const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
const columns = [
  new Column('编号', 'no', 'no', options),
  new Column('学号', 'sno', 'sno', options),
  new Column('姓名', 'name', 'name', options),
  new Column('班级', 'cno', 'cno', options),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    align: 'center',
  }),
]

const data = [
  new Student('1', '施颖杰', 32, '0922201'),
  new Student('2', '施颖杰', 32, '0922201'),
  new Student('3', '施颖杰', 32, '0922201'),
]
const result = setData(data)
provide('columns', columns)
provide('data', result)
</script>

<style scoped></style>
