import axios, { AxiosRequestConfig, isAxiosError } from 'axios';
import { LOCAL_STORAGE_KEY } from '@/constants';
import { getItemFromLocalStorage, removeItemFromLocalStorage, setItemToLocalStorage } from '@/utils';
import superJobApi from './super-job-api';

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

axiosInstance.interceptors.response.use((res) => res, onResponseError);

async function onResponseError(err: any): Promise<any> {
  const res = await handleResponseError(err);
  return res;
}

const handleResponseError = async (err: any): Promise<any> => {
  if (isAxiosError(err)) {
    const originalConfig = err.config as AxiosRequestConfig;
    const errStatus = err.response?.status;

    switch (errStatus) {
    case 401: {
      const res = await handleUnauthorizedError(originalConfig);
      return res;
    }
    }
  }

  return Promise.reject(err);
};

const handleUnauthorizedError = async (config: AxiosRequestConfig): Promise<any> => {
  try {
    const { access_token, refresh_token } = await superJobApi.getTokens();
    setItemToLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN, access_token);
    setItemToLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN, refresh_token);

    return axiosInstance(config);
  } catch (error) {
    removeItemFromLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    removeItemFromLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);

    return Promise.reject(error);
  }
};
