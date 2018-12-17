import api from 'config/api';

export default {
  getResults: () => api.get('api/result'),
  showUser: id => api.get('/user', { id })
};
