export default class Student {
  public studentNo: string = ''
  public studentName: string = ''
  public classNo: string = ''

  constructor(
    studentNo: string,
    studentName: string,
    classNo: string
  ) {
    this.studentNo = studentNo
    this.studentName = studentName
    this.classNo = classNo
  }
}
