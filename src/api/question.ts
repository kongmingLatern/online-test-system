import router from '@/router';
import type { Checkbox, Judge, Radio } from '@/utils';
import { useQuestion } from '../stores/question.store';

type QuestionType = Radio | Checkbox | Judge;

export const removeQuestion = async (record: QuestionType) => {
  const store = useQuestion();
  const { questionId } = record;
  await store.deleteQuestion(questionId);
  router.go(0);
};
export const finishQuestionForm = async (values: QuestionType) => {
  const store = useQuestion();
  await store.addQuestion(values);
  router.go(0);
};
