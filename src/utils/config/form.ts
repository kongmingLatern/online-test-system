import adminConfig from '@/config/admin.config'
export default function getFormItem(formKey, data?) {
  const formArr: Record<string, any> = []
  const { form } = data || adminConfig
  const formState = {}
  const formStateKeys = Object.keys(form)
  formStateKeys.forEach(key => {
    if (key === formKey) {
      if (typeof form[key] === 'object') {
        const getValues: any[] = Object.values(form[key])
        const getKeys = Object.keys(form[key])
        formState[key] = {}

        getValues.forEach((item: any, index: number) => {
          const { type, label, name } = item
          if (type !== 'answer') {
            formArr.push({
              type,
              label,
              name,
            })
          }

          if (type === 'text' || type === 'radio') {
            formState[key][getKeys[index]] = ''
          } else if (type === 'number') {
            formState[key][getKeys[index]] = 0
          } else if (type === 'answer') {
            formState[key][getKeys[index]] = []
          }
        })
      }
    }
  })
  return [formArr, formState]
}
