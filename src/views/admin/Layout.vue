<template>
  <a-layout>
    <a-layout>
      <a-layout-header
        :style="{ background: '#fff', padding: 0 }"
        data-test="header"
      >
        <slot name="header"></slot>
      </a-layout-header>
      <a-layout>
        <a-layout-sider
          breakpoint="lg"
          collapsed-width="0"
          @collapse="onCollapse"
          @breakpoint="onBreakpoint"
        >
          <div class="logo" />
          <a-menu
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="inline"
          >
            <a-menu-item key="1">
              <user-outlined />
              <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <video-camera-outlined />
              <span>nav 2</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>

        <a-layout-content
          :style="{ margin: '24px 16px 0' }"
        >
          <div
            :style="{
              padding: '24px',
              background: '#fff',
              minHeight: '360px',
            }"
          >
            content
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons-vue'
import { ref } from 'vue'
const selectedKeys = ref<string[]>(['1'])
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type)
}

const onBreakpoint = (broken: boolean) => {
  console.log(broken)
}
</script>
<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
