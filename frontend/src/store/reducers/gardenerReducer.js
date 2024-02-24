import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
export const gardenerReducer = createSlice({
  name: 'gardener',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  },
})

export const { increment, decrement } = gardenerReducer.actions
export const selectValue = (state) => state.gardener.value;

export default gardenerReducer.reducer