<template>
  <div data-test="homeIndex">
    <!-- NOTE: 轮播图 -->
    <Carousel />
    <div flex="~" justify="around" p-5>
      <Rules
        rounded
        hover="rounded-l-lg bg-red-800 color-white ease-out duration-500"
        class="small"
        p-5
      />
      <!-- <Recent xs:w-xs sm:w-sm md:w-md lg:w-xl xl:w-2xl /> -->
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script setup lang="ts">
import Rules from '@/views/home/Rules.vue'
import Recent from '@/views/home/Recent.vue'
</script>

<style lang="scss" scoped>
@media screen and (max-width: 640px) {
  .small {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
