import axios from 'axios'

const BASE_URL = '/'
const TIMEOUT = 3000

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
