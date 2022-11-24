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
            <Header text="学生信息管理" isTitle="false" />
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
import { provide } from 'vue'
import { setData, Student, Column } from '@/utils'
import type { TableColumnsOptions } from '@/type'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
const columns = [
  new Column('编号', 'no', 'no', options),
  new Column('学号', 'sno', 'sno', options),
  new Column('姓名', 'name', 'name', options),
  new Column('班级', 'cno', 'cno', options),
  new Column('操作', 'student', 'student', {
    width: 60,
    ...options,
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
