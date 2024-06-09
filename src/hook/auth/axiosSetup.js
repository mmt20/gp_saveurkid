import axios from 'axios';
import { refreshToken, isTokenExpired } from './auth';

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (isTokenExpired(token)) {
      await refreshToken();
      config.headers['Authorization'] =
        'Bearer ' + localStorage.getItem('token');
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
