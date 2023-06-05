import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Footer from 'components/molecules/Footer/Footer'
import Header from 'components/molecules/Header/Header'
import SearchBar from 'components/molecules/SearchBar/SearchBar'
import { ThemeProvider } from 'styled-components'

import StoreProvider from './StoreProvider'

const AppProviders = ({ children }) => {
  const user = localStorage.getItem('token')
  // const { isShowingSearchBar } = useSelector((state) => state.searchBar)
  const isShowingSearchBar = !!localStorage.getItem('isShowingSearchBar')
  return (
    <StoreProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* {!user && <Header isUnauthorizedApp>Your Fragnaces</Header>} */}
          {isShowingSearchBar && user ? <SearchBar /> : <Header>Your Fragnaces</Header>}
          {children}
          {user && <Footer />}
        </ThemeProvider>
      </Router>
    </StoreProvider>
  )
}

export default AppProviders
