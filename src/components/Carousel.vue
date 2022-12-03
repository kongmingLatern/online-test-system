<template>
  <a-carousel arrows :after-change="onChange" data-test="carousel" mt-10>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div>
      <img
        src="https://img2.baidu.com/it/u=505379311,4113824194&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=250"
      />
    </div>
    <div>
      <img
        src="https://img2.baidu.com/it/u=505379311,4113824194&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=250"
      />
    </div>
    <div>
      <img
        src="https://img2.baidu.com/it/u=505379311,4113824194&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=250"
      />
    </div>
    <div>
      <img
        src="https://img2.baidu.com/it/u=505379311,4113824194&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=250"
      />
    </div>
  </a-carousel>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
const onChange = (current: number) => {
  console.log(current);
};
</script>
<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 250px;
  line-height: 250px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.ant-carousel {
  margin-top: 10px;
}
img {
  width: 100%;
  height: 250px;
}
</style>
