import React from 'react'

import Button from 'components/atoms/Button/Button'
import useAuth from 'hooks/useAuth'

import { Field, Wrapper } from './Profile.styles'

const Profile = () => {
  const { logOut } = useAuth()
  const firstName = 'Dawid'
  const lastName = 'Grabek'
  const email = 'Dawid@gmail.com'

  const handleLogOut = () => {
    logOut()
  }

  return (
    <Wrapper>
      <Field>
        <label>First name:</label>
        <span>{firstName}</span>
      </Field>
      <Field>
        Last name: <span>{lastName}</span>
      </Field>
      <Field>
        Email: <span>{email}</span>
      </Field>
      {/* <div>
        <ul>
          <li></li>
        </ul>
      </div> */}

      <Button isBig onClick={handleLogOut}>
        Log out
      </Button>
    </Wrapper>
  )
}

export default Profile
