import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import { ApiProvider } from 'hooks/useApi'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import StoreProvider from './StoreProvider'

interface Props {
  children: ReactNode
}

const AppProviders: React.FC<Props> = ({ children }) => {
  return (
    <StoreProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <ApiProvider>
            <GlobalStyle />
            {children}
          </ApiProvider>
        </ThemeProvider>
      </Router>
    </StoreProvider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.node,
}

export default AppProviders
