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
          :options="firstOptions"
          data-test="select"
        />
      </a-form-item>

      <a-form-item :name="['baseTitle']" label="试题库名称">
        <a-select
          v-model:value="formState.secondBaseTitle"
          style="width: 120px"
          :options="secondOptions"
        />
      </a-form-item>
      <a-form-item
        :name="['taskName']"
        label="试卷名称"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.taskName" />
      </a-form-item>
      <a-form-item
        :name="['taskTerm']"
        label="考试学期"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.taskTerm" />
      </a-form-item>
      <a-form-item
        :name="['taskType']"
        label="考试类型"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.taskType" />
      </a-form-item>
      <a-form-item :name="['taskTime']" label="考试时间">
        <a-input v-model:value="formState.taskTime" />
      </a-form-item>
      <a-form-item
        :name="['limitTime']"
        label="限制提交时间"
        :rules="[{ type: 'number', min: 30, max: 300 }]"
      >
        <a-input-number
          v-model:value="formState.limitTime"
        />
        <span text-sm w-10>分钟</span>
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
          v-model:value="formState.radioNumber"
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
        :name="['selectedNumber']"
        label="多选题数量"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.selectedNumber"
        />
      </a-form-item>
      <a-form-item
        :name="['selectedScore']"
        label="多选题分值"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.selectedScore"
        />
      </a-form-item>
      <a-form-item
        :name="['judgeNum']"
        label="判断题数量"
        :rules="[{ type: 'number', min: 1, max: 100 }]"
      >
        <a-input-number
          v-model:value="formState.judgeNumber"
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
import { generateTask } from '@/api/task'
import { useBase } from '@/stores/base.store'
import { useSubject } from '@/stores/subject.store'
import {
  computed,
  onMounted,
  reactive,
  ref,
  watch,
  watchEffect,
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
let subjectNames = reactive<any[]>([])
let baseTitle = reactive({})
let firstSubjectName = ref<string>('')
let secondBaseTitle = ref<string>('')
const selectId = ref<string>('')

const formState = reactive({
  firstSubjectName,
  subjectNames,
  baseTitle,
  baseId: selectId,
  secondBaseTitle,
  taskName: '',
  taskTerm: '',
  taskType: '',
  taskTime: '',
  limitTime: '',
  radioNumber: undefined,
  radioScore: undefined,
  selectedNumber: undefined,
  selectedScore: undefined,
  judgeNumber: undefined,
  judgeScore: undefined,
})

onMounted(async () => {
  const [res, _] = await subjectStore.getSubjectList()
  const subjectId = ref<string>('')
  const arr = reactive<any[]>([])
  if (Array.isArray(res)) {
    res.forEach(item => {
      subjectNames.push(item)
    })
  }

  firstSubjectName.value = subjectNames[0].subjectName
  // 继续请求
  const [result, __] = await baseStore.getBaseList(
    subjectId.value
  )
  if (Array.isArray(result)) {
    result.forEach(item => {
      arr.push(item)
    })
  }
  selectId.value = result[0].baseId
  baseTitle[firstSubjectName.value] = [...arr]
  // console.log(baseTitle)

  secondBaseTitle.value =
    baseTitle[firstSubjectName.value][0].baseTitle
  console.log(
    baseTitle[firstSubjectName.value][0].baseTitle
  )
})

const baseTitles: any = computed(() => {
  return Array.isArray(
    baseTitle[formState.firstSubjectName]
  )
    ? baseTitle[formState.firstSubjectName]
    : []
})

const firstOptions = computed(() =>
  formState.subjectNames.map(name => ({
    value: name.subjectName,
  }))
)

const secondOptions = computed(() =>
  baseTitles.value.map(item => ({
    value: item.baseTitle,
  }))
)

watch(
  () => formState.secondBaseTitle,
  val => {
    selectId.value = baseTitle[formState.firstSubjectName]
      ? baseTitle[formState.firstSubjectName].find(
          item => item.baseTitle === val
        )?.baseId
      : ''
  }
)

watchEffect(() => {
  console.log(baseTitle[formState.firstSubjectName])
  formState.secondBaseTitle = baseTitle[
    formState.firstSubjectName
  ]
    ? baseTitle[formState.firstSubjectName][0]?.baseTitle
    : []
})

const onFinish = (values: any) => {
  console.log('Success:', formState)

  generateTask({
    baseId: selectId.value,
    taskTerm: formState.taskTerm,
    taskType: formState.taskType,
    taskTime: formState.taskTime,
    taskName: formState.taskName,
    limitTime: formState.limitTime,
    radioNumber: formState.radioNumber,
    radioScore: formState.radioScore,
    selectedNumber: formState.selectedNumber,
    selectedScore: formState.selectedScore,
    judgeNumber: formState.judgeNumber,
    judgeScore: formState.judgeScore,
  })
}
</script>

<style scoped>
.bg {
  background-color: #00be21;
}
:deep(.ant-input-number) {
  width: 100%;
}

:deep(.ant-form-item-control-input-content) {
  display: flex;
  align-items: center;
}
.left {
  width: 400px;
}
</style>
