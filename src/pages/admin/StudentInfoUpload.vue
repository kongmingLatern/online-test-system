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
import { onMounted, provide, reactive } from 'vue'
import type { TableColumnsOptions } from '@/type'
import { setData } from '@/utils'
import Column from '@/utils/Task/Column'
import { Student } from '@/utils'
import http from '@/api/http'
const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
const data = reactive<Student[]>([])
const columns = [
  new Column('编号', 'no', 'no', options),
  new Column('学号', 'studentNo', 'studentNo', options),
  new Column('姓名', 'studentName', 'studentName', options),
  new Column('班级', 'classNo', 'classNo', options),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    align: 'center',
  }),
]

async function getData() {
  const res = await http.get('student/page', {
    params: {
      page: 1,
      pageSize: 10,
    },
  })
  res.data.records.forEach(record => {
    const { studentNo, studentName, classNo } = record
    data.push(new Student(studentNo, studentName, classNo))
  })
  return data
}

onMounted(async () => {
  await getData()
})

provide('columns', columns)
provide('data', data)
</script>

<style scoped></style>
