// 配置 axios

import { message } from 'ant-design-vue'
import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 5000,
})
http.interceptors.request.use(config => {
  return config
})

http.interceptors.response.use(response => {
  // 拦截 msg
  const { code, msg } = response.data
  if (code === 0) {
    message.error(msg)
  }

  return response.data
})

export default http
