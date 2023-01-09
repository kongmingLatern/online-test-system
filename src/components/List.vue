<template>
  <a-list bordered :data-source="data" class="sm">
    <template #renderItem="{ item, index }">
      <a-list-item hover="bg-red-800 color-white ease-out duration-300">
        <a-space>
          <span mr-2 text-sm>{{ index + 1 }}</span>
          <span>
            考试科目：
            <a-tag>{{ item.taskName }}</a-tag>
          </span>
          <span>
            考试时间：
            <a-tag>{{ item.taskStartToEnd }}</a-tag>
          </span>
          <span>
            考试时长：
            <a-tag>{{ item.limitTime }} 分钟</a-tag>
          </span>
        </a-space>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { getSelfMatch } from '@/api/request';
import { onMounted, reactive } from 'vue';

const data: any[] = reactive([]);

onMounted(async () => {
  await getSelfMatch(data);
});
</script>

<style scoped>
@media screen and (max-width: 1000px) {
  .ant-space {
    align-items: start;
    flex-direction: column;
  }
}
</style>
