import { getFormItem } from '@/utils'

describe('test form', () => {
  it('have an only object', () => {
    const data = {
      form: {
        teacher: {
          teacherName: {
            name: 'teacherName',
            type: 'text',
            label: '教师姓名',
          },
        },
      },
    }
    expect(getFormItem('teacher', data)).toEqual([
      [
        {
          name: 'teacherName',
          type: 'text',
          label: '教师姓名',
        },
      ],
      {
        teacher: {
          teacherName: '',
        },
      },
    ])
  })
  it('have two object', () => {
    const data = {
      form: {
        teacher: {
          teacherName: {
            name: 'teacherName',
            type: 'text',
            label: '教师姓名',
          },
          teacherNo: {
            name: 'teacherNo',
            type: 'text',
            label: '教工号',
          },
        },
      },
    }
    expect(getFormItem('teacher', data)).toEqual([
      [
        {
          name: 'teacherName',
          type: 'text',
          label: '教师姓名',
        },
        {
          name: 'teacherNo',
          type: 'text',
          label: '教工号',
        },
      ],
      {
        teacher: {
          teacherName: '',
          teacherNo: '',
        },
      },
    ])
  })
  it('have some object params', () => {
    const data = {
      form: {
        teacher: {
          teacherName: {
            name: 'teacherName',
            type: 'text',
            label: '教师姓名',
          },
          teacherNo: {
            name: 'teacherNo',
            type: 'text',
            label: '教工号',
          },
          isAuth: {
            name: 'isAuth',
            type: 'text',
            label: '是否授权',
          },
        },
      },
    }
    expect(getFormItem('teacher', data)).toEqual([
      [
        {
          name: 'teacherName',
          type: 'text',
          label: '教师姓名',
        },
        {
          name: 'teacherNo',
          type: 'text',
          label: '教工号',
        },
        {
          name: 'isAuth',
          type: 'text',
          label: '是否授权',
        },
      ],
      {
        teacher: {
          teacherName: '',
          teacherNo: '',
          isAuth: '',
        },
      },
    ])
  })
  it('test type is number', () => {
    const data = {
      form: {
        task: {
          taskName: {
            name: 'taskName',
            type: 'text',
            label: '考试名称',
          },
          taskTime: {
            name: 'taskTime',
            type: 'number',
            label: '考试时长',
          },
        },
      },
    }
    expect(getFormItem('task', data)).toEqual([
      [
        {
          name: 'taskName',
          type: 'text',
          label: '考试名称',
        },
        {
          name: 'taskTime',
          type: 'number',
          label: '考试时长',
        },
      ],
      {
        task: {
          taskName: '',
          taskTime: 0,
        },
      },
    ])
  })
  it('test type is number', () => {
    const data = {
      form: {
        task: {
          taskName: {
            name: 'taskName',
            type: 'text',
            label: '考试名称',
          },
          taskTime: {
            name: 'taskTime',
            type: 'number',
            label: '考试时长',
          },
        },
        teacher: {
          teacherName: {
            name: 'teacherName',
            type: 'text',
            label: '教师姓名',
          },
          teacherNo: {
            name: 'teacherNo',
            type: 'text',
            label: '教工号',
          },
        },
      },
    }
    expect(getFormItem('teacher', data)).toEqual([
      [
        {
          name: 'teacherName',
          type: 'text',
          label: '教师姓名',
        },
        {
          name: 'teacherNo',
          type: 'text',
          label: '教工号',
        },
      ],
      {
        teacher: {
          teacherName: '',
          teacherNo: '',
        },
      },
    ])
  })
})
