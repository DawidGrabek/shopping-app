import { BasketState } from 'helpers/types'

import basketReducer, { add, deleteItem, edit, clear } from './basketSlice'

describe('basketSlice', () => {
  let initialState: BasketState

  beforeEach(() => {
    initialState = { basket: [] }
  })

  it('Should add new fragrance to basket', () => {
    const fragrance = {
      src: 'http://1',
      fragranceName: 'test',
      capacity: 100,
      price: 100,
      amount: 1,
    }

    const newState = basketReducer(initialState, add(fragrance))

    expect(newState.basket.length).toBe(1)
    expect(newState.basket[0]).toEqual(fragrance)
  })

  it('Should increase amount if you add the same fragrance', () => {
    const fragrance = {
      src: 'http://1',
      fragranceName: 'test',
      capacity: 100,
      price: 100,
      amount: 1,
    }

    // Add the fragrance for the first time
    const stateAfterFirstAddition = basketReducer(initialState, add(fragrance))

    // Add the same fragrance again
    const stateAfterSecondAddition = basketReducer(stateAfterFirstAddition, add(fragrance))

    expect(stateAfterSecondAddition.basket.length).toBe(1)
    expect(stateAfterSecondAddition.basket[0].amount).toBe(2)
  })

  it('Should edit amount of fragrance', () => {
    const fragrance = {
      src: 'http://1',
      fragranceName: 'test',
      capacity: 100,
      price: 100,
      amount: 5,
    }

    const stateAfterAddition = basketReducer(initialState, add(fragrance))

    const newState = basketReducer(stateAfterAddition, edit({ ...fragrance, amount: 2 }))

    expect(newState.basket.length).toBe(1)
    expect(newState.basket[0].amount).toBe(2)
  })

  it('Should delete fragrance if amount is 0', () => {
    const fragrance = {
      src: 'http://1',
      fragranceName: 'test',
      capacity: 100,
      price: 100,
      amount: 0,
    }

    const stateAfterAddition = basketReducer(initialState, add(fragrance))

    const newState = basketReducer(stateAfterAddition, deleteItem())

    expect(newState.basket.length).toBe(0)
  })

  it('Should not delete fragrance if amount is different 0', () => {
    const fragrance = {
      src: 'http://1',
      fragranceName: 'test',
      capacity: 100,
      price: 100,
      amount: 3,
    }

    const stateAfterAddition = basketReducer(initialState, add(fragrance))

    const newState = basketReducer(stateAfterAddition, deleteItem())

    expect(newState.basket.length).not.toBe(0)
    expect(newState.basket.length).toBe(1)
    expect(newState.basket[0].amount).toBe(3)
  })

  it('Should clear basket', () => {
    const fragrance = {
      src: 'http://1',
      fragranceName: 'test',
      capacity: 100,
      price: 100,
      amount: 3,
    }
    const fragrance2 = {
      src: 'http://1',
      fragranceName: 'test',
      capacity: 100,
      price: 100,
      amount: 3,
    }

    const stateAfterAddition = basketReducer(initialState, add(fragrance))
    const stateAfterSecondAddition = basketReducer(stateAfterAddition, add(fragrance2))

    const newState = basketReducer(stateAfterSecondAddition, clear())

    expect(newState.basket.length).toBe(0)
  })
})
