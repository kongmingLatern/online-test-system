import type { TableColumnsOptions } from '../../type';
import {
  Column,
  getValueByObject,
  setColumn,
  setColumns,
  setData,
  setReactiveValue,
  Task
} from '@/utils';
import { Student } from '@/utils';
import { reactive } from 'vue';

describe('columns', () => {
  let title: string;
  let dataIndex: string;
  let key: string;
  let options: Partial<TableColumnsOptions>;
  beforeEach(() => {
    title = 'Name';
    dataIndex = 'name';
    key = 'name';
    options = {
      width: 80
    };
  });
  test('three params', () => {
    const result = setColumn(title, dataIndex, key);
    expect(result).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    });
  });
  test('three + params', () => {
    const result = setColumn(title, dataIndex, key, options);
    expect(result).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80
    });
  });

  test('arr columns', () => {
    const titles: string[] = ['title1', 'title2', 'title3'];
    const dataIndexs: string[] = ['dataIndex1', 'dataIndex2', 'dataIndex3'];
    const arr = new Array(3).fill(0).map((_, index) => {
      return setColumn(
        titles[index],
        dataIndexs[index],
        titles[index],
        options
      );
    });
    const result = setColumns(arr);
    expect(result).toEqual([
      {
        title: 'title1',
        dataIndex: 'dataIndex1',
        key: 'title1',
        width: 80
      },
      {
        title: 'title2',
        dataIndex: 'dataIndex2',
        key: 'title2',
        width: 80
      },
      {
        title: 'title3',
        dataIndex: 'dataIndex3',
        key: 'title3',
        width: 80
      }
    ]);
  });

  test('class column', () => {
    const column = new Column(title, dataIndex, key, options);
    expect(column).toEqual({
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 80
    });
  });

  test('arr class Column', () => {
    const arr = [
      new Column('title1', 'dataIndex1', 'title1'),
      new Column('title2', 'dataIndex2', 'title2'),
      new Column('title3', 'dataIndex3', 'title3')
    ];
    const result = setColumns(arr, options);
    expect(result).toEqual([
      {
        title: 'title1',
        dataIndex: 'dataIndex1',
        key: 'title1',
        width: 80
      },
      {
        title: 'title2',
        dataIndex: 'dataIndex2',
        key: 'title2',
        width: 80
      },
      {
        title: 'title3',
        dataIndex: 'dataIndex3',
        key: 'title3',
        width: 80
      }
    ]);
  });
});
describe('class data about table', () => {
  it('Student ', () => {
    const arr = [
      new Student('121', '1', '?????????', '0922201'),
      new Student('122', '2', '?????????', '0922201'),
      new Student('123', '3', '?????????', '0922201')
    ];
    const result = setData(arr);
    expect(result).toEqual([
      {
        key: 0,
        studentId: '121',
        studentNo: '1',
        studentName: '?????????',
        classNo: '0922201'
      },
      {
        key: 1,
        studentId: '122',
        studentNo: '2',
        studentName: '?????????',
        classNo: '0922201'
      },
      {
        key: 2,
        studentId: '123',
        studentNo: '3',
        studentName: '?????????',
        classNo: '0922201'
      }
    ]);
  });

  it('Task', () => {
    const arr = new Array(3).fill(
      new Task('???????????????', '?????????????????????????????????', '?????????', '?????????')
    );
    const result = setData(arr);
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "baseId": "?????????????????????????????????",
          "baseTitle": "?????????",
          "createUser": undefined,
          "key": 0,
          "questionId": "???????????????",
          "subjectName": "?????????",
          "teacherName": undefined,
        },
        {
          "baseId": "?????????????????????????????????",
          "baseTitle": "?????????",
          "createUser": undefined,
          "key": 1,
          "questionId": "???????????????",
          "subjectName": "?????????",
          "teacherName": undefined,
        },
        {
          "baseId": "?????????????????????????????????",
          "baseTitle": "?????????",
          "createUser": undefined,
          "key": 2,
          "questionId": "???????????????",
          "subjectName": "?????????",
          "teacherName": undefined,
        },
      ]
    `);
  });
});

describe('change reactive into common object', () => {
  it('should return a common object', () => {
    const formState = reactive({
      questionCorrectList: [
        {
          values: '123',
          key: Date.now()
        },
        {
          values: '123',
          key: Date.now()
        },
        {
          values: '123',
          key: Date.now()
        }
      ],
      questionAnswerList: [
        {
          values: '123',
          key: Date.now()
        },
        {
          values: '123',
          key: Date.now()
        },
        {
          values: '123',
          key: Date.now()
        }
      ]
    });
    expect(getValueByObject(formState, 'questionCorrectList')).toEqual([
      '123',
      '123',
      '123'
    ]);
  });
});

describe('enhance reactive object', () => {
  it.skip('shoule add a value param', () => {
    const res = reactive([
      {
        baseId: '1595984141143273474',
        baseTitle: '123',
        createUser: null,
        subjectName: '??????A',
        teacherName: '?????????'
      },
      {
        baseId: '1597624468123942913',
        baseTitle: '??????',
        createUser: null,
        subjectName: '??????A',
        teacherName: '?????????'
      }
    ]);
    expect(setReactiveValue(res, 'baseTitle')).toEqual(
      reactive([
        {
          baseId: '1595984141143273474',
          baseTitle: '123',
          createUser: null,
          subjectName: '??????A',
          teacherName: '?????????',
          // ???????????????value = baseTitle ??????????????????
          value: '123'
        },
        {
          baseId: '1597624468123942913',
          baseTitle: '??????',
          createUser: null,
          subjectName: '??????A',
          teacherName: '?????????',
          value: '??????'
        }
      ])
    );
  });
});
