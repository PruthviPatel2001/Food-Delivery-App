import basketReducer from './features/basketSlice'
import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from './features/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    restaurant:restaurantReducer
  },
})