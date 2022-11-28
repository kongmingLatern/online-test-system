import type { TableColumnsOptions } from '../../type'
import {
  Checkbox,
  Column,
  Judge,
  Radio,
  setColumn,
  setColumns,
  setData,
  Task,
} from '@/utils'
import { Student } from '@/utils'
import getFormItem from '@/utils/form'

describe.skip('columns', () => {
  let title: string
  let dataIndex: string
  let key: string
  let options: Partial<TableColumnsOptions>
  beforeEach(() => {
    title = 'Name'
    dataIndex = 'name'
    key = 'name'
    options = {
      width: 80,
    }
  })
  test('three params', () => {
    const result = setColumn(title, dataIndex, key)
    expect(result).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    })
  })
  test('three + params', () => {
    const result = setColumn(title, dataIndex, key, options)
    expect(result).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80,
    })
  })

  test('arr columns', () => {
    let titles: string[] = ['title1', 'title2', 'title3']
    let dataIndexs: string[] = [
      'dataIndex1',
      'dataIndex2',
      'dataIndex3',
    ]
    const arr = new Array(3).fill(0).map((_, index) => {
      return setColumn(
        titles[index],
        dataIndexs[index],
        titles[index],
        options
      )
    })
    const result = setColumns(arr)
    expect(result).toEqual([
      {
        title: 'title1',
        dataIndex: 'dataIndex1',
        key: 'title1',
        width: 80,
      },
      {
        title: 'title2',
        dataIndex: 'dataIndex2',
        key: 'title2',
        width: 80,
      },
      {
        title: 'title3',
        dataIndex: 'dataIndex3',
        key: 'title3',
        width: 80,
      },
    ])
  })

  test('class column', () => {
    const column = new Column(
      title,
      dataIndex,
      key,
      options
    )
    expect(column).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80,
    })
  })

  test('arr class Column', () => {
    const arr = [
      new Column('title1', 'dataIndex1', 'title1'),
      new Column('title2', 'dataIndex2', 'title2'),
      new Column('title3', 'dataIndex3', 'title3'),
    ]
    const result = setColumns(arr, options)
    expect(result).toEqual([
      {
        title: 'title1',
        dataIndex: 'dataIndex1',
        key: 'title1',
        width: 80,
      },
      {
        title: 'title2',
        dataIndex: 'dataIndex2',
        key: 'title2',
        width: 80,
      },
      {
        title: 'title3',
        dataIndex: 'dataIndex3',
        key: 'title3',
        width: 80,
      },
    ])
  })
})
describe.skip('class data about table', () => {
  it('Student ', () => {
    const arr = [
      new Student('1', '施颖杰', '0922201'),
      new Student('2', '施颖杰', '0922201'),
      new Student('3', '施颖杰', '0922201'),
    ]
    const result = setData(arr)
    expect(result).toEqual([
      {
        key: 0,
        studentNo: '1',
        studentName: '施颖杰',
        classNo: '0922201',
      },
      {
        key: 1,
        studentNo: '2',
        studentName: '施颖杰',
        classNo: '0922201',
      },
      {
        key: 2,
        studentNo: '3',
        studentName: '施颖杰',
        classNo: '0922201',
      },
    ])
  })

  it('Task', () => {
    const arr = new Array(3).fill(
      new Task(
        '马克思主义',
        '马克思主义与毛泽东思想',
        '孔祥琦'
      )
    )
    const result = setData(arr)
    expect(result).toEqual([
      {
        key: 0,
        baseTitle: '马克思主义',
        subjectName: '马克思主义与毛泽东思想',
        teacherName: '孔祥琦',
      },
      {
        key: 1,
        baseTitle: '马克思主义',
        subjectName: '马克思主义与毛泽东思想',
        teacherName: '孔祥琦',
      },
      {
        key: 2,
        baseTitle: '马克思主义',
        subjectName: '马克思主义与毛泽东思想',
        teacherName: '孔祥琦',
      },
    ])
  })

  it('Radio', () => {
    const arr = new Array(3).fill(
      new Radio(
        '马克思主义',
        '下列选项属于马克思主义三个组成部分之一的是()',
        ['1', '2', '3', '4'],
        ['2']
      )
    )
    const result = setData(arr)
    expect(result).toEqual([
      {
        key: 0,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionAnswer: ['1', '2', '3', '4'],
        questionCorrect: ['2'],
      },
      {
        key: 1,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionAnswer: ['1', '2', '3', '4'],
        questionCorrect: ['2'],
      },
      {
        key: 2,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionAnswer: ['1', '2', '3', '4'],
        questionCorrect: ['2'],
      },
    ])
  })
  it('Checkbox', () => {
    const arr = new Array(3).fill(
      new Checkbox(
        '马克思主义',
        '下列选项属于马克思主义三个组成部分之一的是()',
        ['1', '2', '3', '4'],
        ['1', '2']
      )
    )
    const result = setData(arr)
    expect(result).toEqual([
      {
        key: 0,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionAnswer: ['1', '2', '3', '4'],
        questionCorrect: ['1', '2'],
      },
      {
        key: 1,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionAnswer: ['1', '2', '3', '4'],
        questionCorrect: ['1', '2'],
      },
      {
        key: 2,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionAnswer: ['1', '2', '3', '4'],
        questionCorrect: ['1', '2'],
      },
    ])
  })
  it('Judge', () => {
    const arr = new Array(3).fill(
      new Judge(
        '马克思主义',
        '下列选项属于马克思主义三个组成部分之一的是()',
        ['对']
      )
    )
    const result = setData(arr)
    expect(result).toEqual([
      {
        key: 0,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionCorrect: ['对'],
      },
      {
        key: 1,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionCorrect: ['对'],
      },
      {
        key: 2,
        baseTitle: '马克思主义',
        questionList:
          '下列选项属于马克思主义三个组成部分之一的是()',
        questionCorrect: ['对'],
      },
    ])
  })
})

describe('Name of the group', () => {
  it('have an only object', () => {
    const data = {
      form: {
        teacher: {
          teacherName: {
            type: 'text',
            label: '教师姓名',
          },
        },
      },
    }
    expect(getFormItem(data)).toEqual([
      {
        type: 'text',
        label: '教师姓名',
      },
      {
        formState: {
          teacher: {
            teacherName: '',
          },
        },
      },
    ])
  })
  it('have two object', () => {
    const data = {
      form: {
        teacher: {
          teacherName: {
            type: 'text',
            label: '教师姓名',
          },
          teacherNo: {
            type: 'text',
            label: '教工号',
          },
        },
      },
    }
    expect(getFormItem(data)).toEqual([
      {
        type: 'text',
        label: '教师姓名',
      },
      {
        type: 'text',
        label: '教工号',
      },
      {
        formState: {
          teacher: {
            teacherName: '',
            teacherNo: '',
          },
        },
      },
    ])
  })
  it('have some object params', () => {
    const data = {
      form: {
        teacher: {
          teacherName: {
            type: 'text',
            label: '教师姓名',
          },
          teacherNo: {
            type: 'text',
            label: '教工号',
          },
          isAuth: {
            type: 'text',
            label: '是否授权',
          },
        },
      },
    }
    expect(getFormItem(data)).toEqual([
      {
        type: 'text',
        label: '教师姓名',
      },
      {
        type: 'text',
        label: '教工号',
      },
      {
        type: 'text',
        label: '是否授权',
      },
      {
        formState: {
          teacher: {
            teacherName: '',
            teacherNo: '',
            isAuth: '',
          },
        },
      },
    ])
  })
  it('test type is number', () => {
    const data = {
      form: {
        task: {
          taskName: {
            type: 'text',
            label: '考试名称',
          },
          taskTime: {
            type: 'number',
            label: '考试时长',
          },
        },
      },
    }
    expect(getFormItem(data)).toEqual([
      {
        type: 'text',
        label: '考试名称',
      },
      {
        type: 'number',
        label: '考试时长',
      },
      {
        formState: {
          task: {
            taskName: '',
            taskTime: 0,
          },
        },
      },
    ])
  })
})
