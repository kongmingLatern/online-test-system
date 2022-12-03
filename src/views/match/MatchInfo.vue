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
    <div flex="~ column" justify="center">
      <a-space flex="~ col">
        <user-outlined />
        <span>用户名称</span>
        <p>剩余时间：120'' 0'</p>
      </a-space>
    </div>

    <!-- NOTE: 题目总览 -->
    <div>
      <th>单选题</th>
      <table w-50 h-auto text-center border>
        <tr v-for="item in dataNumber.radio / 5">
          <td v-for="list in 5">
            <a-anchor :affix="false" @click="handleClick">
              <a-anchor-link
                :href="
                  '#question' + ((item - 1) * 5 + list)
                "
                :title="(item - 1) * 5 + list"
              />
            </a-anchor>
          </td>
        </tr>
      </table>
      <th>多选题</th>
      <table w-50 h-auto text-center border>
        <tr v-for="item in dataNumber.checkbox / 5">
          <td v-for="list in 5">
            <a-anchor :affix="false" @click="handleClick">
              <a-anchor-link
                :href="
                  '#checkbox' + ((item - 1) * 5 + list)
                "
                :title="(item - 1) * 5 + list"
              />
            </a-anchor>
          </td>
        </tr>
      </table>
      <th>判断题</th>
      <table w-50 h-auto text-center border>
        <tr v-for="item in dataNumber.judge / 5">
          <td v-for="list in 5">
            <a-anchor :affix="false" @click="handleClick">
              <a-anchor-link
                :href="'#judge' + ((item - 1) * 5 + list)"
                :title="(item - 1) * 5 + list"
              />
            </a-anchor>
          </td>
        </tr>
      </table>
      <div text-center mt-10>
        <a-button
          type="danger"
          class="button-green"
          w-50
          rounded
          @click="finishTask"
        >
          提交试卷
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import type { AnchorProps } from 'ant-design-vue'
import { reactive } from 'vue'
import mitt from '@/utils/mitt'
const dataNumber = reactive({
  radio: 40,
  checkbox: 30,
  judge: 30,
})
const handleClick: AnchorProps['onClick'] = (e, link) => {
  e.preventDefault()
  console.log(link)
}
const finishTask = () => {
  mitt.emit('finishTask')
}
</script>

<style lang="scss" scoped>
.match-container {
  width: 20vw;
}
</style>
