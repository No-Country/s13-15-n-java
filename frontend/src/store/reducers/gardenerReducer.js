import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  offers :[]
}
export const gardenerReducer = createSlice({
  name: 'gardener',
  initialState,
  reducers: {
    setOffers: (state, action) => {
      const offers = action.payload;
      state.offers = offers
    },
  },
})

export const { setOffers } = gardenerReducer.actions
export const selectValue = (state) => state.gardener;
export const selectOffers = (state) => state.gardener.offers;

export default gardenerReducer.reducer