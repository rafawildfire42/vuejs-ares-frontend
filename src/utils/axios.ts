import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? "https://backend.aresprojetos.com.br/"
    : "http://localhost:8000/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
