<template>
  <a-form
    :model="formState"
    name="nest-messages"
    :validate-messages="validateMessages"
    v-bind="layout"
    @finish="onFinish"
    items="center"
  >
    <div class="left">
      <a-form-item
        v-for="item in formArr"
        :name="item.name"
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
          v-model:value="formState[item.name]"
        />
        <a-input-number
          v-else-if="item.type === 'number'"
          v-model:value="formState[item.name]"
        />
      </a-form-item>
      <div text-right>
        <a-button class="button" html-type="submit" rounded>
          提交信息
        </a-button>
      </div>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { inject, reactive, ref, type Ref } from 'vue'
import { getFormItem } from '@/utils'

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

const onFinish = (values: any) => {
  console.log('Success:', values, value.value)
  isShow.value = false
  if (props.sort === 'radio') {
    finish({
      ...values,
      questionType: value.value,
    })
  } else {
    finish(values)
  }
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
