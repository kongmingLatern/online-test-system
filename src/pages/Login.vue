<template>
  <div class="img">
    <header
      text="center 2xl"
      bg-red-800
      color-white
      h-15
      lh-15
      font-sans
    >
      在线考试系统
    </header>
    <div flex>
      <Switch class="center" />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.img {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.huanghelou.cc%2Fzb_users%2Fupload%2F2021%2F01%2F20210113094211_17550.png&refer=http%3A%2F%2Fwww.huanghelou.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672668087&t=f3d5a592b669e346159a31c725d8b7e0');
  background-size: cover;
}
</style>
