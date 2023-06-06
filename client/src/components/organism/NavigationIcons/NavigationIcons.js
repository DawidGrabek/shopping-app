import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { ReactComponent as HouseIcon } from 'assets/icons/house-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg'
import {
  BasketWrapper,
  StyledCircle,
  StyledBasketIcon,
} from 'components/organism/NavigationIcons/NavigationIcons.styles'
import { toggleSearching } from 'features/searchBarSlice'

// WARTO SIE ZASTANOWIC TODO

// export const HouseIconLink = styled.component

const NavigationIcons = (props) => {
  const { basket } = useSelector((state) => state.basket)
  const dispatch = useDispatch()
  const amount = basket.length || 0
  const handleClick = () => dispatch(toggleSearching())

  return (
    <>
      <Link to="/">
        <HouseIcon {...props} name="home" style={{ cursor: 'pointer' }} />
      </Link>
      <SearchIcon onClick={handleClick} {...props} name="search" style={{ cursor: 'pointer' }} />
      <Link to="profile">
        <UserIcon {...props} name="profile" style={{ cursor: 'pointer' }} />
      </Link>
      <Link to="basket">
        <BasketWrapper numOfFragrances={amount}>
          <StyledBasketIcon {...props} name="basket" />
          <StyledCircle>{amount}</StyledCircle>
        </BasketWrapper>
      </Link>
    </>
  )
}

export default NavigationIcons
