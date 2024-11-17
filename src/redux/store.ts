import { configureStore } from '@reduxjs/toolkit'
import shoppersReducer from './shoppersSlice'

export const store = configureStore({
  reducer: {
    shoppers: shoppersReducer,
  },
})
