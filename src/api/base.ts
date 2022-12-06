import { message } from 'ant-design-vue'
import { useBase } from '../stores/base.store'

// NOTE:获取所有题库
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

// NOTE: 导入题库
export const finishForm = async (values: any) => {
  const store = useBase()
  const msg = await store.importBase({
    ...values,
    file: store.$state.fileList[0],
  })
  message.success(msg)
}
