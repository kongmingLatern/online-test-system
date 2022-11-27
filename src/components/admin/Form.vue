<template>
  <h3
    text-center
    font-semibold
    text-2xl
    data-test="taskGenerateMain"
  >
    试卷生成
  </h3>
  <a-form
    :model="formState"
    name="nest-messages"
    :validate-messages="validateMessages"
    v-bind="layout"
    @finish="onFinish"
    flex="~"
    justify="evenly"
    items="center"
  >
    <div class="left">
      <h4 text-center font-semibold text-lg mb-5>
        试题基本信息
      </h4>
      <a-form-item
        :name="['subjectName']"
        label="科目名称"
        :rules="[{ required: true }]"
      >
        <a-input
          v-model:value="formState.task.subjectName"
        />
      </a-form-item>
      <a-form-item :name="['baseTitle']" label="试题库">
        <a-input v-model:value="formState.task.baseTitle" />
      </a-form-item>
      <a-form-item
        :name="['baseName']"
        label="试卷名称"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.task.baseName" />
      </a-form-item>
      <a-form-item
        :name="['taskTerm']"
        label="考试学期"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.task.taskTerm" />
      </a-form-item>
      <a-form-item
        :name="['taskTime']"
        label="考试用时"
        :rules="[{ type: 'number', min: 30, max: 220 }]"
      >
        <a-input-number
          v-model:value="formState.task.taskTime"
        />
      </a-form-item>
    </div>
    <div class="right">
      <h4 text-center font-semibold text-lg mb-5>
        题目分布信息
      </h4>
      <a-form-item :name="['baseTitle']" label="试题库">
        <a-input v-model:value="formState.task.baseTitle" />
      </a-form-item>
      <a-form-item
        :name="['baseName']"
        label="试卷名称"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.task.baseName" />
      </a-form-item>
      <a-form-item
        :name="['taskTerm']"
        label="考试学期"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.task.taskTerm" />
      </a-form-item>
      <a-form-item
        :name="['taskTime']"
        label="考试用时"
        :rules="[{ type: 'number', min: 30, max: 220 }]"
      >
        <a-input-number
          v-model:value="formState.task.taskTime"
        />
        分钟
      </a-form-item>
      <a-button
        type="linted"
        html-type="submit"
        float-right
        w-65
        class="bg"
        color="white"
        rounded="full"
      >
        生成试卷
      </a-button>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
}

const validateMessages = {
  required: '${label} is required!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const formState = reactive({
  task: {
    subjectName: '',
    baseTitle: '',
    baseName: '',
    taskTerm: '',
    taskTime: '',
  },
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}
</script>

<style scoped>
.bg {
  background-color: #00be21;
}
</style>
