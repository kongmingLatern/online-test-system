<template>
  <Modal />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";

const comShow = ref<boolean>(false);
provide("title", "查询考试");
provide("comShow", comShow);
</script>

<style scoped></style>
