import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? "http://18.191.144.188:8000/"
    : "http://localhost:8000/";

console.log(process.env.NODE_ENV)
  
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
