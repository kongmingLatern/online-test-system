<template>
  <Card :cardList="cardList" data-test="personal" />
</template>

<script setup lang="ts">
import { reactive } from "vue";

const cardList = reactive([
  {
    matchId: "123",
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    matchId: "124",
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
  {
    matchId: "125",
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    matchId: "126",
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
  {
    matchId: "123",
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    matchId: "123",
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
  {
    matchId: "123",
    title: "高等数学A",
    taskTime: "2022年9月20日 09:00",
    limitTime: "120",
  },
  {
    matchId: "123",
    title: "高等数学B",
    taskTime: "2022年9月22日 19:00",
    limitTime: "20",
  },
]);
</script>

<style scoped></style>
