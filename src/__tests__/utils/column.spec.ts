import { getColumn } from '@/utils/column'

describe('test column', () => {
  it('should return Object', () => {
    const data = {
      column: {
        judge: [
          {
            name: '编号',
            dataIndex: 'no',
            options: {
              width: 200,
            },
          },
          {
            name: '题目',
            dataIndex: 'questionList',
            options: {
              width: 200,
            },
          },
        ],
      },
    }
    expect(getColumn('judge', data)).toEqual([
      {
        name: '编号',
        key: 'no',
        dataIndex: 'no',
        options: { width: 200 },
      },
      {
        name: '题目',
        key: 'questionList',
        dataIndex: 'questionList',
        options: { width: 200 },
      },
    ])
  })
})
