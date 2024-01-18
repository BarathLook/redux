import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAsync: () => {},
  },
});

export const { increment, decrement, incrementAsync } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
