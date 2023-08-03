// axiosConfig.js

import axios from 'axios';

const baseURL = 'http://localhost:8000/';
// Defina as configurações padrão do Axios com a URL base da API
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
