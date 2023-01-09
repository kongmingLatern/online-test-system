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
    @change="onChange"
  />
</template>
<script lang="ts" setup>
import { inject, onMounted, reactive, watch } from 'vue';
import { getClassList } from '../api/class';
const state = reactive({
  indeterminate: true,
  checkAll: false,
  checkedList: []
});

const classList = reactive<any[]>([]);
const className = reactive<any[]>([]);
const classIdList = reactive<any[]>([]);
const taskId = inject('taskId');

function setClassName(classList) {
  classList.forEach((item) => {
    className.push(item.classNo);
  });
}

const emits = defineEmits<{
  (event: 'getClassId', ...args: any[]): void;
}>();

onMounted(async () => {
  await getClassList(classList);
  setClassName(classList);
});

const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? className : [],
    indeterminate: false
  });
  // 获取全部
  classList.forEach((item) => {
    classIdList.push(item.classId);
  });

  emits('getClassId', classIdList, taskId);
};
const onChange = (e) => {
  classIdList.length = 0;
  e.forEach((item) => {
    classList.forEach((item2) => {
      if (item === item2.classNo) {
        classIdList.push(item2.classId);
      }
    });
  });
  emits('getClassId', classIdList, taskId);
};
watch(
  () => state.checkedList,
  (val) => {
    state.indeterminate = !!val.length && val.length < className.length;
    state.checkAll = val.length === className.length;
  }
);
</script>
