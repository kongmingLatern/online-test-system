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
              >
                进入考试
              </a-button>
            </p>
          </a-space>
        </template>
      </a-card-meta>
    </a-card>
  </a-space>
</template>

<script setup lang="ts">
defineProps<{
  cardList?: any[]
}>()
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
