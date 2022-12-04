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
        return [res.data, true]
      } catch (error) {
        return [[], false]
      }
    },
    setLocalStorage(key: string, value: string) {
      localStorage.setItem(key, value)
    },
  },
})
