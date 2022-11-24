import type { TableColumnsOptions } from '../../type';
import { setColumn, setColumns, setData } from "@/utils";
import Column from '@/utils/Column';
import Student from '@/utils/Student';

describe('columns', () => {
  let title: string
  let dataIndex: string
  let key: string
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

  test('arr columns', () => {
    let titles: string[] = ['title1', 'title2', 'title3']
    let dataIndexs: string[] = ['dataIndex1', 'dataIndex2', 'dataIndex3']
    const arr = new Array(3).fill(0).map((_, index) => {
      return setColumn(titles[index], dataIndexs[index], titles[index], options)
    })
    const result = setColumns(arr)
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


  test('class column', () => {
    const column = new Column(title, dataIndex, key, options)
    expect(column).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80
    })
  });


  test('arr class Column', () => {
    const arr = [new Column('title1', 'dataIndex1', 'title1'), new Column('title2', 'dataIndex2', 'title2'), new Column('title3', 'dataIndex3', 'title3')]
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
    const arr = [new Student('1', '施颖杰', 32, '0922201'), new Student('2', '施颖杰', 32, '0922201'), new Student('3', '施颖杰', 32, '0922201')]
    const result = setData(arr)
    expect(result).toEqual([{
      key: 0,
      name: '施颖杰',
      age: 32,
      cno: '0922201',
    }, {
      key: 1,
      name: '施颖杰',
      age: 32,
      cno: '0922201',
    }, {
      key: 2,
      name: '施颖杰',
      age: 32,
      cno: '0922201',
    },])
  });
});
