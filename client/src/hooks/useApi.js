import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import API from 'axios.config'

const ApiContext = React.createContext({})

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      ;(async () => {
        try {
          const response = await API.get('/api/data')
          setUser(response.data)
          navigate('/')
        } catch (e) {
          console.log(e)
        }
      })()
    }
  }, [])

  const signIn = async (formData) => {
    try {
      const response = await API.post('/api/auth', formData)
      setUser(response.data.user)
      localStorage.setItem('token', response.data.data)
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  const signUp = async (formData) => {
    try {
      await API.post('/api/users', formData)
      navigate('/login')
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }
  }

  const addOrder = async (basket) => {
    try {
      await API.post('/api/users/addOrder', {
        email: user.email,
        orders: basket,
      })
    } catch (error) {
      console.error('Error adding basket to user', error)
    }
  }

  return (
    <ApiContext.Provider value={{ user, signIn, signOut, signUp, error, addOrder }}>
      {children}
    </ApiContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(ApiContext)

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext')
  }

  return auth
}
