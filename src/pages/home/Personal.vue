<template>
  <div data-test="personal">
    <Card
      v-if="cardList.length > 0"
      :cardList="cardList"
      isBase="false"
    />
    <a-empty v-else>
      <template #description>
        <span>暂无考试</span>
      </template>
    </a-empty>
  </div>
</template>

<script setup lang="ts">
import { getSelfMatch } from '@/api/request'
import { onMounted, reactive } from 'vue'

const cardList = reactive([])
onMounted(async () => {
  getSelfMatch(cardList)
  console.log(cardList)
})
</script>

<style scoped></style>
