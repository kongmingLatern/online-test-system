<template>
  <a-layout data-test="layout">
    <a-layout-header flex>
      <Header>
        <template #menu>
          <Menu />
        </template>
      </Header>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <a-layout-footer>
      <slot name="footer"></slot>
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
