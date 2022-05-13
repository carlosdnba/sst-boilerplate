import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})
