<template>
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

<script setup lang="ts">
import { provide } from 'vue'
import {
  CheckboxData,
  CheckboxColumn,
} from '@/utils/TableData'
import { setData } from '@/utils'
const result = setData(CheckboxData)
provide('columns', CheckboxColumn)
provide('data', result)
</script>

<style scoped></style>
