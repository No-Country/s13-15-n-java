import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
  
      const { nombre, apellido, correo, ciudad, conocimientos,descripcion,experiencia } = action.payload;
      state.nombre = nombre;
      state.apellido = apellido;
      state.correo = correo;
      state.ciudad = ciudad;
      state.conocimientos = conocimientos;
      state.descripcion = descripcion;
      state.experiencia = experiencia;
    },
  },
})

export const { setUser } = userReducer.actions
export const selectUser = (state) => state.user;

export default userReducer.reducer