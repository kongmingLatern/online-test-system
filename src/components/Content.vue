<template>
  <!-- 头部 -->
  <header data-test="header">
    <slot name="header"></slot>
  </header>
  <!-- 导航栏 -->
  <nav data-test="nav">
    <slot name="nav"></slot>
  </nav>
  <!-- 主要内容 -->
  <main data-test="main">
    <slot name="main"></slot>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
