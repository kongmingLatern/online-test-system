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

// NOTE: 删除题库
export const removeBase = async record => {
  const store = useBase()
  const res = await store.removeBase(record.baseId)
  message.success(res)
}

// NOTE: 导入题库
export const finishForm = async (values: any) => {
  const store = useBase()
  await store.importBase({
    ...values,
    file: store.$state.fileList[0],
  })
  // message.success(msg)
}
