import React from 'react'
import { StyledHeader } from 'components/molecules/Header/Header.styles'

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}

export default Header
