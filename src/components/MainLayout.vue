<template>
  <a-layout data-test="layout">
    <a-layout-header flex>
      <Header isShow="true">
        <template #menu>
          <Menu />
        </template>
      </Header>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <a-layout-footer>
      <slot name="footer">
        <!-- <Footer /> -->
      </slot>
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(.ant-layout-content) {
  width: 1400px;
  margin: 0 auto;
}
</style>
