import Task from "./Task";

export default class Checkbox extends Task {
  public questionList: string;
  public questionAnswer: string[];
  public questionCorrect: string[];

  constructor(
    questionId: string,
    baseId: string,
    baseTitle: string,
    questionList: string,
    questionAnswer: string[],
    questionCorrect: string[]
  ) {
    super(questionId, baseId, baseTitle);
    this.questionList = questionList;
    this.questionAnswer = questionAnswer;
    this.questionCorrect = questionCorrect;
  }
}
