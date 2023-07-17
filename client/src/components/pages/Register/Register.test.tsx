import userEvent from '@testing-library/user-event'
import { User } from 'assets/types'
import * as hooks from 'hooks/useApi'
import { render, screen, waitFor } from 'test-utils'
import { vi } from 'vitest'

import Register from './Register'

const getMockAuth = (user: User | null) => ({
  user,
  signIn: vi.fn(),
  signOut: vi.fn(),
  signUp: vi.fn(),
  error: '',
  addOrder: vi.fn(),
})

describe('<Register />', () => {
  it('Renders the registration form', () => {
    render(<Register />)

    // Assert that the form fields are rendered
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Repeat password')).toBeInTheDocument()

    // Assert that the submit button is rendered
    expect(screen.getByRole('button', { name: 'Sign up' })).toBeInTheDocument()

    // Assert that the "You have an account?" link is rendered
    expect(screen.getByText('You have an account?')).toBeInTheDocument()

    // Assert that the "Log in" link is rendered and points to "/login"
    const loginLink = screen.getByText('Log in')
    expect(loginLink).toBeInTheDocument()
    expect(loginLink.closest('a')).toHaveAttribute('href', '/login')
  })

  it('Calls the signUp function with the form data on form submission', async () => {
    // null means that the user is not authenticated
    const mockAuth = getMockAuth(null)
    vi.spyOn(hooks, 'useAuth').mockReturnValue(mockAuth)
    render(<Register />)

    // Enter form data
    userEvent.type(screen.getByLabelText('E-mail'), 'test@test.com')
    userEvent.type(screen.getByLabelText('First name'), 'John')
    userEvent.type(screen.getByLabelText('Last name'), 'Doe')
    userEvent.type(screen.getByLabelText('Password'), 'password123')
    userEvent.type(screen.getByLabelText('Repeat password'), 'password123')

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Sign up' }))

    // Assert that the signUp function is called with the form data
    await waitFor(() => expect(mockAuth.signUp).toHaveBeenCalledTimes(1))
    expect(mockAuth.signUp).toHaveBeenCalledWith({
      email: 'test@test.com',
      firstName: 'John',
      lastName: 'Doe',
      password: 'password123',
    })
  })

  it('Displays the error message when there is a registration error', async () => {
    // Simulate an registration error by setting the error property in mockAuth
    const mockAuth = getMockAuth(null)
    mockAuth.error = 'Registration failed'

    vi.spyOn(hooks, 'useAuth').mockReturnValue(mockAuth)
    render(<Register />)

    // Enter form data
    userEvent.type(screen.getByLabelText('E-mail'), 'test@test.com')
    userEvent.type(screen.getByLabelText('First name'), 'John')
    userEvent.type(screen.getByLabelText('Last name'), 'Doe')
    userEvent.type(screen.getByLabelText('Password'), 'password123')
    userEvent.type(screen.getByLabelText('Repeat password'), 'password123')

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Sign up' }))

    // Assert that the error message is displayed
    await waitFor(() => expect(screen.getByText('Registration failed')).toBeInTheDocument())
  })

  it('Displays the error message when the passwords do not match', async () => {
    // Simulate an registration error by setting the error property in mockAuth
    const mockAuth = getMockAuth(null)
    mockAuth.error = 'Registration failed'

    vi.spyOn(hooks, 'useAuth').mockReturnValue(mockAuth)
    render(<Register />)

    // Enter form data
    userEvent.type(screen.getByLabelText('E-mail'), 'test@test.com')
    userEvent.type(screen.getByLabelText('First name'), 'John')
    userEvent.type(screen.getByLabelText('Last name'), 'Doe')
    userEvent.type(screen.getByLabelText('Password'), 'password123')
    userEvent.type(screen.getByLabelText('Repeat password'), 'password1234')

    // Submit the form
    userEvent.click(screen.getByRole('button', { name: 'Sign up' }))

    // Assert that the error message is displayed
    await waitFor(() => expect(screen.getByText(/must match/i)).toBeInTheDocument())
  })
})
