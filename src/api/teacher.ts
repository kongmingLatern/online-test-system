import router from '@/router';
import { useSubject } from '@/stores/subject.store';
import type { Teacher } from '@/utils';
import { useTeacher } from '../stores/teacher.store';

export const finishForm = async (values: Teacher) => {
  const store = useTeacher();
  await store.addTeacher(values);
  // router.go(0)
};
export const authTeacher = async (values: Teacher) => {
  const store = useTeacher();
  await store.authTeacher(values.teacherId);
  router.go(0);
};

export const finishAddForm = (comShow) => async (values) => {
  comShow.value = false;
  const store = useSubject();
  await store.addSubject(values);
  setTimeout(() => {
    router.go(0);
  }, 500);
};
