<template>
  <div flex>
    <QuestionList pl-10 mt-5 border-r-dashed />
    <MatchInfo />
  </div>
</template>

<script setup lang="ts">
import QuestionList from '@/views/match/QuestionList.vue'
import MatchInfo from '@/views/match/MatchInfo.vue'
</script>

<style scoped></style>
