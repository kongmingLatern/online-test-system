<template>
  <keep-alive>
    <div class="question-container" data-test="questionList">
      <h1 text-center>
        {{ taskName }}
      </h1>
      <p>一、单选题</p>
      <RadioList :data="radioList" @selected="handleCorrectList" />
      <p>二、多选题</p>
      <CheckboxList :data="checkboxList" @selected="handleCorrectList" />
      <p>三、判断题</p>
      <JudgeList :data="judgeList" @selected="handleCorrectList" />
    </div>
  </keep-alive>
</template>

<script setup lang="ts">
import RadioList from './RadioList.vue';
import CheckboxList from './CheckboxList.vue';
import JudgeList from './JudgeList.vue';
import { computed, nextTick, reactive } from 'vue';
import mitt from '@/utils/mitt';
import { useMatch } from '@/stores/match.store';
import { message } from 'ant-design-vue';
import { disableContextMenu } from '../../utils/common';
import router from '@/router';
const store = useMatch();
const taskName = localStorage.getItem('taskName');

const questionList = reactive(
  JSON.parse(localStorage.getItem('match') as string)
);
const radioList = computed(() => {
  return questionList.filter((item) => item.questionType === 1);
});
const checkboxList = computed(() => {
  return questionList.filter((item) => item.questionType === 2);
});
const judgeList = computed(() => {
  return questionList.filter((item) => item.questionType === 3);
});

const handleCorrectList = (item) => {
  // 查询 item 处于数组中的位置
  const indexInList = questionList.findIndex(
    (question) => question.questionId === item.questionId
  );
  mitt.emit('selected', {
    questionType: item.questionType,
    index: indexInList + 1
  });

  if (item.questionType !== 2) {
    nextTick(() => {
      item.questionCorrectList = [item.questionAnswer];
    });
  }
};

nextTick(() => {
  disableContextMenu();
});

mitt.on('finishTask', async (matchId) => {
  await store.submit(matchId as string, questionList);
  // message.success('交卷成功，您的分数为：' + grade)
  setTimeout(() => {
    router.push('/success');
  }, 1000);
});
mitt.on('saveTask', async (matchId) => {
  await store.saveMatch(matchId as string, questionList);
  message.success('自动保存成功');
});
</script>

<style lang="scss" scoped>
.question-container {
  width: 80vw;
}
:deep(.ant-checkbox-wrapper + .ant-checkbox-wrapper) {
  margin-left: 0;
}
</style>
