<template>
  <div flex data-test="match">
    <QuestionList pl-10 mt-5 />
    <MatchInfo />
  </div>
</template>

<script setup lang="ts">
import QuestionList from '@/views/match/QuestionList.vue'
import MatchInfo from '@/views/match/MatchInfo.vue'
</script>

<style scoped></style>
