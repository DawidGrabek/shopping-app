import React from 'react'

import Button from 'components/atoms/Button/Button'
import useAuth from 'hooks/useAuth'

import { Field, Wrapper } from './Profile.styles'

const Profile = () => {
  const { logOut, user } = useAuth()

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
      <Button isBig onClick={logOut}>
        Log out
      </Button>
    </Wrapper>
  )
}

export default Profile
