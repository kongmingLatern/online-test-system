export default class Task {
  public baseTitle: string = ''
  public subjectName: string = ''
  public teacherName: string = ''

  constructor(baseTitle: string, subjectName: string, teacherName: string) {
    this.baseTitle = baseTitle
    this.subjectName = subjectName
    this.teacherName = teacherName
  }

}