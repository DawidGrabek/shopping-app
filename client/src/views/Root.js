import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Header from 'components/molecules/Header/Header'
import SearchBar from 'components/molecules/SearchBar/SearchBar'
import BasketList from 'components/organism/BasketList/BasketList'
import FragranceList from 'components/organism/FragranceList/FragranceList'
import Login from 'components/pages/Login/Login'
import Order from 'components/pages/Order/Order'
import OrderFinal from 'components/pages/OrderFinal/OrderFinal'
import Profile from 'components/pages/Profile/Profile'
import Register from 'components/pages/Register/Register'
import AuthorizedApp from 'components/templates/AuthorizedApp/AuthorizedApp'
import UnauthorizedApp from 'components/templates/UnauthorizedApp/UnauthorizedApp'
import useAuth from 'hooks/useAuth'

const Root = () => {
  const user = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && window.location.pathname !== '/register') {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <Routes>
      {!user ? (
        <>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </>
      ) : (
        <>
          <Route path="/basket" element={<BasketList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order/final" element={<OrderFinal />} />
          <Route path="/order" element={<Order />} />
          <Route path="/" element={<FragranceList />} />
        </>
      )}
    </Routes>
  )
}

export default Root
