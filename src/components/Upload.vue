<template>
  <a-upload
    v-model:file-list="fileList"
    name="file"
    :headers="headers"
    :customRequest="handleCustomRequest"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      导入信息
    </a-button>
    <span text-3 ml-3>文件支持 excel</span>
  </a-upload>
</template>

<script setup lang="ts">
import { useBase } from '@/stores/base.store'
import { UploadOutlined } from '@ant-design/icons-vue'
import type { UploadChangeParam } from 'ant-design-vue'
import { reactive } from 'vue'

const fileList = reactive<UploadChangeParam['fileList']>([])

const store = useBase()

const handleCustomRequest = ({ file }) => {
  Object.assign(fileList, file)
  store.$state.fileList.length = 0
  store.$state.fileList.push(file)
  console.log('handleCustomRequest', file)
}
const headers = {
  authorization: 'authorization-text',
}
</script>

<style scoped></style>
