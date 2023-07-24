import userEvent from '@testing-library/user-event'
import { User } from 'assets/types'
import * as hooks from 'hooks/useApi'
import { render, screen, waitFor } from 'test-utils'
import { vi } from 'vitest'

import Login from './Login'

const getMockAuth = (user: User | null) => ({
  user,
  signIn: vi.fn(),
  signOut: vi.fn(),
  signUp: vi.fn(),
  error: '',
  addOrder: vi.fn(),
})

describe('<Login />', () => {
  it('Renders the login form', () => {
    render(<Login />)

    // Assert that the login form elements are rendered
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument()
    expect(screen.getByText("You don't have an account?")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sign up' })).toBeInTheDocument()
  })

  it('Diplays error message when wrong credentials are passed', async () => {
    render(<Login />)

    // Enter form data
    userEvent.type(screen.getByLabelText('E-mail'), 'test@test.com')
    userEvent.type(screen.getByLabelText('Password'), 'password123')

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Log in' }))

    // Assert that the error message is displayed
    await waitFor(() => expect(screen.getByText(/Invalid/i)).toBeInTheDocument())
  })

  it('Calls the signIn function with the form data on form submission', async () => {
    // null means that the user is not authenticated
    const mockAuth = getMockAuth(null)
    vi.spyOn(hooks, 'useAuth').mockReturnValue(mockAuth)
    render(<Login />)

    // Enter form data
    userEvent.type(screen.getByLabelText('E-mail'), 'test@test.com')
    userEvent.type(screen.getByLabelText('Password'), 'password123')

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Log in' }))

    // Assert that the signIn function is called with the form data
    await waitFor(() => expect(mockAuth.signIn).toHaveBeenCalledTimes(1))
    expect(mockAuth.signIn).toHaveBeenCalledWith({
      email: 'test@test.com',
      password: 'password123',
    })
  })
})
