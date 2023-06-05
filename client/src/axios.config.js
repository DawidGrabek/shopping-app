import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080',
})

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default API
