import api from '../config/api'

(() => {
  const token = window.localStorage.getItem('token')
  token &&
    api.setHeader('Authorization', token)
})()

export default {
  getBooks: () => api.get('/books')
}
