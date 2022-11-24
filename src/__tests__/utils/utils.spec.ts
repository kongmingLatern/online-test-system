import type { TableColumnsOptions } from '../../type';
import { setColumn, setColumns, setData } from "@/utils";

class Student {
  public name: string = ''
  public age: number = 0
  public address: string = ''

  constructor(name: string, age: number, address: string) {
    this.name = name
    this.age = age
    this.address = address
  }
}


describe('columns', () => {
  let title: string
  let dataIndex: string
  let key: string

  let titles: string[] = ['title1', 'title2', 'title3']
  let dataIndexs: string[] = ['dataIndex1', 'dataIndex2', 'dataIndex3']

  let options: Partial<TableColumnsOptions>
  beforeEach(() => {
    title = 'Name'
    dataIndex = 'name'
    key = 'name'
    options = {
      width: 80
    }
  })
  test('three params', () => {
    const result = setColumn(title, dataIndex, key)
    expect(result).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    })
  });
  test('three + params', () => {
    const result = setColumn(title, dataIndex, key, options)
    expect(result).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80
    })
  });

  test.skip('arr columns', () => {
    const arr = new Array(3).fill(0).map((_, index) => {
      return setColumn(titles[index], dataIndexs[index], titles[index], options)
    })
    const result = setColumns(arr, options)
    expect(result).toEqual([{
      title: 'title1',
      dataIndex: 'dataIndex1',
      key: 'title1',
      width: 80
    }, {
      title: 'title2',
      dataIndex: 'dataIndex2',
      key: 'title2',
      width: 80
    }, {
      title: 'title3',
      dataIndex: 'dataIndex3',
      key: 'title3',
      width: 80
    },])
  });
});
describe('data', () => {
  it('should have some params ', () => {
    const arr = [new Student('施颖杰', 32, '北京'), new Student('施颖杰', 32, '北京'), new Student('施颖杰', 32, '北京')]
    const result = setData(arr)
    expect(result).toEqual([{
      key: 0,
      name: '施颖杰',
      age: 32,
      address: '北京',
    }, {
      key: 1,
      name: '施颖杰',
      age: 32,
      address: '北京',
    }, {
      key: 2,
      name: '施颖杰',
      age: 32,
      address: '北京',
    },])
  });
});
