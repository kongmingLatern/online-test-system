import Table from '@/components/Table.vue';
import { findComponent, registGlobalComponent } from '../../utils/vueUtils';
// 注册全局组件
let wrapper = registGlobalComponent(Table)
let table
beforeEach(() => {
  table = findComponent(wrapper, "table")
})

describe('first', () => {
  it('should be true', () => {
    expect(table.exists()).toBeTruthy()
  })
});


describe('setProps', () => {
  let options
  beforeEach(() => {
    options = {
      props: {
        columns: [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 80,
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address 1',
            ellipsis: true,
          },
          {
            title: 'Long Column Long Column Long Column',
            dataIndex: 'address',
            key: 'address 2',
            ellipsis: true,
          },
          {
            title: 'Long Column Long Column',
            dataIndex: 'address',
            key: 'address 3',
            ellipsis: true,
          },
          {
            title: 'Long Column',
            dataIndex: 'address',
            key: 'address 4',
            ellipsis: true,
          },
        ],
        data: [
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address:
              'New York No. 1 Lake Park, New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address:
              'London No. 2 Lake Park, London No. 2 Lake Park',
            tags: ['loser'],
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address:
              'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
        ]
      }
    }
  })
  test('props shoule be sent', () => {

    wrapper = registGlobalComponent(Table, options)
    expect(wrapper.props()).toEqual({
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 80,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address 1',
          ellipsis: true,
        },
        {
          title: 'Long Column Long Column Long Column',
          dataIndex: 'address',
          key: 'address 2',
          ellipsis: true,
        },
        {
          title: 'Long Column Long Column',
          dataIndex: 'address',
          key: 'address 3',
          ellipsis: true,
        },
        {
          title: 'Long Column',
          dataIndex: 'address',
          key: 'address 4',
          ellipsis: true,
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address:
            'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address:
            'London No. 2 Lake Park, London No. 2 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address:
            'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    })
  });
});