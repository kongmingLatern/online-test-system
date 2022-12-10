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
      <a-form-item-rest v-if="item.type === 'list'">
        <Checkbox @getClassId="getClassId" />
      </a-form-item-rest>
      <Select
        v-if="item.type === 'select'"
        :type="sort"
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
        v-if="sort !== '' && item.type === 'text'"
        v-model:value="formState[sort][item.name]"
      />
      <a-input-number
        v-else-if="sort !== '' && item.type === 'number'"
        v-model:value="formState[sort][item.name]"
      />
    </a-form-item>

    <div
      v-if="
        sort !== '' && formState[sort].questionAnswerList
      "
    >
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
    <div
      v-if="
        sort !== '' && formState[sort].questionCorrectList
      "
    >
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

    <!-- NOTE: 导入信息 -->
    <slot name="import"></slot>

    <div text-right>
      <a-button class="button" html-type="submit" rounded>
        提交信息
      </a-button>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { inject, reactive, ref, type Ref } from 'vue'
import { useBase } from '../../stores/base.store'
import { getFormItem, getValueByObject } from '@/utils'
import { PlusOutlined } from '@ant-design/icons-vue'

const props = defineProps<{
  sort: string
  isUpload?: boolean
  isSelected?: boolean
}>()

const value = ref<number>(1)

const layout = {
  // labelCol: { span: 4 },
  wrapperCol: { span: 24 },
}

const isShow: Ref<boolean | undefined> = inject('isShow')!
const impShow: Ref<boolean | undefined> = inject('impShow')!
console.log(impShow)

const finish: (values: any) => void = inject('finish')!
let finishImport: (file: File) => void =
  inject('import') ?? (() => {})
let finishAddForm: (file: File) => void =
  inject('select') ?? (() => {})
const store = useBase()

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

const getClassId = (classIdList, taskId) => {
  formState[props.sort].classIdList = classIdList
  formState[props.sort].taskId = taskId
}

const getBaseId = (key: string, value: string) => {
  formState[props.sort][key] = value
}

const onFinish = (values: any) => {
  console.log('Success:', values, value.value)
  console.log(formState)

  if (props.sort === 'question') {
    formState[props.sort].questionType = value.value
    console.log(formState)
    if (formState[props.sort] !== null) {
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
  }

  if (props.isUpload) {
    finishImport(store.$state.fileList[0])
  } else if (props.isSelected) {
    finishAddForm({ ...formState[props.sort] })
  } else {
    finish({
      ...formState[props.sort],
    })
  }
  isShow.value = false
  impShow.value = false
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
