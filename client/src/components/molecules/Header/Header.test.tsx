import { render, screen } from 'test-utils'

import Header from './Header'

describe('<Header />', () => {
  it('Should render Header component when isUnauthorizedApp is not passing - navigations icons will be rendered', () => {
    render(<Header>Test</Header>)

    const icons = screen.getByTestId('navigation-icons')

    expect(icons).toBeInTheDocument()
  })

  it('Should render Header component when isUnauthorizedApp is passing', () => {
    render(<Header isUnauthorizedApp>Test</Header>)

    const icons = screen.queryByTestId('navigation-icons')

    expect(icons).toBeNull()
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
})
