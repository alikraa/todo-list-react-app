import { ITask } from './types.ts';

export const setData = (key: string, data: ITask[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getData = (key: string) =>
  JSON.parse(localStorage.getItem(key) as string);

export const key = 'taskList';
