<template>
  <a-card
    hoverable
    style="width: 350px"
    data-test="card"
    flex="~"
    items="center"
  >
    <template #cover>
      <img
        alt="example"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F17%2F20210717212914_0b500.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672576474&t=cecdec9e79552d9992dd8410c0357866"
      />
    </template>
    <a-card-meta pl-5>
      <template #title>
        <div text-center font-semibold>高等数学A</div>
      </template>
      <template #description>
        <p>考试时间：2022年9月20日 09:00</p>
        <p>限制时间：120 分钟</p>
        <a-button type="primary" class="button-green">
          进入考试
        </a-button>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts"></script>

<style scoped>
:deep(.ant-card-cover) {
  flex: 1;
}
:deep(.ant-card-body) {
  flex: 2;
  padding: unset;
}
</style>
