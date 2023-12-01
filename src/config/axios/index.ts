import axios from 'axios'

export const BASE_URL = `${process.env.REACT_APP_API_SCHEME}://${process.env.REACT_APP_API_HOST}`

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
