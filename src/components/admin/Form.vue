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
      <!-- NOTE:SELECT 选择框 -->
      <a-form-item :name="['subjectName']" label="科目">
        <a-select
          v-model:value="formState.firstSubjectName"
          style="width: 120px"
          :options="
            formState.subjectNames.map(name => ({
              value: name.subjectName,
            }))
          "
          data-test="select"
        />
      </a-form-item>

      <a-form-item :name="['baseTitle']" label="试题库名称">
        <a-select
          v-model:value="formState.secondBaseTitle"
          style="width: 120px"
          :options="
            baseTitles.map(baseTitle => ({
              value: baseTitle,
            }))
          "
        />
      </a-form-item>
      <a-form-item
        :name="['baseName']"
        label="试卷名称"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.baseName" />
      </a-form-item>
      <a-form-item
        :name="['taskTerm']"
        label="考试学期"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.taskTerm" />
      </a-form-item>
      <a-form-item
        :name="['taskTime']"
        label="考试用时"
        :rules="[{ type: 'number', min: 30, max: 300 }]"
      >
        <a-input-number
          v-model:value="formState.taskTime"
        />
        分钟
      </a-form-item>
    </div>
    <div class="right">
      <h4 text-center font-semibold text-lg mb-5>
        题目分布信息
      </h4>
      <a-form-item
        :name="['radioNum']"
        label="单选题数量"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.radioNum"
        />
      </a-form-item>
      <a-form-item
        :name="['radioScore']"
        label="单选题分值"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.radioScore"
        />
      </a-form-item>
      <a-form-item
        :name="['checkboxNum']"
        label="多选题数量"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.checkboxNum"
        />
      </a-form-item>
      <a-form-item
        :name="['checkboxScore']"
        label="多选题分值"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.checkboxScore"
        />
      </a-form-item>
      <a-form-item
        :name="['judgeNum']"
        label="判断题数量"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.judgeNum"
        />
      </a-form-item>
      <a-form-item
        :name="['judgeScore']"
        label="判断题分值"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
        style="widht: 100px"
      >
        <a-input-number
          v-model:value="formState.judgeScore"
        />
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
import { useBase } from '@/stores/base.store'
import { useSubject } from '@/stores/subject.store'
import { message } from 'ant-design-vue'
import {
  computed,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue'
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
// NOTE: store
const subjectStore = useSubject()
const baseStore = useBase()

// NOTE: data
let subjectNames = reactive<any[]>([
  {
    subjectId: '1',
    subjectName: 'Zhejiang',
  },
  {
    subjectId: '2',
    subjectName: 'Jiangsu',
  },
])
let baseTitle = reactive({
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
})
let firstSubjectName = ref<string>(
  subjectNames[0].subjectName
)

const formState = reactive({
  firstSubjectName,
  subjectNames,
  baseTitle,
  secondBaseTitle: baseTitle[firstSubjectName.value][0],
  baseName: '',
  taskTerm: '',
  taskTime: '',
  radioNum: undefined,
  radioScore: undefined,
  checkboxNum: undefined,
  checkboxScore: undefined,
  judgeNum: undefined,
  judgeScore: undefined,
})

onMounted(async () => {
  const [res, msg] = await subjectStore.getSubjectList()
  const subjectId = ref<string>('')
  const subjectName = ref<string>('')
  const arr = reactive<any[]>([])
  if (Array.isArray(res)) {
    res.forEach((item, index) => {
      if (index === 0) {
        subjectId.value = item.subjectId
        subjectName.value = item.subjectName
      }
      subjectNames.push(item)
    })
    console.log(subjectNames)
  }
  // subjectNames.splice(0, 2)
  // delete baseTitle['Jiangsu']
  // delete baseTitle['Zhejiang']

  firstSubjectName.value = subjectNames[0].subjectName
  // 继续请求
  const [result, message] = await baseStore.getBaseList(
    subjectId.value
  )
  if (Array.isArray(result)) {
    result.forEach(item => {
      arr.push(item)
    })
  }
  baseTitle[subjectName.value] = arr
})

const baseTitles = computed(() => {
  return baseTitle[formState.firstSubjectName]
})
watch(
  () => formState.firstSubjectName,
  val => {
    console.log('触发回调')

    console.log(formState.baseTitle[val])

    formState.secondBaseTitle = formState.baseTitle[val]
  }
)
const onFinish = (values: any) => {
  console.log('Success:', formState)
}
</script>

<style scoped>
.bg {
  background-color: #00be21;
}
:deep(.ant-input-number) {
  width: 100%;
}
</style>
