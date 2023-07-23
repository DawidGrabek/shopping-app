import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import { RootState } from 'app/store'
import { OrderDetails } from 'assets/types'
import Footer from 'components/molecules/Footer/Footer'
import Header from 'components/molecules/Header/Header'
import BasketList from 'components/organism/BasketList/BasketList'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import SearchBar from 'components/organism/SearchBar/SearchBar'
import Order from 'components/pages/Order/Order'
import OrderFinal from 'components/pages/OrderFinal/OrderFinal'
import Profile from 'components/pages/Profile/Profile'
import { add } from 'features/orderSlice'

const AuthorizedApp: React.FC = () => {
  const { isShowingSearchBar } = useSelector((state: RootState) => state.searchBar)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Separate this function for testing purposes
  const onSubmitOrder: SubmitHandler<OrderDetails> = (data) => {
    dispatch(add(data))
    navigate('/order/final')
  }

  return (
    <>
      {isShowingSearchBar ? <SearchBar /> : <Header>Your Fragnaces</Header>}
      <Routes>
        <Route path="/basket" element={<BasketList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order/final" element={<OrderFinal />} />
        <Route path="/order" element={<Order onSubmit={onSubmitOrder} />} />
        <Route path="/" element={<FragranceList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AuthorizedApp
