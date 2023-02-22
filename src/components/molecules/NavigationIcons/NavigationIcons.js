import { ReactComponent as HouseIcon } from 'assets/icons/house-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg'
import {
  ShoppingCartWrapper,
  StyledCircle,
  StyledShoppingCartIcon,
} from 'components/organism/FragranceList/FragranceList.styles'
import React from 'react'

// WARTO SIE ZASTANOWIC TODO
const NavigationIcons = (props) => {
  const numOfFragrances = 2
  return (
    <>
      <HouseIcon {...props} name="home" style={{ cursor: 'pointer' }} />
      <SearchIcon {...props} name="search" style={{ cursor: 'pointer' }} />
      <UserIcon {...props} name="profile" style={{ cursor: 'pointer' }} />
      <ShoppingCartWrapper numOfFragrances={numOfFragrances}>
        <StyledShoppingCartIcon {...props} name="shopping-cart" />
        <StyledCircle>{numOfFragrances}</StyledCircle>
      </ShoppingCartWrapper>
    </>
  )
}

export default NavigationIcons
