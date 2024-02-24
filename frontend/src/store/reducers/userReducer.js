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

      state.name = data.payload.nombre;
      state.lastName = data.payload.apellido;
      state.city = data.payload.ciudad;
      state.email = data.payload.correo;
    },
  },
})

export const { userLogin } = userReducer.actions
export const userInfo = (state) => state.user;

export default userReducer.reducer