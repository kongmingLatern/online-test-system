import adminConfig from '@/config/admin.config'
export default function getColumn(name, data?) {
  const columnArr: Record<string, any> = []
  const { column } = data || adminConfig
  for (const key in column) {
    if (key === name) {
      if (
        Object.prototype.hasOwnProperty.call(column, key)
      ) {
        const element = column[key]
        if (typeof element === 'object') {
          element.forEach((item: any) => {
            const { title, dataIndex, options } = item
            columnArr.push({
              title,
              key: dataIndex,
              dataIndex,
              ...options,
            })
          })
        }
      }
    }
  }
  return columnArr
}
