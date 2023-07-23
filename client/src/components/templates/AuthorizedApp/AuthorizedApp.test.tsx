import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'
import { render, screen } from 'test-utils'

import AuthorizedApp from './AuthorizedApp'

const mockStore = configureStore([])

// TODO: add tests for the all routes
describe('<AuthorizedApp />', () => {
  it('Renders Your Fragnaces header if the search bar is not showing', () => {
    const initialState = {
      searchBar: {
        isShowingSearchBar: false,
      },
      basket: {
        basket: [],
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <AuthorizedApp />
      </Provider>
    )

    expect(screen.getByText('Your Fragnaces')).toBeInTheDocument()
  })

  it('Renders SearchBar if the search bar is showing', () => {
    const initialState = {
      searchBar: {
        isShowingSearchBar: true,
      },
      basket: {
        basket: [],
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <AuthorizedApp />
      </Provider>
    )

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
})
