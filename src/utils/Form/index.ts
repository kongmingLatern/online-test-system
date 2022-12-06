import TeacherForm from './teacher'
import TaskForm from './task'
import StudentForm from './student'
import QuestionForm from './radio'
import ClassForm from './class'
import SubjectForm from './subject'

// 表单配置组件 => FormItem.vue
const formConfig = {
  teacher: TeacherForm,
  task: TaskForm,
  student: StudentForm,
  question: QuestionForm,
  classList: ClassForm,
  list: SubjectForm
}

export { formConfig }
