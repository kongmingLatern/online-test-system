import adminConfig from '@/config/admin.config'
export default function getFormItem(data?) {
  const result: Record<string, any> = []
  const { form } = data || adminConfig
  const formState = {}
  const formStateKeys = Object.keys(form)
  formStateKeys.forEach(key => {
    if (typeof form[key] === 'object') {
      const getKeys: any = Object.values(form[key])[0]
      const type = getKeys.type
      const index = Object.keys(form[key])[0]
      result.push(Object.values(form[key])[0])

      formState[key] = {}

      // 判断该对象上的 type 属性
      if (type === 'text') {
        formState[key][index] = ''
      }
    }
  })
  result.push({ formState })

  return result
}
