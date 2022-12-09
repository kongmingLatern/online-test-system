<template>
  <a-layout data-test="layout">
    <a-layout-header flex>
      <Header isShow="true">
        <template #menu>
          <Menu class="display" />
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
  width: 88vw;
  margin: 8vh auto;
  overflow: hidden;
}

@media screen and (max-width: 450px) {
  :deep(.ant-layout-content) {
    width: 100vw;
    overflow: hidden;
    margin: 0 auto;
  }
  .display {
    display: none;
  }
}

:deep(.ant-layout-header) {
  width: 100vw;
  padding: unset;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
