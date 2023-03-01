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
import { Link } from 'react-router-dom'

// WARTO SIE ZASTANOWIC TODO

// export const HouseIconLink = styled.component

const NavigationIcons = ({ setBasketIsOpen }, props) => {
  const basket = useSelector((state) => state.basket)
  const amount = basket.length

  return (
    <>
      <Link to="/">
        <HouseIcon {...props} name="home" style={{ cursor: 'pointer' }} />
      </Link>
      <SearchIcon {...props} name="search" style={{ cursor: 'pointer' }} />
      <Link to="profile">
        <UserIcon {...props} name="profile" style={{ cursor: 'pointer' }} />
      </Link>
      <Link to="basket">
        <BasketWrapper
          numOfFragrances={amount}
          onClick={() => setBasketIsOpen((prevState) => !prevState)}
        >
          <StyledBasketIcon {...props} name="basket" />
          <StyledCircle>{amount}</StyledCircle>
        </BasketWrapper>
      </Link>
    </>
  )
}

export default NavigationIcons
