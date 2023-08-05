import userEvent from '@testing-library/user-event'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import FragranceItem from './FragranceItem'

const defaultProps = {
  fragranceName: 'Test Fragrance',
  capacity: 50,
  price: 10,
  src: 'test.jpg',
}
describe('<FragranceItem />', () => {
  it('Renders fragrance name, capacity, and price', () => {
    render(<FragranceItem {...defaultProps} />)
    const fragranceName = screen.getByText('Test Fragrance 50ml, 10zł')
    expect(fragranceName).toBeInTheDocument()
  })

  it('Calls addToBasket function when "ADD" button is clicked', () => {
    const addToBasketMock = vi.fn()
    render(<FragranceItem {...defaultProps} addToBasket={addToBasketMock} />)
    const addButton = screen.getByText('ADD')
    userEvent.click(addButton)
    expect(addToBasketMock).toHaveBeenCalled()
  })

  it('Calls editAmount function when amount select is changed', () => {
    const editAmountMock = vi.fn()
    render(<FragranceItem {...defaultProps} isBasketList editAmount={editAmountMock} />)
    const amountSelect = screen.getByRole('combobox')
    userEvent.selectOptions(amountSelect, '3')
    expect(editAmountMock).toHaveBeenCalledWith({
      fragranceName: 'Test Fragrance',
      capacity: 50,
      price: 10,
      src: 'test.jpg',
      amount: 3,
    })
  })

  it('Calls setCurrentFragrance function when FragranceItem is clicked', () => {
    const setCurrentFragranceMock = vi.fn()
    render(<FragranceItem {...defaultProps} setCurrentFragrance={setCurrentFragranceMock} />)
    const fragranceItem = screen.getByTestId('fragrance-item')
    userEvent.click(fragranceItem)
    expect(setCurrentFragranceMock).toHaveBeenCalled()
  })
})
