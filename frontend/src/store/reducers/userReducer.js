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
    userLogin: (state, data) => {

      state.nombre = data.payload.nombre;
      state.apellido = data.payload.apellido;
      state.ciudad = data.payload.ciudad;
      state.correo = data.payload.correo;
    },
  },
})

export const { userLogin } = userReducer.actions
export const userInfo = (state) => state.user;

export default userReducer.reducer