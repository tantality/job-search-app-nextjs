import { InternalAxiosRequestConfig } from 'axios';
import { LOCAL_STORAGE_KEY } from '@/constants';
import { getItemFromLocalStorage } from '@/utils';

const pathsWithoutAuth = ['oauth2/password/', 'oauth2/refresh_token/', 'catalogues/'];

export const onFulfilledRequest = (
  config: InternalAxiosRequestConfig<any>,
): InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>> => {
  const accessToken = getItemFromLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  const url = config.url as string;

  if (!pathsWithoutAuth.includes(url)) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};
