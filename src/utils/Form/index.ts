import TeacherForm from './teacher'
import TaskForm from './task'
import StudentForm from './student'
import RadioForm from './radio'
import CheckboxForm from './checkbox'
import JudgeForm from './judge'

// 表单配置组件 => FormItem.vue
const formConfig = {
  teacher: TeacherForm,
  task: TaskForm,
  student: StudentForm,
  radio: RadioForm,
  checkbox: CheckboxForm,
  judge: JudgeForm,
}

export { formConfig }
