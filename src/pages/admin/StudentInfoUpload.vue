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
      <!-- 头部 -->
      <div data-test="studentContent">
        <Content>
          <template #header>
            <Header
              data-test="header"
              text="学生信息上传"
            />
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
</script>

<style scoped></style>
