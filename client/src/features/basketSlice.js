import { createSlice, current } from '@reduxjs/toolkit'

const initialState = { basket: [] }

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      const newProduct = action.payload
      const existingProduct = state.basket.find((product) => product.name === newProduct.name)

      if (existingProduct) {
        // update amount
        existingProduct.amount += newProduct.amount
      } else {
        // add new fragrance
        state.basket.push(newProduct)
      }
    },
    edit: (state, action) => {
      state.basket = state.basket.map((fragrance) =>
        fragrance.name === action.payload.name ? action.payload : fragrance
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
