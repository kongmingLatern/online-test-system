<template>
  <Card :cardList="cardList" data-test="taskBase" />
</template>

<script setup lang="ts">
import { reactive } from "vue";

const cardList = reactive([
  {
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
  {
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
  {
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
  {
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
]);
</script>

<style scoped></style>
