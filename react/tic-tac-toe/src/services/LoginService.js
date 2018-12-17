import api from 'config/api';

export default {
  getToken: (body, headers) => {
    return api.post('/api/users/login', body, {headers : {'Content-Type': 'application/json'}})
  }
};
