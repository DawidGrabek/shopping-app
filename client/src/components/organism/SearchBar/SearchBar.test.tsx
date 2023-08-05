import userEvent from '@testing-library/user-event'
import data from 'data'
import { render, screen, waitFor } from 'test-utils'

import SearchBar from './SearchBar'

describe('<SearchBar />', () => {
  it('Renders the search input', () => {
    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText('Search')

    expect(searchInput).toBeInTheDocument()
  })

  it('Displays search results when typing in the search input', async () => {
    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText('Search')
    userEvent.type(searchInput, 'y')

    await screen.findByText(/Yves Saint Laurent/i)
    await screen.findByText(/Bentley/i)
  })

  it('Opens the modal when selecting a search result', async () => {
    render(<SearchBar />)

    const searchInput = screen.getByPlaceholderText('Search')
    userEvent.type(searchInput, 'y')
    const fragrance = await screen.findByText(/Yves Saint Laurent/i)
    userEvent.click(fragrance)

    const selectedFragrance: any = data.find((item) => item.fragranceName === fragrance.innerHTML)

    await waitFor(() => {
      screen.findByText(selectedFragrance.price)
      screen.findByText(selectedFragrance.capacity)
    })
  })
})
