<template>
  <a-form>
    <a-form-item>
      <a-upload
        v-model:file-list="fileList"
        name="file"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
        @change="handleChange"
      >
        <a-button>
          <upload-outlined></upload-outlined>
          导入信息
        </a-button>
        <span text-3 ml-3>文件支持 json，excel</span>
      </a-upload>
    </a-form-item>
    <div text-right>
      <a-button html-type="submit" class="button-green"> 导入 </a-button>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import type { UploadChangeParam } from "ant-design-vue";

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status !== "uploading") {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === "done") {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === "error") {
    message.error(`${info.file.name} file upload failed.`);
  }
};
const headers = {
  authorization: "authorization-text",
};

const fileList = ref([]);
</script>
