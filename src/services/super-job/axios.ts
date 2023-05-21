import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://startup-summer-proxy-production.up.railway.app/2.0/',
  timeout: 2000,
  headers: {
    'x-secret-key': process.env.NEXT_PUBLIC_X_SECRET_KEY,
    'X-Api-App-Id': process.env.NEXT_PUBLIC_X_API_APP_ID,
  },
});
