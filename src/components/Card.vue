<template>
  <a-space size="large" flex-wrap mt-5 data-test="card">
    <a-card
      hoverable
      class="card"
      v-for="item in cardList"
      :key="item"
      flex="~ col"
      w-100
      p-5
      rounded-t-lg
    >
      <template #cover>
        <img
          alt="example"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717212914_0b500.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672576474&t=cecdec9e79552d9992dd8410c0357866"
        />
      </template>
      <a-card-meta text-center mt-5>
        <template #title>
          <div text-center font-semibold text-xl>
            科目： {{ item.taskName }}
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
            <p text="center xl">当前考试：{{ currentMatch.taskName }}</p>
            <p text="center xl">考试时间：{{ currentMatch.taskStartToEnd }}</p>
            <a-divider />
          </template>
        </Rules>

        <div class="task-info font" text="lg" px-10>
          <div flex items="center" justify="center">
            <span>考试码：</span>
            <a-input
              v-if="currentMatch.isStart === 0"
              v-model:value="taskPassword"
              w-40
              placeholder="请输入考试码"
            />
            <a-input
              v-if="currentMatch.isStart === 1"
              v-model:value="taskPassword"
              w-40
              placeholder="请输入二次考试码"
            />
          </div>
        </div>
        <p>如由于自身操作不当导致系统故障，不予提供二次考试密码。</p>
        <p>
          如系统发生意外，请联系监考老师，由监考老师确定为系统故障后，再由监考老师联系管理员提供二次考试密码并继续考试。
        </p>
        <a-radio v-model:checked="checked" text-lg font-semibold>
          我已阅读上述准则，并且保证严格遵守
        </a-radio>
        <footer text-center mt-10>
          <a-button
            v-if="currentMatch.isStart === 0"
            class="button-green"
            h-15
            w-60
            rounded
            @click="goTask(currentMatch.matchId)"
          >
            进入考试
          </a-button>
          <a-button
            v-else-if="currentMatch.isStart === 1"
            type="danger"
            h-15
            w-60
            rounded
            @click="goTask(currentMatch.matchId)"
          >
            二次考试
          </a-button>
        </footer>
      </template>
    </Modal>
  </a-space>
</template>

<script setup lang="ts">
import router from '@/router';
import { useMatch } from '@/stores/match.store';
import Rules from '@/views/home/Rules.vue';
import { provide, reactive, ref } from 'vue';
import { message } from 'ant-design-vue';

const props = defineProps<{
  cardList?: any[];
}>();
const comShow = ref<boolean>(false);
const currentMatch = reactive<Record<string, any>>({});
const taskPassword = ref<string>('');
const checked = ref<boolean>(false);
const store = useMatch();
const showModal = (matchId) => {
  comShow.value = true;
  console.log(props.cardList);
  // NOTE: 获取到当前的考试信息
  props.cardList!.find((item) => {
    if (item.matchId === matchId) {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          const element = item[key];
          currentMatch[key] = element;
        }
      }
    }
  });
  console.log(currentMatch);
};
const goTask = async (matchId) => {
  if (checked.value === false) {
    message.error('请阅读准则并且保证严格遵守');
    return;
  }
  // NOTE:判断当前的考试码是否正确
  const [res, num, msg] = await store.startMatch(
    matchId,
    taskPassword.value,
    !currentMatch.isStart
  );
  if (msg === '密码错误') {
    return;
  }
  // NOTE: 题目信息
  localStorage.setItem('radioNumber', num.questionCount?.radio);
  localStorage.setItem('checkboxNumber', num.questionCount?.selected);
  localStorage.setItem('judgeNumber', num.questionCount?.judge);
  // NOTE: 考试时间
  localStorage.setItem('limitTime', currentMatch.limitTime);
  localStorage.setItem('taskName', currentMatch.taskName);
  localStorage.setItem('match', JSON.stringify(res));
  router.push({
    path: '/match',
    query: {
      matchId
    }
  });
};
provide('title', '进入考试');
provide('comShow', comShow);
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .card {
    width: auto;
  }
}

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
