import api from '../config/api';

export default {
  getResults: () => api.get('/result'),
  showUser: id => api.get('/user', { id })
};
