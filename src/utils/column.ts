import adminConfig from '@/config/admin.config'
export function getColumn(name, data?) {
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
            const { name, dataIndex, options } = item
            columnArr.push({
              name,
              key: dataIndex,
              dataIndex,
              options,
            })
          })
        }
      }
    }
  }
  return columnArr
}
