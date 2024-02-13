import { configureStore } from '@reduxjs/toolkit'
import gardenerReducer from './reducers/gardenerReducer'

export const store = configureStore({
  reducer: {
    gardener: gardenerReducer
  },
})

