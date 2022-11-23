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
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            theme="dark"
            mode="inline"
            h-100
            @openChange="onOpenChange"
            data-test="aside"
          >
            <AdminAside />
          </a-menu>
        </a-layout-sider>

        <a-layout-content data-test="content">
          <div p-5>
            <slot name="content"></slot>
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
import { ref } from 'vue'
import AdminAside from '@/components/admin/AdminAside.vue'
const selectedKeys = ref<string[]>(['studentInfoUpload'])
const openKeys = ref<string[]>(['student'])
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type)
}

const onOpenChange = (openKeys: string[]) => {
  console.log(openKeys)
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
