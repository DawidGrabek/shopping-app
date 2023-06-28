import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithProviders from 'helpers/renderWithProviders'
import { vi } from 'vitest'

import Button from './Button'

describe('<Button />', () => {
  it('Renders button with provided text', () => {
    renderWithProviders(<Button>Click me</Button>)

    const button = screen.getByText('Click me')

    expect(button).toBeInTheDocument()
  })

  it('Calls onClick handler when button is clicked', () => {
    const handleClick = vi.fn()
    renderWithProviders(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByText('Click me')
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
