<template>
  <a-space size="large" flex-wrap mt-5 data-test="card">
    <a-card
      hoverable
      style="width: 450px"
      v-for="item in cardList"
      :key="item"
      flex="~"
      items="center"
      p-5
      rounded
    >
      <template #cover>
        <img
          alt="example"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717212914_0b500.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672576474&t=cecdec9e79552d9992dd8410c0357866"
        />
      </template>
      <a-card-meta pl-5>
        <template #title>
          <div text-center font-semibold text-xl>
            {{ item.title }}
          </div>
        </template>
        <template #description>
          <a-space direction="vertical" pt-3>
            <p>考试时间：{{ item.taskTime }}</p>
            <p>限制时间：{{ item.limitTime }}分钟</p>
            <p text-center>
              <a-button
                type="primary"
                class="button-green"
                w-60
                rounded="full"
                @click="showModal(item.matchId)"
              >
                进入考试
              </a-button>
            </p>
          </a-space>
        </template>
      </a-card-meta>
    </a-card>
    <Modal width="100%" isMatch>
      <template #modalContent>
        <Rules class="font" text="lg" px-10>
          <template #matchInfo>
            <p text="center xl">
              当前考试：{{ currentMatch.title }}
            </p>
            <p text="center xl">
              考试时间：{{ currentMatch.taskTime }}
            </p>
            <a-divider />
          </template>
        </Rules>

        <div class="task-info font" text="lg" px-10>
          <div flex items="center" justify="center">
            <span>考试码：</span>
            <a-input
              v-model:value="taskPassword"
              w-40
              placeholder="请输入考试码"
            />
          </div>
          <p>
            如由于自身操作不当导致系统故障，不予提供二次考试密码。
          </p>
          <p>
            如系统发生意外，请联系监考老师，由监考老师确定为系统故障后，再由监考老师联系管理员提供二次考试密码并继续考试。
          </p>
          <a-radio text-lg font-semibold>
            我已阅读上述准则，并且保证严格遵守
          </a-radio>
          <footer text-center mt-10>
            <a-button
              class="button-green"
              h-15
              w-60
              rounded
              @click="goTask(currentMatch.matchId)"
            >
              进入考试
            </a-button>
          </footer>
        </div>
      </template>
    </Modal>
  </a-space>
</template>

<script setup lang="ts">
import router from '@/router'
import Rules from '@/views/home/Rules.vue'
import { provide, reactive, ref } from 'vue'

const props = defineProps<{
  cardList?: any[]
}>()
const comShow = ref<boolean>(false)
const currentMatch = reactive<Record<string, any>>({})

provide('title', '进入考试')
provide('comShow', comShow)
const taskPassword = ref<string>('')

const showModal = matchId => {
  comShow.value = true
  // NOTE: 获取到当前的考试信息
  props.cardList!.find(item => {
    if (item.matchId === matchId) {
      for (const key in item) {
        if (
          Object.prototype.hasOwnProperty.call(item, key)
        ) {
          const element = item[key]
          currentMatch[key] = element
        }
      }
    }
  })
  console.log(currentMatch)
}
const goTask = matchId => {
  // console.log(matchId)

  router.push({
    path: '/match',
    query: {
      matchId,
    },
  })
}
</script>

<style scoped>
:deep(.ant-card-cover) {
  flex: 1;
}
img {
  width: 100%;
  height: 100%;
}
:deep(.ant-card-body) {
  flex: 2;
  padding: unset;
}
.width-50 {
  width: 100%;
}
.font {
  font-family: '仿宋';
}
</style>
