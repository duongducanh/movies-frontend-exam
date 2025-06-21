import axios from 'axios';
import { API_BASE_URL, API_ACCESS_TOKEN } from '../constants';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
});

export default axiosInstance;
