import { useEffect, useState } from 'react'

import axios from 'axios'

const useAuth = () => {
  const [error, setError] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    localStorage.getItem('token') ? setIsLogged(true) : setIsLogged(false)
  }, [])

  const handleSubmit = async (formData) => {
    try {
      const url = 'http://localhost:8080/api/auth'
      const { data: res } = await axios.post(url, formData)
      console.log(formData)
      localStorage.setItem('token', res.data)
      window.location = '/'
      setIsLogged(true)
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
        setIsLogged(false)
      }
    }
  }

  const logOut = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
    window.location = '/'
  }

  return { error, handleSubmit, isLogged, logOut }
}

export default useAuth
