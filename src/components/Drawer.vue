<template>
  <a-button type="primary" @click="showDrawer">
    查看答题情况
  </a-button>
  <a-drawer
    v-model:visible="visible"
    style="color: red"
    title="题目情况"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <th>单选题</th>
    <table w-50 h-auto text-center border>
      <tr v-for="item in number.radio / 5">
        <td v-for="list in 5">
          <a-anchor :affix="false" @click="handleClick">
            <a-anchor-link
              :href="'#question' + ((item - 1) * 5 + list)"
              :title="(item - 1) * 5 + list"
            />
          </a-anchor>
        </td>
      </tr>
    </table>
    <th>多选题</th>
    <table w-50 h-auto text-center border>
      <tr v-for="item in number.checkbox / 5">
        <td v-for="list in 5">
          <a-anchor :affix="false" @click="handleClick">
            <a-anchor-link
              :href="'#checkbox' + ((item - 1) * 5 + list)"
              :title="(item - 1) * 5 + list"
            />
          </a-anchor>
        </td>
      </tr>
    </table>
    <th>判断题</th>
    <table w-50 h-auto text-center border>
      <tr v-for="item in number.judge / 5">
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
    <div text-center class="show" mt-3>
      <a-button
        type="danger"
        class="button-green"
        w-50
        rounded
        @click="submitEmit"
      >
        提交试卷
      </a-button>
    </div>
  </a-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  number: Record<string, any>
}>()

const emits = defineEmits<{
  (event: 'handleClick', ...args: any[]): void
  (event: 'submit', ...args: any[]): void
}>()

const visible = ref<boolean>(false)

const afterVisibleChange = (bool: boolean) => {
  console.log('visible', bool)
}

const showDrawer = () => {
  visible.value = true
}

const handleClick = () => {
  emits('handleClick')
}

const submitEmit = () => {
  emits('submit')
}
</script>

<style lang="scss">
.ant-drawer-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
