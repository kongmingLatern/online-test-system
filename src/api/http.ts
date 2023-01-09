// 配置 axios

import { message } from 'ant-design-vue';
import axios from 'axios';

const http = axios.create({
  baseURL: '/api',
  timeout: 20000
});
http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use((response) => {
  // 拦截 msg
  const { code, msg } = response.data;
  if (code === 0) {
    message.error(msg);
    if (msg === 'NoLogin!!') {
      window.location.href = '/login';
    }
  }

  return response.data;
});

export default http;
