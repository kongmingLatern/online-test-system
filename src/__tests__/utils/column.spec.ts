import { getColumn } from '@/utils';

describe('test column', () => {
  it('should return Object', () => {
    const data = {
      column: {
        judge: [
          {
            title: '编号',
            dataIndex: 'no',
            options: {
              width: 200
            }
          },
          {
            title: '题目',
            dataIndex: 'questionList',
            options: {
              width: 200
            }
          }
        ]
      }
    };
    expect(getColumn('judge', data)).toEqual([
      {
        title: '编号',
        key: 'no',
        dataIndex: 'no',
        width: 200
      },
      {
        title: '题目',
        key: 'questionList',
        dataIndex: 'questionList',
        width: 200
      }
    ]);
  });
});
