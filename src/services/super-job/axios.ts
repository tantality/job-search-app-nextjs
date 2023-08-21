import axios from 'axios';
import { onFulfilledRequest, onRejectedResponse } from './interceptor-handlers';

export const axiosInstance = axios.create({
  baseURL: 'https://proxy-for-superjob-api.onrender.com/2.0/',
  timeout: 2000,
  headers: {
    'x-secret-key': process.env.NEXT_PUBLIC_SECRET_KEY,
    'X-Api-App-Id': process.env.NEXT_PUBLIC_API_APP_SECRET_KEY,
  },
});

axiosInstance.interceptors.request.use(onFulfilledRequest);
axiosInstance.interceptors.response.use((res) => res, onRejectedResponse);
