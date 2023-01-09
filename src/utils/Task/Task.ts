export default class Task {
  public questionId: string;
  public baseId: string = '';
  public baseTitle: string = '';
  public subjectName: string | undefined = '';
  public teacherName: string | undefined = '';
  public createUser: string | undefined;

  constructor(
    questionId: string,
    baseId: string,
    baseTitle: string,
    subjectName?: string | undefined,
    teacherName?: string | undefined,
    createUser?: string | undefined
  ) {
    this.questionId = questionId;
    this.baseId = baseId;
    this.baseTitle = baseTitle;
    this.subjectName = subjectName;
    this.teacherName = teacherName;
    this.createUser = createUser;
  }
}
