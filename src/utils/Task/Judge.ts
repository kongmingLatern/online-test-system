import Task from "./Task";
export default class Judge extends Task {
  public questionList: string;
  public questionCorrect: string[];

  constructor(
    questionId: string,
    baseId: string,
    baseTitle: string,
    questionList: string,
    questionCorrect: string[]
  ) {
    super(questionId, baseId, baseTitle);
    this.questionList = questionList;
    this.questionCorrect = questionCorrect;
  }
}
