import { useMatch } from '../stores/match.store';

// NOTE:获取所有题库
export const addClassList = async (values: any) => {
  const store = useMatch();
  await store.addClassMatch(values.classIdList, values.taskId);
};
