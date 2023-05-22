import axios from 'axios';
import { LOCAL_STORAGE_KEY } from '@/constants';
import { getItemFromLocalStorage } from '@/utils';

export const axiosInstance = axios.create({
  baseURL: 'https://startup-summer-proxy-production.up.railway.app/2.0/',
  timeout: 2000,
  headers: {
    'x-secret-key': process.env.NEXT_PUBLIC_SECRET_KEY,
    'X-Api-App-Id': process.env.NEXT_PUBLIC_API_APP_SECRET_KEY,
  },
});

const pathsWithoutAuth = ['oauth2/password/', 'oauth2/refresh_token/', 'catalogues/'];

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getItemFromLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  const url = config.url as string;

  if (!pathsWithoutAuth.includes(url)) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
});
