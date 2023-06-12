import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from 'app/store'
import Button from 'components/atoms/Button/Button'
import FormField from 'components/molecules/FormField/FormField'
import { clear } from 'features/basketSlice'
import { useAuth } from 'hooks/useApi'

import { ProductsWrapper, TotalPrice, Wrapper } from './OrderFinal.styles'

const OrderFinal = () => {
  const { user, addOrder } = useAuth()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    order: { order },
    basket: { basket },
  } = useSelector((state: RootState) => state)
  const totalPrice = basket.reduce((acc, { price, amount }) => (acc += price * amount), 0)

  const handleClick = () => {
    addOrder(basket)
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
        value={user?.firstName}
        readOnly
        disabled
      />
      <FormField
        id="lastName"
        labelText="Last name"
        type={'text'}
        value={user?.lastName}
        readOnly
        disabled
      />
      <FormField
        id="email"
        labelText="Email"
        type={'email'}
        value={user?.email}
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
        {basket.map((order, i) => (
          <span key={i}>
            {order.amount} x {order.fragranceName} - {order.price}zł
          </span>
        ))}
        <TotalPrice>
          <span>
            Total Price: <b>{totalPrice.toFixed(2)}zł</b>
          </span>
        </TotalPrice>
      </ProductsWrapper>
      <Button isBig onClick={handleClick}>
        Final
      </Button>
    </Wrapper>
  )
}

export default OrderFinal
