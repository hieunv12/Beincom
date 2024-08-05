// src/store/slices/boardsSlice.ts
import {BoardInterface} from '@interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const boardsSlice = createSlice({
  name: 'boards',
  initialState: [] as BoardInterface[],
  reducers: {
    addBoard: (state, action: PayloadAction<BoardInterface>) => {
      state.push(action.payload);
    },
    deleteBoard: (state, action: PayloadAction<string>) => {
      return state.filter(board => board.id !== action.payload);
    },
    updateBoard: (state, action: PayloadAction<BoardInterface>) => {
      const index = state.findIndex(board => board.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {addBoard, deleteBoard, updateBoard} = boardsSlice.actions;
export default boardsSlice.reducer;
