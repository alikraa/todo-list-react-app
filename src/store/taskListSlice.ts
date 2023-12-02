import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../ts/types.ts';
import { tasksData } from '../ts/tasks-data.ts';

const initialState: ITask[] = tasksData;

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.push(action.payload);
    },

    deleteTask(state, action: PayloadAction<string>) {
      state.filter((item) => item.id !== action.payload);
    },

    changeTaskStatus(state, action: PayloadAction<string>) {
      state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    },

    editTask(state, action: PayloadAction<string>) {
      state.map((item) =>
        item.id === action.payload ? { ...item, isEdit: !item.isEdit } : item
      );
    },
  },
});

export const { addTask, deleteTask, changeTaskStatus, editTask } =
  taskListSlice.actions;

export default taskListSlice.reducer;
