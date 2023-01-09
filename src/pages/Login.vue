<template>
  <div class="img">
    <header text="center 2xl" bg-red-800 color-white h-15 lh-15 font-sans>
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
  background-image: url('@/assets/1.jpg');
  background-size: cover;
}
</style>
