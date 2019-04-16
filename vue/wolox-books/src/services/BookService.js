import api from '../config/api'
import { getToken } from '../services/LocalStorageService'

(() => {
  const token = getToken()
  token &&
    api.setHeader('Authorization', token)
})()

export default {
  getBooks: () => api.get('/books')
}
