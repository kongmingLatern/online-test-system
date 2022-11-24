export function setColumn(title: string, name: string, key: string, options?: Record<string, any>): Record<string, any> {
  return {
    title,
    dataIndex: name,
    key,
    ...options
  }
};

export function setColumns(arr: Array<any>, options?: Record<string, any>): Record<string, any> {
  let result: Array<Record<string, any>> = []
  arr.forEach((item: Record<string, any>) => {
    result.push({
      ...item,
      ...options
    })
  })
  return result
};

export function setData(arr: any[]): any[] {
  return arr.map((item, index) => {
    return {
      key: index,
      ...item
    }
  })
}
