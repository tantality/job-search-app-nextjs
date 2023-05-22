/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AxiosRequestConfig, isAxiosError } from 'axios';
import { LOCAL_STORAGE_KEY } from '@/constants';
import { setItemToLocalStorage, removeItemFromLocalStorage, getItemFromLocalStorage } from '@/utils';
import { axiosInstance } from '../axios';
import superJobApi from '../super-job-api';

interface ExtendedAxiosConfig extends AxiosRequestConfig {
  retry: boolean;
}

export const onRejectedResponse = async (err: any): Promise<any> => {
  const res = await handleResponseError(err);
  return res;
};

const handleResponseError = async (err: any): Promise<any> => {
  if (isAxiosError(err)) {
    const requestConfig = err.config as ExtendedAxiosConfig;
    const errStatus = err.response?.status;

    if (errStatus && requestConfig.retry) {
      return Promise.reject(err);
    }

    switch (errStatus) {
    case 401: {
      const res = await handleUnauthorizedError(requestConfig);
      return res;
    }
    case 410: {
      const res = await handleExpiredTokenError(requestConfig);
      return res;
    }
    }
  }

  return Promise.reject(err);
};

const handleUnauthorizedError = async (config: ExtendedAxiosConfig): Promise<any> => {
  config.retry = true;

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

const handleExpiredTokenError = async (config: ExtendedAxiosConfig): Promise<any> => {
  config.retry = true;

  try {
    const refreshToken = getItemFromLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
    const refreshTokenAsString = String(refreshToken);
    const { access_token, refresh_token } = await superJobApi.refreshTokens(refreshTokenAsString);

    setItemToLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN, access_token);
    setItemToLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN, refresh_token);

    return axiosInstance(config);
  } catch (error) {
    removeItemFromLocalStorage(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    removeItemFromLocalStorage(LOCAL_STORAGE_KEY.REFRESH_TOKEN);

    return Promise.reject(error);
  }
};
