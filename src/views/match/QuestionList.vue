<template>
  <keep-alive>
    <div
      class="question-container"
      data-test="questionList"
    >
      <h1 text-center>
        常熟理工学院 XXX 学院 马克思主义思想道德期末考试试卷
      </h1>
      <p>一、单选题</p>
      <RadioList
        :data="radioList"
        @selected="handleCorrectList"
      />
      <p>二、多选题</p>
      <CheckboxList :data="checkboxList" />
      <p>三、判断题</p>
      <JudgeList
        :data="judgeList"
        @selected="handleCorrectList"
      />
    </div>
  </keep-alive>
</template>

<script setup lang="ts">
import RadioList from './RadioList.vue'
import CheckboxList from './CheckboxList.vue'
import JudgeList from './JudgeList.vue'
import { computed, nextTick, reactive } from 'vue'
import mitt from '@/utils/mitt'
import { useMatch } from '@/stores/match.store'
import { message } from 'ant-design-vue'
import router from '@/router'
const store = useMatch()

const questionList = reactive(
  JSON.parse(localStorage.getItem('match') as string)
)
const radioList = computed(() => {
  return questionList.filter(
    item => item.questionType === 1
  )
})
const checkboxList = computed(() => {
  return questionList.filter(
    item => item.questionType === 2
  )
})
const judgeList = computed(() => {
  return questionList.filter(
    item => item.questionType === 3
  )
})

const handleCorrectList = (item, index) => {
  nextTick(() => {
    console.log(item)
    item.questionCorrectList = [item.questionAnswer]
    console.log(questionList)
  })
}

mitt.on('finishTask', async matchId => {
  console.log(questionList)

  console.log('finishTask', questionList, matchId)
  const grade = await store.submit(
    matchId as string,
    questionList
  )
  message.success('交卷成功，您的分数为：' + grade)
  setTimeout(() => {
    router.push('/success')
  }, 1000)
})
</script>

<style lang="scss" scoped>
.question-container {
  width: 80vw;
}
</style>
