import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Order } from 'assets/types'
import AxiosApi from 'axios.config'

interface Props {
  children: ReactNode
}

interface FormData {
  email: string
  password: string
}

// TODO: add basket interface
interface ApiContextType {
  user: User
  signIn: (formData: FormData) => Promise<void>
  signOut: () => void
  signUp: (formData: FormData) => Promise<void>
  error: string | null
  addOrder: (basket: any) => Promise<void>
}

interface User {
  _id: string
  email: string
  firstName: string
  lastName: string
  orders: Order[]
}

const ApiContext = React.createContext<ApiContextType | undefined>(undefined)

export const ApiProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token)
      (async () => {
        try {
          const response = await AxiosApi.get('/api/data')
          setUser(response.data)
        } catch (e) {
          console.log(e)
        }
      })()
  }, [])

  const signIn = async (formData: FormData): Promise<void> => {
    try {
      const response = await AxiosApi.post('/api/auth', formData)
      setUser(response.data.user)
      localStorage.setItem('token', response.data.data)
    } catch (error: any) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }
  }

  const signOut = (): void => {
    setUser(null)
    localStorage.removeItem('token')
  }

  const signUp = async (formData: FormData): Promise<void> => {
    try {
      await AxiosApi.post('/api/users', formData)
      navigate('/login')
    } catch (error: any) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }
  }

  const addOrder = async (basket: any): Promise<void> => {
    try {
      await AxiosApi.post('/api/users/addOrder', {
        email: user.email,
        orders: basket,
      })

      // After adding new order you should get new data
      const response = await AxiosApi.get('/api/data')
      setUser(response.data)
    } catch (error: any) {
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
