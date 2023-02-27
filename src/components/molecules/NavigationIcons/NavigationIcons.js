import { ReactComponent as HouseIcon } from 'assets/icons/house-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg'
import {
  BasketWrapper,
  StyledCircle,
  StyledBasketIcon,
} from 'components/molecules/NavigationIcons/NavigationIcons.styles'
import React from 'react'
import { useSelector } from 'react-redux'

// WARTO SIE ZASTANOWIC TODO
const NavigationIcons = (props) => {
  const { setBasketIsOpen } = props
  const basket = useSelector((state) => state.basket)
  const amount = basket.length

  return (
    <>
      <HouseIcon {...props} name="home" style={{ cursor: 'pointer' }} />
      <SearchIcon {...props} name="search" style={{ cursor: 'pointer' }} />
      <UserIcon {...props} name="profile" style={{ cursor: 'pointer' }} />
      <BasketWrapper
        numOfFragrances={amount}
        onClick={(prevState) => setBasketIsOpen((prevState) => !prevState)}
      >
        <StyledBasketIcon {...props} name="basket" />
        <StyledCircle>{amount}</StyledCircle>
      </BasketWrapper>
    </>
  )
}

export default NavigationIcons
