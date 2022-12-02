<template>
  <a-space size="large" flex-wrap justify-center mt-5>
    <a-card
      hoverable
      style="width: 380px"
      data-test="card"
      v-for="item in tasks"
      :key="item"
      flex="~"
      justify="start"
      items="center"
      p-3
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
          <div text-center font-semibold>
            {{ item.title }}
          </div>
        </template>
        <template #description>
          <p>考试时间：{{ item.taskTime }}</p>
          <p>限制时间：{{ item.limitTime }}分钟</p>
          <p text-center>
            <a-button type="primary" class="button-green">
              进入考试
            </a-button>
          </p>
        </template>
      </a-card-meta>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const tasks = reactive([
  {
    title: '高等数学A',
    taskTime: '2022年9月20日 09:00',
    limitTime: '120',
  },
  {
    title: '高等数学B',
    taskTime: '2022年9月22日 19:00',
    limitTime: '20',
  },
  {
    title: '高等数学A',
    taskTime: '2022年9月20日 09:00',
    limitTime: '120',
  },
  {
    title: '高等数学B',
    taskTime: '2022年9月22日 19:00',
    limitTime: '20',
  },
  {
    title: '高等数学A',
    taskTime: '2022年9月20日 09:00',
    limitTime: '120',
  },
  {
    title: '高等数学B',
    taskTime: '2022年9月22日 19:00',
    limitTime: '20',
  },
  {
    title: '高等数学A',
    taskTime: '2022年9月20日 09:00',
    limitTime: '120',
  },
  {
    title: '高等数学B',
    taskTime: '2022年9月22日 19:00',
    limitTime: '20',
  },
])
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
</style>
