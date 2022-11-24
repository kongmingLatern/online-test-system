<template>
  <Layout>
    <template #header>
      <!-- 头部 -->
      <Header
        data-test="checkBoxHeader"
        text="在线考试系统"
      />
    </template>
    <template #content>
      <div data-test="checkBoxContent">
        <Content>
          <!-- 头部 -->
          <template #header>
            <Header text="多选题管理" isTitle="false" />
          </template>

          <!-- 导航 -->
          <template #nav>
            <Nav data-test="checkBoxNav">
              <template #breadcrumb>
                <BreadCrumb />
              </template>
            </Nav>
          </template>

          <!-- 内容 -->
          <template #main>
            <Main data-test="checkBoxMain" />
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
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true,
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true,
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true,
  },
]
const data = [
  {
    key: '1',
    name: '施颖杰',
    age: 32,
    address: '晒好死啊调式的解耦[]',
  },
  {
    key: '2',
    name: 'Jim Gasdoiajs',
    age: 42,
    address:
      'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address:
      'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  },
]

provide('columns', columns)
provide('data', data)
</script>

<style scoped></style>
