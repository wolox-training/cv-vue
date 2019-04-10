import { create } from 'apisauce'

const api = create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

export default api
