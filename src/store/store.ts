import { configureStore } from '@reduxjs/toolkit';
import taskListSlice from './taskListSlice.ts';

const store = configureStore({
  reducer: taskListSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
