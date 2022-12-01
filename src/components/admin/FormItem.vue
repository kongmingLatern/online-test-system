<template>
  <a-form
    :model="formState"
    name="nest-messages"
    :validate-messages="validateMessages"
    v-bind="layout"
    @finish="onFinish"
    items="center"
  >
    <a-form-item
      v-for="item in formArr"
      :name="formState[item.name]"
      :label="item.label"
      :rules="
        item.type === 'text'
          ? [{ required: true }]
          : item.type === 'number '
          ? [
              {
                required: true,
                type: item.type,
                min: 0,
                max: 300,
              },
            ]
          : null
      "
    >
      <Select
        v-if="item.type === 'select'"
        @change="getBaseId"
      />
      <a-radio-group
        v-if="item.type === 'radio'"
        v-model:value="value"
      >
        <a-radio :value="1">单选题</a-radio>
        <a-radio :value="2">多选题</a-radio>
        <a-radio :value="3">判断题</a-radio>
      </a-radio-group>

      <a-input
        v-if="item.type === 'text'"
        v-model:value="formState[sort][item.name]"
      />
      <a-input-number
        v-else-if="item.type === 'number'"
        v-model:value="formState[sort][item.name]"
      />
    </a-form-item>

    <div v-if="formState[sort].questionAnswerList">
      <p>选项：</p>
      <a-form-item
        v-for="answer in formState[sort].questionAnswerList"
        :key="answer.key"
      >
        <a-input
          v-model:value="answer.values"
          placeholder="请输入选项"
          style="width: 60%"
        />
      </a-form-item>
      <a-button
        type="dashed"
        style="width: 60%"
        @click="addDomain('questionAnswerList')"
      >
        <PlusOutlined />
        Add
      </a-button>
    </div>
    <div v-if="formState[sort].questionCorrectList">
      <p>答案：</p>
      <a-form-item
        v-for="answer in formState[sort]
          .questionCorrectList"
        :key="answer.key"
      >
        <a-input
          v-model:value="answer.values"
          placeholder="请输入答案"
          style="width: 60%"
        />
      </a-form-item>
      <a-button
        type="dashed"
        style="width: 60%"
        @click="addDomain('questionCorrectList')"
      >
        <PlusOutlined />
        Add
      </a-button>
    </div>

    <div text-right>
      <a-button class="button" html-type="submit" rounded>
        提交信息
      </a-button>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { inject, reactive, ref, type Ref } from 'vue'
import {
  getFormItem,
  getValueByObject,
  reactiveToCommon,
} from '@/utils'
import { PlusOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  sort: string
}>()

const value = ref<number>(1)

const layout = {
  // labelCol: { span: 4 },
  wrapperCol: { span: 24 },
}

const isShow: Ref<boolean | undefined> = inject('isShow')!
const finish: (values: any) => void = inject('finish')!

const [formArr, form] = getFormItem(props.sort)
const formState = reactive(form)

const validateMessages = {
  required: '${label} is required!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const addDomain = (key: string) => {
  console.log(formState)
  formState[props.sort][key].push({
    values: '',
    key: Date.now(),
  })
}

const getBaseId = (baseId: string) => {
  formState[props.sort].baseId = baseId
}

const onFinish = (values: any) => {
  console.log('Success:', values, value.value)
  isShow.value = false

  if (props.sort === 'question') {
    formState[props.sort].questionType = value.value
    console.log(formState)
    formState[props.sort].questionCorrectList =
      getValueByObject(
        formState[props.sort],
        'questionCorrectList'
      )
    formState[props.sort].questionAnswerList =
      getValueByObject(
        formState[props.sort],
        'questionAnswerList'
      )
  }
  finish({
    ...formState[props.sort],
  })
}
</script>

<style scoped>
.bg {
  background-color: #00be21;
}
.button {
  background-color: #75b1ff;
  color: #fff;
}
</style>
