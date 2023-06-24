import React from 'react'

import { screen } from '@testing-library/react'
import data from 'data'
import renderWithProviders from 'helpers/renderWithProviders'
import * as hooks from 'hooks/useApi'
import { vi } from 'vitest'

import Root from './Root'

const testUser = {
  _id: '1',
  email: 'test@test.com',
  firstName: 'TestName',
  lastName: 'TestSurname',
  orders: [{ _id: '1', amount: 1, fragranceName: 'Test', price: 150, capacity: 100 }],
}

describe('<Root />', () => {
  it('Should render UnauthorizedApp when user is not authenticated', () => {
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => ({
      user: null,
      signIn: vi.fn(),
      signOut: vi.fn(),
      signUp: vi.fn(),
      error: null,
      addOrder: vi.fn(),
    }))
    renderWithProviders(<Root />)

    expect(screen.getByText(/log in/i, { selector: 'h1' })).toBeInTheDocument()
  })

  it('Should render AuthorizedApp on route / when user is authenticated', () => {
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => ({
      user: testUser,
      signIn: vi.fn(),
      signOut: vi.fn(),
      signUp: vi.fn(),
      error: null,
      addOrder: vi.fn(),
    }))

    renderWithProviders(<Root />)

    const authorizedApp = screen.getByTestId('authorized-app')
    expect(authorizedApp).toBeInTheDocument()
  })
})
