export default class Task {
  public baseTitle: string = ''
  public subjectName: string | undefined = ''
  public teacherName: string | undefined = ''
  public createUser: string | undefined

  constructor(
    baseTitle: string,
    subjectName?: string | undefined,
    teacherName?: string | undefined,
    createUser?: string | undefined
  ) {
    this.baseTitle = baseTitle
    this.subjectName = subjectName
    this.teacherName = teacherName
    this.createUser = createUser
  }
}
