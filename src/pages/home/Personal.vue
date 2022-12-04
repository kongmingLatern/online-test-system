<template>
  <Card
    :cardList="cardList"
    data-test="personal"
    isBase="false"
  />
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
