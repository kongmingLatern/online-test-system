import type { TableColumnsOptions } from "@/type"

export default class Column {
  public title: string = ''
  public dataIndex: string = ''
  public key: string = ''

  constructor(title: string, name: string, key: string, options?: Partial<TableColumnsOptions>) {
    this.title = title
    this.dataIndex = name
    this.key = key
    Object.assign(this, options)
  }
}