import { message } from 'ant-design-vue'
import { useBase } from '../stores/base.store'

export const getBaseList = async () => {
  const store = useBase()
  try {
    return await store.getBaseList()
  } catch (e: any) {
    message.error(e)
  }
}
