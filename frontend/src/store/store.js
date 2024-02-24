import { configureStore } from '@reduxjs/toolkit'
import gardenerReducer from './reducers/gardenerReducer'
import userReducer from './reducers/userReducer'

export const store = configureStore({
  reducer: {
    gardener: gardenerReducer,
    user: userReducer,
  },
})

