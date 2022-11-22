<template>
  <a-sub-menu key="sub1" data-test="sub">
    <a-menu-item key="1" data-test="tab">
      <user-outlined />
      <span>nav 1</span>
    </a-menu-item>
  </a-sub-menu>
  <a-menu-item key="2">
    <video-camera-outlined />
    <span>nav 2</span>
  </a-menu-item>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons-vue'
</script>

<style scoped></style>
