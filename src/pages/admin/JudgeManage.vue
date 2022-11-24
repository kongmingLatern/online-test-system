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
import { JudgeData, JudgeColumn } from '@/utils/TableData'
import { setData } from '@/utils'

const result = setData(JudgeData)
provide('columns', JudgeColumn)
provide('data', result)
</script>

<style scoped></style>
