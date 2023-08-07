import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AxiosError } from 'axios'
import AxiosApi from 'axios.config'
import { UserFromApiDto, mapApiDataDtoFromBackToFront } from 'helpers/dto'
import { ApiContextType, Basket, LoginData } from 'helpers/types'

interface Props {
  children: ReactNode
}

const ApiContext = React.createContext<ApiContextType | undefined>(undefined)

export const ApiProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserFromApiDto | null>(null)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token)
      (async () => {
        try {
          const response = await AxiosApi.get('/api/data')

          const dtoResponse = mapApiDataDtoFromBackToFront(response.data)

          setUser(dtoResponse)
        } catch (e: unknown) {
          // don't handle error, because after token expiration error will be thrown
          // setError('Invalid token')
        }
      })()
  }, [])

  const signIn = async (formData: LoginData): Promise<void> => {
    try {
      const response = await AxiosApi.post('/api/auth', formData)

      const dtoResponse = mapApiDataDtoFromBackToFront(response.data)

      setUser(dtoResponse)
      localStorage.setItem('token', response.data.data)
    } catch (error: unknown) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }

  const signOut = (): void => {
    setUser(null)
    localStorage.removeItem('token')
  }

  const signUp = async (formData: LoginData): Promise<void> => {
    try {
      await AxiosApi.post('/api/users', formData)
      navigate('/login')
    } catch (error: unknown) {
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }

  const addOrder = async (basket: Basket): Promise<void> => {
    try {
      await AxiosApi.post('/api/users/addOrder', {
        email: user?.email,
        orders: basket,
      })

      // After adding new order you should get new data
      const response = await AxiosApi.get('/api/data')

      const dtoResponse = mapApiDataDtoFromBackToFront(response.data)
      setUser(dtoResponse)

      // setUser(response.data)
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error('Error adding basket to user', error)
      }
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
