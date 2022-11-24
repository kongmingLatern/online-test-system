import type { TableColumnsOptions } from '@/type'
import { Column, Radio } from '../Task'

const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
export const columns = [
  new Column('题目编号', 'no', 'no', options),
  new Column(
    '题目',
    'questionList',
    'questionList',
    options
  ),
  new Column(
    '选项',
    'questionAnswer',
    'questionAnswer',
    options
  ),
  new Column(
    '答案',
    'questionCorrect',
    'questionCorrect',
    options
  ),
  new Column(
    '所属试题名称',
    'baseTitle',
    'baseTitle',
    options
  ),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    ...options,
  }),
]

export const data: Radio[] = [
  new Radio(
    '马克思主义',
    '下列选项属于马克思主义三个组成部分之一的是()',
    ['1', '2', '3', '4'],
    ['2']
  ),
  new Radio(
    '马克思主义',
    '下列选项属于马克思主义三个组成部分之一的是()',
    ['1', '2', '3', '4'],
    ['2']
  ),
]
