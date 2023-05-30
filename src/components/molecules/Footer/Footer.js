import React from 'react'

import { StyledFooter } from 'components/molecules/Footer/Footer.styles'

import NavigationIcons from '../../organism/NavigationIcons/NavigationIcons'

const Footer = (props) => {
  return (
    <StyledFooter>
      <NavigationIcons {...props} />
    </StyledFooter>
  )
}

export default Footer
