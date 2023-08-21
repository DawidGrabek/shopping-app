import { FrontendUserInterface } from 'helpers/types'
import * as hooks from 'hooks/useApi'
import { render, screen } from 'test-utils'
import { vi } from 'vitest'

import Root from './Root'

const testUser = {
  id: '1',
  password: 'testPassword',
  data: 'testData',
  email: 'test@test.com',
  firstName: 'TestName',
  lastName: 'TestSurname',
  orders: [{ id: '1', amount: 1, name: 'Test', price: 150, capacity: 100 }],
}

const getMockAuth = (user: FrontendUserInterface | null) => ({
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
    render(<Root />)

    expect(screen.getByText(/log in/i, { selector: 'h1' })).toBeInTheDocument()
  })

  it('Should render AuthorizedApp on route / when user is authenticated', () => {
    vi.spyOn(hooks, 'useAuth').mockImplementation(() => getMockAuth(testUser))

    render(<Root />)

    const authorizedApp = screen.getByTestId('authorized-app')
    expect(authorizedApp).toBeInTheDocument()
  })
})
