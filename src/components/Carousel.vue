<template>
  <a-carousel
    arrows
    :after-change="onChange"
    data-test="carousel"
    mt-10
    autoplay
  >
    <template #prevArrow>
      <div
        class="custom-slick-arrow"
        style="left: 10px; z-index: 1"
      >
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
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp6.itc.cn%2Fq_70%2Fimages03%2F20201217%2F3c44ca2d994e46cc8a6bc2da625e7f08.png&refer=http%3A%2F%2Fp6.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672993013&t=b46e3410c052bd8df77314c6c7f850d3"
      />
    </div>
    <div>
      <img
        src="https://img1.baidu.com/it/u=1932080953,1669549261&fm=253&fmt=auto&app=138&f=JPG?w=900&h=383"
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
import {
  LeftCircleOutlined,
  RightCircleOutlined,
} from '@ant-design/icons-vue'
const onChange = (current: number) => {
  console.log(current)
}
</script>
<style scoped>
@media screen and (min-width: 600px) {
  .ant-carousel {
    height: 60vh;
    line-height: 60vh;
    margin-top: 8vh;
    overflow: hidden;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 60vh;
    line-height: 60vh;
    background: #364d79;
    overflow: hidden;
  }
  :deep(.ant-carousel .slick-slider) {
    height: 100%;
  }
  div > img {
    width: 100%;
    height: 60vh;
  }
}
@media screen and (max-width: 376px) {
  .ant-carousel {
    height: 20vh;
    line-height: 20vh;
    margin-top: 5vh;
    overflow: hidden;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 100%;
    background: #364d79;
    overflow: hidden;
  }
  :deep(.ant-carousel .slick-slider) {
    height: 100%;
  }
  div > img {
    width: 100%;
    height: 100%;
  }
}

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 100%;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
</style>
