<template>
  <Layout>
    <template #header>
      <Header data-test="header" />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/views/admin/Layout.vue'
import Header from '@/components/Header.vue'
</script>

<style scoped></style>
