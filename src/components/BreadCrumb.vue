<template>
  <a-breadcrumb data-test="breadcrumb">
    <a-breadcrumb-item v-for="item in breadcrumb" :key="item.name">
      <router-link :to="item.path">
        {{ item.name }}
      </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
defineProps<{
  breadcrumb?: { name: string; path: string }[];
}>();
</script>
