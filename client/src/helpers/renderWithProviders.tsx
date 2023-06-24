import { ReactNode } from 'react'

import { render } from '@testing-library/react'
import AppProviders from 'providers/AppProviders'

type Children = ReactNode

const renderWithProviders = (children: Children) => {
  return render(<AppProviders>{children}</AppProviders>)
}

export default renderWithProviders
