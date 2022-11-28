<template>
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
      <a-form-item
        v-for="item in formArr"
        :name="item.name"
        :label="item.label"
        :rules="
          item.type === 'text'
            ? [{ required: true }]
            : [
                {
                  required: true,
                  type: item.type,
                  min: 30,
                  max: 300,
                },
              ]
        "
      >
        <a-input
          v-if="item.type === 'text'"
          v-model:value="formState[item.name]"
        />
        <a-input-number
          v-else-if="item.type === 'number'"
          v-model:value="formState[item.name]"
        />
      </a-form-item>
      <a-button type="linted" html-type="submit">
        提交
      </a-button>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import getFormItem from '@/utils/form'

const props = defineProps<{
  sort: string
}>()

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
}
const [formArr, form] = getFormItem()
const formState = reactive(form[props.sort])

const validateMessages = {
  required: '${label} is required!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const onFinish = (values: any) => {
  console.log('Success:', values)
}
</script>

<style scoped>
.bg {
  background-color: #00be21;
}
</style>
