import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: null,
  lastName: null,
  city: null,
  email: null
}
export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, data) => {
      state.name = data.name;
      state.lastName = data.lastName;
      state.city = data.city;
      state.email = data.email;
    },
  },
})

export const { userLogin } = userReducer.actions
export const userInfo = (state) => state.user;

export default userReducer.reducer