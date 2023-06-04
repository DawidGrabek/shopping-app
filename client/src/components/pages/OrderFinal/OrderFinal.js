import React from 'react'
import { useSelector } from 'react-redux'

import FormField from 'components/molecules/FormField/FormField'

import { ProductsWrapper, TotalPrice, Wrapper } from './OrderFinal.styles'

const OrderFinal = () => {
  const {
    order: { order },
    basket: { basket },
  } = useSelector((state) => state)
  const totalPrice = basket.reduce((acc, { price, amount }) => (acc += price * amount), 0)

  return (
    <Wrapper>
      <h1>Summary</h1>
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
    </Wrapper>
  )
}

export default OrderFinal
