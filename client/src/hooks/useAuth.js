import { useEffect, useState } from 'react'

import axios from 'axios'

const useAuth = () => {
  const [error, setError] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    localStorage.getItem('token') ? setIsLogged(true) : setIsLogged(false)
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])

  const handleSubmit = async (formData) => {
    try {
      const url = 'http://localhost:8080/api/auth'
      const { data: res } = await axios.post(url, formData)
      const jsonUser = JSON.stringify(res.user)
      setUser(res.user)
      localStorage.setItem('user', jsonUser)
      localStorage.setItem('token', res.data)
      window.location = '/'
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
        // setIsLogged(false)
        setUser(null)
      }
    }
  }

  const logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    window.location = '/login'
  }

  return { error, handleSubmit, isLogged, logOut, user, setUser }
}

export default useAuth
