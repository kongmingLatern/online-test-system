<template>
  <Layout>
    <template #header>
      <!-- 头部 -->
      <Header data-test="radioHeader" text="在线考试系统" />
    </template>
    <template #content>
      <div data-test="radioContent">
        <Content>
          <!-- 头部 -->
          <template #header>
            <Header text="单选题管理" isTitle="false" />
          </template>

          <!-- 导航 -->
          <template #nav>
            <Nav data-test="radioNav">
              <template #breadcrumb>
                <BreadCrumb />
              </template>
            </Nav>
          </template>

          <!-- 内容 -->
          <template #main>
            <Main data-test="radioMain" />
          </template>
        </Content>
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { RadioColumn, RadioData } from '@/utils/TableData'
import { setData } from '@/utils'
const result = setData(RadioData)
provide('columns', RadioColumn)
provide('data', result)
</script>

<style scoped></style>
