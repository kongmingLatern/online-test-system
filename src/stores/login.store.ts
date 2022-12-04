import http from '@/api/http'
import { defineStore } from 'pinia'
export const useLogin = defineStore('login', {
  state: () => ({
    login: [],
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        const res = await http.post('/login', {
          username,
          password,
        })
        return [res.data, '登录成功']
      } catch (error) {
        return [[], '登录失败']
      }
    },
  },
})
