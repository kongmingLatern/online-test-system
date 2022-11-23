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

          <template #nav>
            <!-- 导航 -->
            <Nav>
              <template #breadcrumb>
                <BreadCrumb />
              </template>
            </Nav>
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
import BreadCrumb from '@/components/BreadCrumb.vue'
</script>

<style scoped></style>
