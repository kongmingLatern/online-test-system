<template>
  <div data-test="homeIndex">
    <!-- NOTE: 轮播图 -->
    <Carousel />
    <div flex="~" justify="around" p-5>
      <Rules
        rounded
        hover="rounded-l-lg bg-red-800 color-white ease-out duration-500"
        p-5
      />
      <Recent ml-5 />
    </div>
  </div>
</template>

<script setup lang="ts">
import Rules from '@/views/home/Rules.vue'
import Recent from '@/views/home/Recent.vue'
</script>

<style scoped></style>
