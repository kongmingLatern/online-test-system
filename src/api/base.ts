import { message } from 'ant-design-vue'
import { useBase } from '../stores/base.store'

export const getBaseList = async (data: any[]) => {
  const store = useBase()
  try {
    const [res, _] = await store.getBaseList()
    if (Array.isArray(res)) {
      Object.assign(data, {}, res)
    }
    return data
  } catch (e: any) {
    message.error(e)
  }
}
