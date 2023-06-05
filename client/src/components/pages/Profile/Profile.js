import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Button from 'components/atoms/Button/Button'
import useAuth from 'hooks/useAuth'

import { Field, Wrapper } from './Profile.styles'

const Profile = () => {
  const [data, setData] = useState(null)
  const { logOut, user } = useAuth()

  useEffect(() => {
    async function fetchData() {
      try {
        const url = 'http://localhost:8080/api/auth'
        const { data: res } = await axios.post(url)
        // const jsonUser = JSON.stringify(res.user)
        setData(res.user)
        console.log(res)
        // localStorage.setItem('user', jsonUser)
        // localStorage.setItem('token', res.data)
        // window.location = '/'
      } catch (error) {
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
          // setError(error.response.data.message)
          // setIsLogged(false)
          // setUser(null)
        }
      }
    }
    fetchData()
    console.log(data)
  }, [])

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
      {/* <div>
        <ul>
          <li></li>
        </ul>
      </div> */}

      <Button isBig onClick={logOut}>
        Log out
      </Button>
    </Wrapper>
  )
}

export default Profile
