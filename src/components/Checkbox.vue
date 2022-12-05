<template>
  <div>
    <a-checkbox
      v-model:checked="state.checkAll"
      :indeterminate="state.indeterminate"
      @change="onCheckAllChange"
    >
      全选
    </a-checkbox>
  </div>
  <a-divider />
  <a-checkbox-group
    v-model:value="state.checkedList"
    :options="className"
  />
</template>
<script lang="ts" setup>
import { onMounted, reactive, watch } from 'vue'
import { getClassList } from '../api/class'
const state = reactive({
  indeterminate: true,
  checkAll: false,
  checkedList: [],
})

const classList = reactive<any[]>([])
const className = reactive<any[]>([])

function setClassName(classList) {
  classList.forEach(item => {
    className.push(item.classNo)
  })
}

onMounted(async () => {
  await getClassList(classList)
  console.log(classList)
  setClassName(classList)
  console.log(className)
})

const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? className : [],
    indeterminate: false,
  })
}
watch(
  () => state.checkedList,
  val => {
    state.indeterminate =
      !!val.length && val.length < className.length
    state.checkAll = val.length === className.length
  }
)
</script>
