import React from 'react'

import Button from 'components/atoms/Button/Button'
import styled from 'styled-components'

export const Wrapper = styled.div`
  height: calc(100vh - 70px - 75px);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 30px;

  & > button {
    width: 200px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`

export const Field = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.xl};
  gap: 8px;
  margin-bottom: 10px;

  & > span {
    font-weight: 700;
  }
`

const Profile = () => {
  const firstName = 'Dawid'
  const lastName = 'Grabek'
  const email = 'Dawid@gmail.com'
  // const orders = 'Mancera Cedrat Boise'

  const handleLogOut = () => {
    console.log('wyloguj')
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
