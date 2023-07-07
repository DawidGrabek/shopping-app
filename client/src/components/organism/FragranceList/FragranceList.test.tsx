import userEvent from '@testing-library/user-event'
import data from 'data'
import { render, screen } from 'test-utils'

import FragranceList from './FragranceList'

describe('FragranceList', () => {
  it('Should render the fragrance list', () => {
    render(<FragranceList />)
  })

  it('Renders the fragrance list and opens modal when clicking on a fragrance item image', async () => {
    render(<FragranceList />)

    // Find the fragrance items img
    const fragranceImg = screen.getAllByTestId('fragrance-image')

    // Assert that all fragrance items img are rendered
    expect(fragranceImg).toHaveLength(data.length)

    // Simulate click on the first fragrance item img
    userEvent.click(fragranceImg[0])

    const modal = screen.getByTestId('modal')

    expect(modal).toBeInTheDocument()

    // Close the modal
    userEvent.click(screen.getByText('Close'))

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })
})
