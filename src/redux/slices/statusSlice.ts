// src/store/slices/statusSlice.ts
import {StatusInterface} from '@interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: StatusInterface[] = [
  {id: 'todo', name: 'To Do'},
  {id: 'in-progress', name: 'In Progress'},
  {id: 'done', name: 'Done'},
];

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    addStatus: (state, action: PayloadAction<StatusInterface>) => {
      state.push(action.payload);
    },
    deleteStatus: (state, action: PayloadAction<string>) => {
      return state.filter(status => status.id !== action.payload);
    },
    updateStatus: (state, action: PayloadAction<StatusInterface>) => {
      const index = state.findIndex(status => status.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {addStatus, deleteStatus, updateStatus} = statusSlice.actions;
export default statusSlice.reducer;
