import adminConfig from '@/config/admin.config'
export default function getFormItem(data?) {
  const result: Record<string, any> = []
  const { form } = data || adminConfig
  const formState = {}
  const formStateKeys = Object.keys(form)
  formStateKeys.forEach(key => {
    if (typeof form[key] === 'object') {
      const getValues: any[] = Object.values(form[key])
      const getKeys = Object.keys(form[key])
      formState[key] = {}

      getValues.forEach((item: any, index: number) => {
        const { type, label } = item
        result.push({
          type,
          label,
        })

        if (type === 'text') {
          formState[key][getKeys[index]] = ''
        }
      })
    }
  })
  result.push({ formState })
  return result
}
