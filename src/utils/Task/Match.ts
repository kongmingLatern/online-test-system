export default class Match {
  public subjectName: string
  public taskPassword: string
  public taskStartToEnd: string
  public classNo: string
  public studentNo: string
  public studentName: string
  public status: string

  constructor(data: Match) {
    this.subjectName = data.subjectName
    this.taskPassword = data.taskPassword
    this.taskStartToEnd = data.taskStartToEnd
    this.classNo = data.classNo
    this.studentNo = data.studentNo
    this.studentName = data.studentName
    this.status = data.status
  }
}
