import React from 'react'

import Button from 'components/atoms/Button/Button'
import { useAuth } from 'hooks/useApi'

import { Field, Wrapper } from './Profile.styles'

const Profile = () => {
  const { signOut, user } = useAuth()

  return (
    <Wrapper>
      <Field>
        <label>First name:</label>
        <span>{user.firstName}</span>
      </Field>
      <Field>
        Last name: <span>{user.lastName}</span>
      </Field>
      <Field>
        Email: <span>{user.email}</span>
      </Field>
      <ul>
        {user.orders.map((order) => (
          <li key={order._id}>
            {order.amount} x {order.name} - {order.price}zł
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
