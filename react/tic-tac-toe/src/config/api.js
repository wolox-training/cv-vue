import { create } from 'apisauce';

const api = create({
  /* No toma el valor de API_BASE_URL */
  // baseURL: process.env.API_BASE_URL,
  baseURL: 'http://localhost:3000',
  timeout: 5000
});

export default api;
