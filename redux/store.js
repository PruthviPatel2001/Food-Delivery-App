import basketReducer from '../redux/features/basketSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    basket:basketReducer
  },
})