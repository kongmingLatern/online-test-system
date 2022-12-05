import { message } from 'ant-design-vue'
import { useClass } from '../stores/class.store';

// NOTE:获取所有题库
export const getClassList = async (data: any[]) => {
  const store = useClass()
  try {
    const [res, _] = await store.getAllClass()
    if (Array.isArray(res)) {
      Object.assign(data, {}, res)
    }
    return data
  } catch (e: any) {
    message.error(e)
  }
}
