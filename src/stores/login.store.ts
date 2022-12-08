import http from '@/api/http'
import { message } from 'ant-design-vue'
import { defineStore } from 'pinia'
export const useLogin = defineStore('login', {
  state: () => ({
    login: [],
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        const res: any = await http.post('/login', {
          username,
          password,
        })
        if (res.code === 1) {
          message.success('登录成功')
          return [res.data, true]
        }
        return [[] as any, false]
      } catch (error) {
        return [[], false]
      }
    },
    setLocalStorage(key: string, value: string) {
      localStorage.setItem(key, value)
    },
  },
})
