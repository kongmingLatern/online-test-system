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
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form center"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      data-test="login"
      w-100
      h-auto
      z-10
      bg-blue-800
      p-5
      rounded-bl-lg
      text-center
      font-sans
    >
      <h1 text-center font-bold color-white>登录</h1>
      <a-form-item
        name="username"
        :rules="[
          {
            required: true,
            message: '请输入你的学号',
          },
        ]"
      >
        <a-input
          v-model:value="formState.username"
          placeholder="请输入学号、教工号"
        >
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[
          {
            required: true,
            message: '请输入密码',
          },
        ]"
      >
        <a-input-password
          v-model:value="formState.password"
          placeholder="请输入密码"
        >
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item text-center>
        <a-button
          :disabled="disabled"
          type="danger"
          html-type="submit"
          class="login-form-button"
          w-75
          rounded
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'
import {
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons-vue'
interface FormState {
  username: string
  password: string
}
const formState = reactive<FormState>({
  username: '',
  password: '',
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>
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
  left: 80%;
  transform: translate(-50%, -50%);
}
:deep(.ant-input-affix-wrapper) {
  width: 300px;
}
.img {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.huanghelou.cc%2Fzb_users%2Fupload%2F2021%2F01%2F20210113094211_17550.png&refer=http%3A%2F%2Fwww.huanghelou.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672668087&t=f3d5a592b669e346159a31c725d8b7e0');
  background-size: cover;
}
</style>
