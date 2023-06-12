import React, { ReactNode } from 'react'

import { StyledHeader } from 'components/molecules/Header/Header.styles'

import NavigationIcons from '../../organism/NavigationIcons/NavigationIcons'

interface Props {
  children: string | ReactNode
  isUnauthorizedApp?: boolean
}

const Header: React.FC<Props> = ({ children, isUnauthorizedApp }) => {
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
