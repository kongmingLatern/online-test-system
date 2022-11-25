<template>
  <div data-test="studentContent">
    <Content>
      <!-- 头部 -->
      <template #header>
        <Header text="学生信息上传" isTitle="false" />
      </template>

      <!-- 导航 -->
      <template #nav>
        <Nav data-test="studentNav">
          <template #breadcrumb>
            <BreadCrumb />
          </template>
        </Nav>
      </template>

      <!-- 内容 -->
      <template #main>
        <Main data-test="studentMain" />
      </template>
    </Content>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  provide,
  reactive,
  ref,
} from 'vue'
import type { TableColumnsOptions } from '@/type'
import type { Student } from '@/utils'
import Column from '@/utils/Task/Column'
import { useStudent } from '@/stores/student.store'
const options: Partial<TableColumnsOptions> = {
  align: 'center',
}
let data = reactive<Student[]>([])
const totalPage = ref<number>()
const current = ref<number>(1)
const pageSize = ref<number>(10)

const store = useStudent()

const columns = [
  new Column('编号', 'no', 'no', options),
  new Column('学号', 'studentNo', 'studentNo', options),
  new Column('姓名', 'studentName', 'studentName', options),
  new Column('班级', 'classNo', 'classNo', options),
  new Column('操作', 'delete', 'delete', {
    width: 60,
    align: 'center',
  }),
]

const pagination = computed(() => ({
  total: totalPage.value,
  current: current.value,
  pageSize: pageSize.value,
}))
async function getStudentData(currentPage) {
  try {
    const [res, total] = await store.getStudentsByPage(
      pageSize.value,
      currentPage
    )

    res.forEach(item => {
      data.push(item)
    })

    totalPage.value = total
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
  await getStudentData(1)
})

const changePage: (
  pagination: any
) => Promise<void> = async pagination => {
  pagination.current = pagination.current
  current.value = pagination.current
  data.length = 0
  getStudentData(current.value)
}

provide('columns', columns)
provide('data', data)
provide('pagination', pagination)
provide('change', changePage)
</script>

<style scoped></style>
