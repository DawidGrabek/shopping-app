import { createSlice } from '@reduxjs/toolkit'

const initialState = { basket: [] }

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      state.basket.push(action.payload)
    },
    edit: (state, action) => {
      state.basket = state.basket.map((fragrance) =>
        fragrance.name === action.payload.name ? action.payload : fragrance
      )
    },
  },
})

export const { add, edit } = basketSlice.actions

export default basketSlice.reducer
