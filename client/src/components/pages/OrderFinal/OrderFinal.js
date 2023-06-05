import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'
import { clear } from 'features/basketSlice'
import useAuth from 'hooks/useAuth'

import { ProductsWrapper, TotalPrice, Wrapper } from './OrderFinal.styles'

const OrderFinal = () => {
  const { user, setUser } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    order: { order },
    basket: { basket },
  } = useSelector((state) => state)
  console.log(basket)
  const totalPrice = basket.reduce((acc, { price, amount }) => (acc += price * amount), 0)

  const handleClick = () => {
    const addOrderToUser = async () => {
      try {
        const { name, price, capacity, amount } = basket
        await axios.post('http://localhost:8080/api/users/addOrder', {
          email: user.email,
          orders: basket,
        })

        console.log('Basket added to user successfully')
      } catch (error) {
        console.error('Error adding basket to user', error)
      }
    }

    addOrderToUser()
    dispatch(clear())
    navigate('/')
  }

  return (
    <Wrapper>
      <h1>Summary</h1>
      <FormField
        id="firstName"
        labelText="First name"
        type={'text'}
        value={user?.firstName || ''}
        readOnly
        disabled
      />
      <FormField
        id="lastName"
        labelText="Last name"
        type={'text'}
        value={user?.lastName || ''}
        readOnly
        disabled
      />
      <FormField
        id="email"
        labelText="Email"
        type={'email'}
        value={user?.email || ''}
        readOnly
        disabled
      />
      <FormField id="city" labelText="City" type={'text'} value={order.city} readOnly disabled />
      <FormField
        id="postalCode"
        labelText="Postal Code"
        type={'text'}
        value={order.postalCode}
        readOnly
        disabled
      />
      <FormField
        id="street"
        labelText="Street"
        type={'text'}
        value={order.street}
        readOnly
        disabled
      />
      <FormField
        id="homeNumber"
        labelText="Home Number"
        type={'number'}
        value={order.homeNumber}
        readOnly
        disabled
      />
      <FormField
        id="mobileNumber"
        labelText="Mobile Number"
        type={'number'}
        value={order.mobileNumber}
        readOnly
        disabled
      />
      <ProductsWrapper>
        <h2>Products:</h2>
        {basket.map((item, i) => (
          <span key={i}>
            {item.amount} x {item.name} - {item.price}zł
          </span>
        ))}
        <TotalPrice>
          <span>
            Total Price: <b>{totalPrice.toFixed(2)}zł</b>
          </span>
        </TotalPrice>
      </ProductsWrapper>
      <Button isBig isBold onClick={handleClick}>
        Final
      </Button>
    </Wrapper>
  )
}

export default OrderFinal