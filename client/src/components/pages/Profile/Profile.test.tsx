import userEvent from '@testing-library/user-event'
import { User } from 'helpers/types'
import * as hooks from 'hooks/useApi'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import Profile from './Profile'

const getMockAuth = (user: User | null) => ({
  user,
  signIn: vi.fn(),
  signOut: vi.fn(),
  signUp: vi.fn(),
  error: null,
  addOrder: vi.fn(),
})

const mockUser = {
  _id: '1',
  email: 'test@test.com',
  firstName: 'TestName',
  lastName: 'TestSurname',
  orders: [
    { _id: '1', fragranceName: 'Fragrance 1', price: 150, amount: 1, capacity: 100 },
    {
      _id: '2',
      fragranceName: 'Fragrance 2',
      price: 75,
      amount: 1,
      capacity: 100,
    },
  ],
}

describe('<Profile />', () => {
  it('Renders the user information and orders', () => {
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => getMockAuth(mockUser))
    render(<Profile />)

    // Assert that user information is displayed
    expect(screen.getByText(`First name:`)).toBeInTheDocument()
    expect(screen.getByText(mockUser.firstName)).toBeInTheDocument()

    expect(screen.getByText(`Last name:`)).toBeInTheDocument()
    expect(screen.getByText(mockUser.lastName)).toBeInTheDocument()

    expect(screen.getByText(`Email:`)).toBeInTheDocument()
    expect(screen.getByText(mockUser.email)).toBeInTheDocument()

    // Assert that order information is displayed
    expect(
      screen.getByText(
        `${mockUser.orders[0].amount} x ${mockUser.orders[0].fragranceName} - ${
          mockUser.orders[0].price * mockUser.orders[0].amount
        }zł`
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        `${mockUser.orders[1].amount} x ${mockUser.orders[1].fragranceName} - ${
          mockUser.orders[1].price * mockUser.orders[1].amount
        }zł`
      )
    ).toBeInTheDocument()
  })

  it('Calls the signOut function when the log out button is clicked', () => {
    const mockAuth = getMockAuth(mockUser)
    vi.spyOn(hooks, 'useAuth').mockReturnValue(mockAuth)

    render(<Profile />)

    const logoutButton = screen.getByText('Log out')
    userEvent.click(logoutButton)

    expect(mockAuth.signOut).toHaveBeenCalledTimes(1)
  })
})
