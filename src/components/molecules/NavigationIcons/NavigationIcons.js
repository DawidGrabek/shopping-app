import { ReactComponent as HouseIcon } from 'assets/images/house-icon.svg'
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg'
import { ReactComponent as ShoppingCartIcon } from 'assets/images/shopping-cart-icon.svg'
import { ReactComponent as UserIcon } from 'assets/images/user-icon.svg'

// WARTO SIE ZASTANOWIC TODO
const NavigationIcons = (props) => {
  return (
    <>
      <HouseIcon {...props} name="home" style={{ cursor: 'pointer' }} />
      <SearchIcon {...props} name="search" style={{ cursor: 'pointer' }} />
      <UserIcon {...props} name="profile" style={{ cursor: 'pointer' }} />
      <ShoppingCartIcon {...props} name="shopping-cart" style={{ cursor: 'pointer' }} />
    </>
  )
}

export default NavigationIcons
