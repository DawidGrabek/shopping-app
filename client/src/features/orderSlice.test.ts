import { OrderDetails } from 'assets/types'

import orderReducer, { add } from './orderSlice'

describe('orderSlice', () => {
  const initialState: { order: OrderDetails } = {
    order: {
      city: '',
      postalCode: '',
      street: '',
      homeNumber: 0,
      mobileNumber: 0,
    },
  }

  it('Should update the order state when add action is dispatched', () => {
    const newOrder = {
      city: 'New York',
      postalCode: '12345',
      street: 'Main Street',
      homeNumber: 10,
      mobileNumber: 123456789,
    }

    const state = orderReducer(initialState, add(newOrder))

    expect(state.order).toEqual(newOrder)
  })
})
