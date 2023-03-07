import { configureStore } from '@reduxjs/toolkit'
import basketReducer from 'features/basketSlice'
import searchBarSliceReducer from 'features/searchBarSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    searchBarSlice: searchBarSliceReducer,
  },
})
