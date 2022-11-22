<template>
  <Layout>
    <template #header>
      <!-- 头部 -->
      <Header data-test="studentHeader" />
    </template>
    <template #content>
      <!-- 头部 -->
      <StudentContent data-test="studentContent" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/views/admin/Layout.vue'
import Header from '@/components/Header.vue'
import StudentContent from '@/views/admin/StudentContent.vue'
</script>

<style scoped></style>
