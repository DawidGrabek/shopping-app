import { useSelector } from 'react-redux'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Header from 'components/molecules/Header/Header'
import Login from 'components/pages/Login/Login'
import Register from 'components/pages/Register/Register'
import { ThemeProvider } from 'styled-components'

const UnauthorizedApp = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header isUnauthorizedApp>Your Fragnaces</Header>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Router>
  )
}

export default UnauthorizedApp
