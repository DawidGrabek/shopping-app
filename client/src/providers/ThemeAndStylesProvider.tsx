import React, { ReactNode } from 'react'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

interface Props {
  children: ReactNode
}

const ThemeAndStylesProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

ThemeAndStylesProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeAndStylesProvider
