import React from 'react'
import { StyledHeader } from 'components/molecules/Header/Header.styles'
import NavigationIcons from '../NavigationIcons/NavigationIcons'

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {children}
      <div>
        <NavigationIcons />
      </div>
    </StyledHeader>
  )
}

export default Header
