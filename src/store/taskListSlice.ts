import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../ts/types.ts';

const initialState: ITask[] = [];

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ITask>) {
      state.push(action.payload);
    },

    deleteTask(state, action: PayloadAction<string>) {
      return state.filter((item) => item.id !== action.payload);
    },

    changeTaskStatus(state, action: PayloadAction<string>) {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    },

    editTask(state, action: PayloadAction<string>) {
      return state.map((item) =>
        item.id === action.payload ? { ...item, isEdit: !item.isEdit } : item
      );
    },

    editTaskText(state, action: PayloadAction<ITask>) {
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              text: action.payload.text,
              isEdit: !item.isEdit,
              isCompleted: false,
            }
          : item
      );
    },
  },
});

export const { addTask, deleteTask, changeTaskStatus, editTask, editTaskText } =
  taskListSlice.actions;

export default taskListSlice.reducer;
