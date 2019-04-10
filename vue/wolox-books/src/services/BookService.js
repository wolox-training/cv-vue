import api from '../config/api'

export default {
  register: body => api.post('/users', body)
}
