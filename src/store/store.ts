import { configureStore } from '@reduxjs/toolkit';
import taskListSlice from './taskListSlice.ts';
import { key, setData } from '../ts/storage.ts';

export const store = configureStore({
  reducer: {
    taskList: taskListSlice,
  },
});

store.subscribe(() => setData(key, store.getState().taskList));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
