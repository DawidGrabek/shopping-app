import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from 'app/store'
import { ReactComponent as HouseIcon } from 'assets/icons/house-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search-icon.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user-icon.svg'
import { toggleSearching } from 'features/searchBarSlice'

import { BasketWrapper, StyledCircle, StyledBasketIcon } from './NavigationIcons.styles'

const NavigationIcons: React.FC = () => {
  const { basket } = useSelector((state: RootState) => state.basket)
  const dispatch = useDispatch()
  const amount = basket.length || 0
  const handleClick = () => dispatch(toggleSearching())

  return (
    <>
      <Link to="/" data-testid="link-home">
        <HouseIcon name="home" style={{ cursor: 'pointer' }} />
      </Link>
      <SearchIcon
        onClick={handleClick}
        name="search"
        style={{ cursor: 'pointer' }}
        data-testid="search-icon"
      />
      <Link to="profile" data-testid="link-profile">
        <UserIcon name="profile" style={{ cursor: 'pointer' }} />
      </Link>
      <Link to="basket" data-testid="link-basket">
        <BasketWrapper>
          <StyledBasketIcon />
          <StyledCircle data-testid="amount">{amount}</StyledCircle>
        </BasketWrapper>
      </Link>
    </>
  )
}

export default NavigationIcons
