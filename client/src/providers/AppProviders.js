import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import { ApiProvider } from 'hooks/useApi'
import { ThemeProvider } from 'styled-components'

import StoreProvider from './StoreProvider'

const AppProviders = ({ children }) => {
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

export default AppProviders
