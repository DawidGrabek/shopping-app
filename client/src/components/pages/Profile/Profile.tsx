import React from 'react'

import Button from 'components/atoms/Button/Button'
import { OrderFromApiDto } from 'helpers/dto'
import { useAuth } from 'hooks/useApi'

import { Field, Wrapper } from './Profile.styles'

const Profile: React.FC = () => {
  const { signOut, user } = useAuth()

  const orderTotalPrice = (order: OrderFromApiDto) => order.price * order.amount

  return (
    <Wrapper>
      <Field>
        <label>First name:</label>
        <span>{user?.firstName}</span>
      </Field>
      <Field>
        Last name: <span>{user?.lastName}</span>
      </Field>
      <Field>
        Email: <span>{user?.email}</span>
      </Field>
      <ul>
        {user?.orders.map((order: OrderFromApiDto) => (
          <li key={order.id}>
            {order.amount} x {order.name} - {orderTotalPrice(order)}zł
          </li>
        ))}
      </ul>
      <Button isBig onClick={signOut}>
        Log out
      </Button>
    </Wrapper>
  )
}

export default Profile
