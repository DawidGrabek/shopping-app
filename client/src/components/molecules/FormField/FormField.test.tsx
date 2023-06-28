import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithProviders from 'helpers/renderWithProviders'
import { vi } from 'vitest'

import FormField from './FormField'

describe('<FormField />', () => {
  const handleChange = vi.fn()

  it('Renders label and input element', () => {
    renderWithProviders(
      <FormField
        id="test-input"
        labelText="Test Label"
        type="text"
        placeholder="Enter value"
        value=""
        onChange={handleChange}
      />
    )

    const label = screen.getByLabelText('Test Label')
    const input = screen.getByLabelText('Test Label')

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })

  it('Renders error message when error prop is provided', () => {
    renderWithProviders(
      <FormField
        id="test-input"
        labelText="Test Label"
        type="text"
        placeholder="Enter value"
        value=""
        onChange={handleChange}
        error="This field is required"
      />
    )

    const errorMessage = screen.getByText('This field is required')

    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage.textContent).toBe('This field is required')
  })

  it('Calls onChange handler when input value changes', () => {
    renderWithProviders(
      <FormField
        id="test-input"
        labelText="Test Label"
        type="text"
        placeholder="Enter value"
        value=""
        onChange={handleChange}
      />
    )
    const text = 'Test value'
    const input = screen.getByPlaceholderText('Enter value')

    userEvent.type(input, text)

    expect(handleChange).toHaveBeenCalledTimes(text.length)
    // expect(input).toHaveValue(text)
  })
})
