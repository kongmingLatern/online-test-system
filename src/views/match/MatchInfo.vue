<template>
  <div
    w-100
    px-5
    h-100vh
    flex="~ wrap column"
    fixed
    right-0
    top-0
    justify="center"
    items="center"
    class="match-container"
  >
    <!-- NOTE: 考生信息 -->
    <div h-30 flex="~ column" justify="center">
      <a-space flex="~ col">
        <user-outlined />
        <span>用户名称</span>
        <p>剩余时间：120'' 0'</p>
        <a-button type="danger" class="button-green">
          提交试卷
        </a-button>
      </a-space>
    </div>

    <!-- NOTE: 题目总览 -->
    <div>
      <th>单选题</th>
      <table w-50 h-auto text-center border>
        <tr v-for="item in dataNumber.radio / 5">
          <td v-for="list in 5">
            {{ (item - 1) * 5 + list }}
          </td>
        </tr>
      </table>
      <th>多选题</th>
      <table w-50 h-auto text-center border>
        <tr v-for="item in dataNumber.checkbox / 5">
          <td v-for="list in 5">
            {{ (item - 1) * 5 + list }}
          </td>
        </tr>
      </table>
      <th>判断题</th>
      <table w-50 h-auto text-center border>
        <tr v-for="item in dataNumber.judge / 5">
          <td v-for="list in 5">
            {{ (item - 1) * 5 + list }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { reactive } from 'vue'
const dataNumber = reactive({
  radio: 40,
  checkbox: 30,
  judge: 30,
})
</script>

<style lang="scss" scoped>
.match-container {
  width: 20vw;
}
</style>
