import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

import Footer from 'components/molecules/Footer/Footer'
import Header from 'components/molecules/Header/Header'
import SearchBar from 'components/molecules/SearchBar/SearchBar'
import BasketList from 'components/organism/BasketList/BasketList'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import Order from 'components/pages/Order/Order'
import OrderFinal from 'components/pages/OrderFinal/OrderFinal'
import Profile from 'components/pages/Profile/Profile'

const AuthorizedApp = () => {
  const { isShowingSearchBar } = useSelector((state) => state.searchBar)

  return (
    <>
      {isShowingSearchBar ? <SearchBar /> : <Header>Your Fragnaces</Header>}
      <Routes>
        <Route path="/basket" element={<BasketList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order/final" element={<OrderFinal />} />
        <Route path="/order" element={<Order />} />
        <Route path="/" element={<FragranceList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AuthorizedApp
