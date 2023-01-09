<template>
  <FormItem :sort="sort" :isUpload="isUpload">
    <template #import>
      <a-form-item>
        <Upload />
      </a-form-item>
    </template>
  </FormItem>
</template>
<script lang="ts" setup>
defineProps<{
  sort?: string;
  isUpload?: boolean;
}>();
</script>
