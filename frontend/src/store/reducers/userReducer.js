import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nombre: null,
  apellido: null,
  correo: null,
  ciudad: null,
}
export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
})

export const { setUser } = userReducer.actions
export const selectUser = (state) => state.user;
export const userInfo = (state) => state.user;

export default userReducer.reducer