// src/store/slices/tasksSlice.ts
import {taskItemInterface} from '@interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as taskItemInterface[],
  reducers: {
    addTask: (state, action: PayloadAction<taskItemInterface>) => {
      state.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<taskItemInterface>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload);
    },
    changeTaskStatus: (
      state,
      action: PayloadAction<{id: string; status: string}>,
    ) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index].status = action.payload.status;
      }
    },
  },
});

export const {addTask, updateTask, deleteTask, changeTaskStatus} =
  tasksSlice.actions;
export default tasksSlice.reducer;
