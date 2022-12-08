import { message } from 'ant-design-vue'
import { useBase } from '../stores/base.store'
import router from '../router'

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
  await store.removeBase(record.baseId)
  router.go(0)
}

// NOTE: 导入题库
export const finishForm = async (values: any) => {
  const store = useBase()
  await store.importBase({
    ...values,
    file: store.$state.fileList[0],
  })
  router.go(0)
}
