import { screen } from '@testing-library/react'
import { User } from 'assets/types'
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

const getMockAuth = (user: User | null) => ({
  user,
  signIn: vi.fn(),
  signOut: vi.fn(),
  signUp: vi.fn(),
  error: null,
  addOrder: vi.fn(),
})

describe('<Root />', () => {
  it('Should render UnauthorizedApp when user is not authenticated', () => {
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => getMockAuth(null))
    renderWithProviders(<Root />)

    expect(screen.getByText(/log in/i, { selector: 'h1' })).toBeInTheDocument()
  })

  it('Should render AuthorizedApp on route / when user is authenticated', () => {
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => getMockAuth(testUser))

    renderWithProviders(<Root />)

    const authorizedApp = screen.getByTestId('authorized-app')
    expect(authorizedApp).toBeInTheDocument()
  })
})
