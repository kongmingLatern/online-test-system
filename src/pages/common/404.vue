<template>
  <a-result status="404" title="404" sub-title="没有该网页">
    <template #extra>
      <a-button type="primary" @click="$router.go(-1)"> 返回上一页 </a-button>
    </template>
  </a-result>
</template>
