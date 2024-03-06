import axios from 'axios';
import { decryptData, getCookie } from '../utils/utils';

const rootUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;
export const axiosClient = axios.create({
  baseURL: rootUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Interceptors
axiosClient.interceptors.request.use(
  (config) => {
    const authToken = getCookie('token');

    if (authToken) {
      const decryptedToken = decryptData('token');
      config.headers['Authorization'] = `Bearer ${decryptedToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
