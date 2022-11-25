<template>
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

<script setup lang="ts">
import { provide } from 'vue'
import { JudgeData, JudgeColumn } from '@/utils/TableData'
import { setData } from '@/utils'

const result = setData(JudgeData)
provide('columns', JudgeColumn)
provide('data', result)
</script>

<style scoped></style>
