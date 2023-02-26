import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { add, getAll } = basketSlice.actions

export default basketSlice.reducer
