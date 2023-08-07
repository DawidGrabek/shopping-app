import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import userEvent from '@testing-library/user-event'
import { Fragrance } from 'helpers/types'
// import { createMemoryHistory } from 'history'
import configureStore from 'redux-mock-store'
import { render, screen } from 'test-utils'

import BasketList from './BasketList'

const mockStore = configureStore([])

describe('<BasketList />', () => {
  const fragrance1: Fragrance = {
    fragranceName: 'Fragrance 1',
    capacity: 100,
    price: 50,
    src: 'image1.jpg',
    amount: 2,
  }

  const fragrance2: Fragrance = {
    fragranceName: 'Fragrance 2',
    capacity: 200,
    price: 75,
    src: 'image2.jpg',
    amount: 3,
  }

  it('Renders the fragrance list with items from the basket', () => {
    const initialState = {
      basket: {
        basket: [fragrance1, fragrance2],
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <BasketList />
      </Provider>
    )

    // Assert that fragrance items are rendered
    const fragranceItems = screen.getAllByTestId('fragrance-item')
    expect(fragranceItems).toHaveLength(2)

    // Assert that fragrance names are displayed
    expect(screen.getByText(/Fragrance 1/)).toBeInTheDocument()
    expect(screen.getByText(/Fragrance 2/)).toBeInTheDocument()

    // Assert that total price is displayed
    const total = (
      fragrance1.price * fragrance1.amount +
      fragrance2.price * fragrance2.amount
    ).toFixed(2)

    expect(screen.getByText(`Total Price:`)).toBeInTheDocument()
    expect(screen.getByText(`${total}zł`)).toBeInTheDocument()
  })

  it('Displays a message when the basket is empty', () => {
    const initialState = {
      basket: {
        basket: [],
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <BasketList />
      </Provider>
    )

    // Assert that empty basket message is displayed
    const emptyBasketMessage = screen.getByText('There is nothing in basket')
    expect(emptyBasketMessage).toBeInTheDocument()
  })

  it('Navigates to the order page when Proceed button is clicked', () => {
    const initialState = {
      basket: {
        basket: [fragrance1],
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <BasketList />
      </Provider>
    )

    // Simulate click on Proceed button
    const proceedButton = screen.getByText('Proceed')
    userEvent.click(proceedButton)

    // Assert that navigation occurred to the correct path
    expect(location.pathname).toContain('/order')
  })

  it('Navigates to the home (/) page when Close button is clicked', () => {
    const initialState = {
      basket: {
        basket: [fragrance1],
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <BasketList />
      </Provider>
    )

    // Simulate click on Proceed button
    const proceedButton = screen.getByText('Close')
    userEvent.click(proceedButton)

    // Assert that navigation occurred to the correct path
    expect(location.pathname).toContain('/')
    expect(location.pathname).not.toContain('/order')
    expect(location.pathname).not.toContain('/profile')
  })
})
