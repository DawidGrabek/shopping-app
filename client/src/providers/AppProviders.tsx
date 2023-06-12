import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ApiProvider } from 'hooks/useApi'
import PropTypes from 'prop-types'

import StoreProvider from './StoreProvider'
import ThemeAndStylesProvider from './ThemeAndStylesProvider'

interface Props {
  children: ReactNode
}

const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <StoreProvider>
      <Router>
        <ThemeAndStylesProvider>
          <ApiProvider>{children}</ApiProvider>
        </ThemeAndStylesProvider>
      </Router>
    </StoreProvider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node,
}

export default AppProviders
