import { RenderOptions } from '@testing-library/react'
import { render, screen } from 'test-utils'

import UnauthorizedApp from './UnauthorizedApp'

describe('<UnauthorizedApp />', () => {
  it('Renders Your Fragnaces header', () => {
    render(<UnauthorizedApp />)

    expect(screen.getByRole('heading', { name: 'Log in' })).toBeInTheDocument()
  })

  it('Renders Register component when on /register route', () => {
    render(<UnauthorizedApp />, { initialEntries: ['/register'] } as RenderOptions)

    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })

  it('Renders Login component when on /login route', () => {
    render(<UnauthorizedApp />, { initialEntries: ['/login'] } as RenderOptions)

    expect(screen.getByRole('heading', { name: 'Log in', level: 1 })).toBeInTheDocument()
  })

  it('Navigates to /login when on an unknown route', () => {
    render(<UnauthorizedApp />, { initialEntries: ['/random-path'] } as RenderOptions)

    expect(screen.getByRole('heading', { name: 'Log in', level: 1 })).toBeInTheDocument()
  })
})
