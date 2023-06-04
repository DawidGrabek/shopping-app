import { configureStore } from '@reduxjs/toolkit'
import basketReducer from 'features/basketSlice'
import orderSliceReducer from 'features/orderSlice'
import searchBarSliceReducer from 'features/searchBarSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    searchBar: searchBarSliceReducer,
    order: orderSliceReducer,
  },
})
