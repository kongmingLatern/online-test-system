<template>
  <Card :cardList="cardList" isBase="true" data-test="taskBase" />
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { getBaseList } from '../../api/base';
let cardList = reactive([]);
onMounted(async () => {
  console.log(await getBaseList(cardList));
});
</script>

<style scoped></style>
