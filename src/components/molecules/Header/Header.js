import React from 'react'

import { StyledHeader } from 'components/molecules/Header/Header.styles'

import NavigationIcons from '../../organism/NavigationIcons/NavigationIcons'

const Header = ({ children, isUnauthorizedApp }) => {
  return (
    <StyledHeader isUnauthorizedApp={isUnauthorizedApp}>
      {children}
      {isUnauthorizedApp ? null : (
        <div>
          <NavigationIcons />
        </div>
      )}
    </StyledHeader>
  )
}

export default Header
