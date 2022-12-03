import { reactive } from "vue";

export function setColumn(
  title: string,
  name: string,
  key: string,
  options?: Record<string, any>
): Record<string, any> {
  return {
    title,
    dataIndex: name,
    key,
    ...options,
  };
}

export function setColumns(
  arr: Array<any>,
  options?: Record<string, any>
): Record<string, any> {
  const result: Array<Record<string, any>> = [];
  arr.forEach((item: Record<string, any>) => {
    result.push({
      ...item,
      ...options,
    });
  });
  return result;
}

export function setData(arr: any[]): any[] {
  return arr.map((item, index) => {
    return {
      key: index,
      ...item,
    };
  });
}

export function reactiveToCommon(arr: Record<string, any>): any[] {
  const result: any[] = [];
  const target = arr.question;
  const { questionCorrectList, questionListAnswerList } = target;
  if (questionCorrectList) {
    questionCorrectList.forEach((item) => {
      result.push(item.values);
    });
  } else if (questionListAnswerList) {
    questionListAnswerList.forEach((item) => {
      result.push(item.values);
    });
  }
  return result;
}

export function setReactiveValue(arr: any[]): any[] {
  const result = reactive<any[]>([]);
  arr.forEach((obj) => {
    if (typeof obj === "object") {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (key === "baseTitle") {
            const element = obj[key];
            obj.value = element;
            result.push(obj);
            break;
          }
        }
      }
    }
  });
  return result;
}

export const getValueByObject = (formState, key) => {
  const obj: any[] = [];
  const arr = formState[key];
  arr.forEach((item) => {
    obj.push(item.values);
  });
  return obj;
};
