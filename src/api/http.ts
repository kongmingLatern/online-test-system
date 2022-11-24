// 配置 axios

import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

http.interceptors.request.use(config => {
  return config
})

http.interceptors.response.use(response => {
  return response.data
})

export default http
