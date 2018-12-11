import api from '../config/api';

export default {
  getToken: () => api.get('/user'),
};
