import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Fragrance } from 'assets/types'

interface BasketState {
  basket: Fragrance[]
}

const initialState: BasketState = { basket: [] }

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Fragrance>) => {
      const newFragrance = action.payload
      const existingFragrance = state.basket.find(
        (fragrance) => fragrance.fragranceName === newFragrance.fragranceName
      )

      if (existingFragrance) {
        // update amount
        existingFragrance.amount += newFragrance.amount
      } else {
        // add new fragrance
        state.basket.push(newFragrance)
      }
    },
    edit: (state, action: PayloadAction<Fragrance>) => {
      state.basket = state.basket.map((fragrance) =>
        fragrance.fragranceName === action.payload.fragranceName ? action.payload : fragrance
      )
    },
    deleteItem: (state) => {
      state.basket = state.basket.filter((fragrance) => fragrance.amount !== 0)
    },
    clear: (state) => {
      state.basket = []
    },
  },
})

export const { add, edit, deleteItem, clear } = basketSlice.actions

export default basketSlice.reducer
