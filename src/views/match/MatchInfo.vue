<template>
  <div
    w-100
    flex="~ wrap col"
    items="center"
    class="match-container response"
    fixed
    right-0
    top-0
  >
    <!-- NOTE: 考生信息 -->
    <div flex="~ column" justify="center">
      <a-space flex="~ col">
        <user-outlined />
        <span>{{ username }}</span>
        <p>
          剩余时间：{{
            Math.floor(limitTime / 60000) +
            "''" +
            Math.floor(limitTime % 60) +
            "'"
          }}'
        </p>
        <div text-center class="display">
          <Drawer
            :number="dataNumber"
            @handleClick="handleClick"
            @submit="finishTask"
          />
        </div>
        <div text-center class="show">
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
      </a-space>
    </div>

    <!-- NOTE: 题目总览 -->
    <a-space direction="vertical">
      <div class="show">
        <th>单选题</th>
        <table w-50 h-auto text-center border>
          <tr v-for="item in dataNumber.radio / 5" h-10>
            <td
              v-for="list in 5"
              w-10
              :id="'radio' + ((item - 1) * 5 + list)"
            >
              <a-anchor
                :affix="false"
                @click="handleClick"
                :get-current-anchor="null"
              >
                <a-anchor-link
                  :href="
                    '#question' + ((item - 1) * 5 + list)
                  "
                  :title="(item - 1) * 5 + list"
                  ref="radio"
                />
              </a-anchor>
            </td>
          </tr>
        </table>
        <th>多选题</th>
        <table w-50 h-auto text-center border>
          <tr v-for="item in dataNumber.checkbox / 5" h-10>
            <td
              v-for="list in 5"
              w-10
              :id="'checkbox1' + ((item - 1) * 5 + list)"
            >
              <a-anchor
                :affix="false"
                @click="handleClick"
                :get-current-anchor="null"
              >
                <a-anchor-link
                  :href="
                    '#checkbox' + ((item - 1) * 5 + list)
                  "
                  :title="(item - 1) * 5 + list"
                  ref="checkbox"
                />
              </a-anchor>
            </td>
          </tr>
        </table>
        <th>判断题</th>
        <table w-50 h-auto text-center border>
          <tr v-for="item in dataNumber.judge / 5" h-10>
            <td
              v-for="list in 5"
              w-10
              :id="'judge1' + ((item - 1) * 5 + list)"
            >
              <a-anchor
                :affix="false"
                @click="handleClick"
                :get-current-anchor="null"
              >
                <a-anchor-link
                  :href="'#judge' + ((item - 1) * 5 + list)"
                  :title="(item - 1) * 5 + list"
                  ref="judge"
                />
              </a-anchor>
            </td>
          </tr>
        </table>
      </div>
    </a-space>
  </div>
</template>
<script lang="ts"></script>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import { message, type AnchorProps } from 'ant-design-vue'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import mitt from '../../utils/mitt'
import { Checkbox } from '../../utils/Task'
import router from '@/router'
const route = useRoute()
const radio = ref(null)
const checkbox = ref(null)
const judge = ref(null)

const username = localStorage.getItem('username')
let limitTime = ref<number>(
  Number.parseInt(
    localStorage.getItem('limitTime') as string
  ) *
    60 *
    1000 ?? 0
)
let timer
let countTime = ref<number>(0)
onMounted(() => {
  timer = setInterval(() => {
    limitTime.value--
    countTime.value++
    if (countTime.value === 30) {
      // NOTE: 保存试卷
      mitt.emit('saveTask', route.query.matchId)
      countTime.value = 0
    }
    if (limitTime.value === 0) {
      // 完成考试
      finishTask()
      message.success('考试时间到，已直接交卷')
      router.push('/success')
    } else if (limitTime.value === 300) {
      message.warn('考试还有5分钟结束')
    }
  }, 1000)
})
onUnmounted(() => {
  clearInterval(timer)
})
let dataNumber = reactive({
  radio:
    Number.parseInt(
      localStorage.getItem('radioNumber') as string
    ) ?? 0,
  checkbox:
    Number.parseInt(
      localStorage.getItem('checkboxNumber') as string
    ) ?? 0, 
  judge:
    Number.parseInt(
      localStorage.getItem('judgeNumber') as string
    ) ?? 30,
})
const handleClick: AnchorProps['onClick'] = (e, link) => {
  e.preventDefault()
}
const finishTask = () => {
  mitt.emit('finishTask', route.query.matchId)
}

mitt.on('selected', (item: any) => {
  const type = item.questionType

  let href: string = ''
  if (type === 1) {
    href = '#radio' + item.index
  } else if (type === 2) {
    href = '#checkbox1' + (item.index - dataNumber.radio)
  } else if (type === 3) {
    href =
      '#judge1' +
      (item.index - dataNumber.radio - dataNumber.checkbox)
  }
  console.log(href, type)

  // NOTE: 通过 ref 获取到的是一个数组，需要遍历
  // 查找指定节点
  const dom: Record<string, any> = document.querySelector(
    href
  ) as any

  if (dom) {
    dom.style.backgroundColor = '#1890ff'
    dom.style.color = 'white'
    const dom1 =
      dom?.lastElementChild?.lastElementChild
        ?.lastElementChild?.lastElementChild
    dom1.style.color = 'white'
  }
  // dom.classList.add('selected')

  // .style.color = 'white'
  console.log()

  console.log(dom)
  console.log(type, href)
})
</script>
<style lang="scss" scoped>
.display {
  display: none;
}
@media screen and (max-width: 1100px) {
  .display {
    display: block;
  }
  .show {
    display: none;
  }
  .response {
    width: 35vw;
    top: 0;
    right: 0;
  }
}
@media screen and (max-width: 376px) {
  .display {
    display: block;
  }
  .show {
    display: none;
  }
  .response {
    width: 35vw;
    top: 0;
    right: 0;
  }
}
.selected {
  background-color: #1890ff;
  color: #fff;
}
a {
  color: #000;
  display: inline;
}
:deep(.ant-anchor-link-active > .ant-anchor-link-title) {
  color: unset;
}
:deep(.ant-anchor-link) {
  padding: 0;
}
:deep(.ant-anchor-ink::before) {
  background-color: unset;
}
</style>
