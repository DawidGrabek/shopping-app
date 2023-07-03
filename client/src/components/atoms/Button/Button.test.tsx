import userEvent from '@testing-library/user-event'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import Button from './Button'

describe('<Button />', () => {
  it('Renders button with provided text', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByText('Click me')

    expect(button).toBeInTheDocument()
  })

  it('Calls onClick handler when button is clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByText('Click me')
    userEvent.click(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
