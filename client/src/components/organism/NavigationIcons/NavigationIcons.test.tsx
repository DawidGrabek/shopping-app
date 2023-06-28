import React from 'react'
import { Provider } from 'react-redux'

import { render, fireEvent } from '@testing-library/react'
import { RootState } from 'app/store'
import { BasketState } from 'assets/types'
import { toggleSearching } from 'features/searchBarSlice'
import renderWithProviders from 'helpers/renderWithProviders'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import NavigationIcons from './NavigationIcons'

const middlewares = [thunk]
const mockStore = configureMockStore<BasketState>(middlewares)

describe('NavigationIcons', () => {
  it('')
  // it('Should render navigation icons', () => {
  //   const initialState: BasketState = { basket: [] }
  //   const store = mockStore(initialState)
  //   const { getByTestId, getByText } = renderWithProviders(
  //     <Provider store={store}>
  //       <NavigationIcons />
  //     </Provider>
  //   )
  //   // Check if the navigation icons are rendered
  //   expect(getByTestId('navigation-icons')).toBeInTheDocument()
  //   // Simulate a click on the search icon
  //   fireEvent.click(getByText('search'))
  //   // Check if the toggleSearching action is dispatched
  //   expect(store.getActions()).toContainEqual(toggleSearching())
  // })
  // it('should display the basket count', () => {
  //   const store = mockStore({
  //     basket: {
  //       basket: [
  //         /* basket items */
  //       ],
  //     },
  //   })
  //   const { getByText } = render(
  //     <Provider store={store}>
  //       <NavigationIcons />
  //     </Provider>
  //   )
  //   // Check if the basket count is rendered
  //   expect(getByText(store.getState().basket.basket.length.toString())).toBeInTheDocument()
  // })
})
