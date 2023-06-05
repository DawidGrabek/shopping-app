import { useState } from 'react'

import axios from 'axios'

const useSignup = () => {
  const [error, setError] = useState('')

  const handleSubmit = async (formData) => {
    try {
      const url = 'http://localhost:8080/api/users'
      const { data: res } = await axios.post(url, formData)
      window.location = '/'
      console.log(res.message)
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message)
      }
    }
  }

  return { error, handleSubmit }
}

export default useSignup
