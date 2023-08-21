import { createSlice } from '@reduxjs/toolkit'
import { OrderDetails } from 'helpers/types'

const initialState: { order: OrderDetails } = {
  order: {
    city: '',
    postalCode: '',
    street: '',
    homeNumber: 0,
    mobileNumber: 0,
  },
}

export const basketSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    add: (state, action) => {
      state.order = action.payload
    },
  },
})

export const { add } = basketSlice.actions

export default basketSlice.reducer
