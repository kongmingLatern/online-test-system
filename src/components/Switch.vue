<template>
  <div class="container">
    <h1 font-bold>登录</h1>
    <Login />
  </div>
</template>

<script lang="ts" setup>
import Login from '@/views/login/Login.vue'
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eee;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
}

</style>
