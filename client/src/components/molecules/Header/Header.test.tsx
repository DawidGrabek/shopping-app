import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderWithProviders from 'helpers/renderWithProviders'
import { vi } from 'vitest'

import Header from './Header'

describe('<Header />', () => {
  it('Should render Header component when isUnauthorizedApp is not passing - navigations icons will be rendered', () => {
    renderWithProviders(<Header>Test</Header>)

    const icons = screen.getByTestId('navigation-icons')

    expect(icons).toBeInTheDocument()
  })

  it('Should render Header component when isUnauthorizedApp is passing', () => {
    renderWithProviders(<Header isUnauthorizedApp>Test</Header>)

    const icons = screen.queryByTestId('navigation-icons')

    expect(icons).toBeNull()
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
