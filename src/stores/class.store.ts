import http from '@/api/http';
import { defineStore } from 'pinia';

const getAllClassPath = '/class/getAll';
export const useClass = defineStore('class', {
  state: () => ({
    classList: [] as any[]
  }),
  actions: {
    async getAllClass() {
      try {
        const res = await http.get(getAllClassPath);
        this.classList = res.data;
        return [this.classList, '获取成功'];
      } catch (error) {
        return [[], '获取失败'];
      }
    }
  }
});
