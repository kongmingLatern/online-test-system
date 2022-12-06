<template>
  <a-select
    v-model:value="value"
    label-in-value
    style="width: 120px"
    :options="options"
    @change="handleChange"
    data-test="select"
  ></a-select>
</template>
<script lang="ts" setup>
import {
  getBasesByCurrentPage,
  getSubjectList,
} from '@/api/request'
import { setReactiveValue } from '@/utils'
import { onMounted, reactive, ref, watchEffect } from 'vue'

const props = defineProps<{
  type: string
}>()
const value = ref<Record<string, any>>({
  value: '',
  // baseId: '',
})
value.value[props.type] = ''
const totalPage = ref<number | undefined>()
const loading = ref<boolean>(false)

const selectBaseId = ref<string>('')

const emits = defineEmits<{
  (event: 'change', ...value: any[]): void
}>()
const options = reactive<any[]>([])
onMounted(async () => {
  if (props.type === 'question') {
    const res = await getBasesByCurrentPage(
      options as any,
      1,
      10,
      totalPage,
      loading
    )
    if (Array.isArray(res)) {
      value.value = setReactiveValue(res, 'baseTitle')
      console.log(value)
      selectBaseId.value = value.value[0].baseId
    }
  } else if (props.type === 'list') {
    const res = await getSubjectList(options)
    console.log(options)
    console.log(res)
    if (Array.isArray(res)) {
      value.value = setReactiveValue(res, 'subjectName')
      console.log(value)
      selectBaseId.value = value.value[0].subjectId
    }
  }
})

watchEffect(() => {
  if (props.type === 'question') {
    emits('change', 'baseId', selectBaseId.value)
  } else if (props.type === 'list') {
    emits('change', 'subjectId', selectBaseId.value)
  }
})

const handleChange = value => {
  console.log(value)
  if (props.type === 'question') {
    const { baseId } = value.option
    selectBaseId.value = baseId
  } else if (props.type === 'list') {
    const { subjectId } = value.option
    selectBaseId.value = subjectId
  }
}
</script>
