import { configureStore } from '@reduxjs/toolkit'
import basketReducer from 'features/basketSlice'
import orderSliceReducer from 'features/orderSlice'
import searchBarSliceReducer from 'features/searchBarSlice'
import userSlice from 'features/userSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    searchBar: searchBarSliceReducer,
    order: orderSliceReducer,
    user: userSlice,
  },
})
