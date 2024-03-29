import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import Header from 'components/molecules/Header/Header'
import Login from 'components/pages/Login/Login'
import Register from 'components/pages/Register/Register'
import { ThemeProvider } from 'styled-components'

const UnauthorizedApp: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header isUnauthorizedApp>Your Fragnaces</Header>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default UnauthorizedApp
