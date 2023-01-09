<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="center"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
    data-test="login"
    h-auto
    z-10
    rounded
    p-5
    rounded-bl-lg
    text-center
    font-sans
  >
    <a-form-item
      name="username"
      :rules="[
        {
          required: true,
          message: '请输入你的学号'
        }
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
          message: '请输入密码'
        }
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
        :loading="loading"
      >
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useLogin } from '@/stores/login.store';
import { message } from 'ant-design-vue';
import router from '@/router';
interface FormState {
  username: string;
  password: string;
}
const formState = reactive<FormState>({
  username: '',
  password: ''
});
const loading = ref<boolean>(false);
const store = useLogin();
const onFinish = async (values: any) => {
  const { username, password } = values;
  loading.value = true;
  const [res, isSuccess] = await store.login(username, password);
  if (isSuccess) {
    store.setLocalStorage('username', res.name);
    store.setLocalStorage('identity', res.studentOrTeacher);
    store.setLocalStorage('isAuth', res?.isAuth);
    if (res.studentOrTeacher === 1 || res?.isAuth) {
      setTimeout(() => {
        router.push('/admin');
      }, 1000);
    } else {
      setTimeout(() => {
        router.push('/home');
      }, 1000);
    }
  } else {
    message.error('登录失败');
  }
  loading.value = false;
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>

<style scoped>
:deep(.ant-input-affix-wrapper) {
  width: 300px;
  height: 50px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

label {
  font-size: 14px;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
