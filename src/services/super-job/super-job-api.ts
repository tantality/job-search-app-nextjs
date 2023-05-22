/* eslint-disable import/no-anonymous-default-export */
import { VacancyFilterType } from '@/types';
import { Industry } from '@/types/super-job/industries';
import { Tokens } from '@/types/super-job/tokens';
import { Vacancy, VacancyList } from '@/types/super-job/vacancies';
import { axiosInstance } from './axios';

class SuperJobApi {
  async getVacanciesByFilter(page: number, itemsCount: number, filter: VacancyFilterType): Promise<VacancyList> {
    const { paymentFrom, paymentTo, keyword, industryId } = filter;

    const res = await axiosInstance.get<VacancyList>('vacancies/', {
      params: {
        published: 1,
        count: itemsCount,
        page: page - 1,
        payment_to: paymentTo,
        payment_from: paymentFrom,
        keyword,
        catalogues: industryId,
      },
    });

    return res.data;
  }

  async getVacanciesByIds(ids: number[]): Promise<VacancyList> {
    const res = await axiosInstance.get<VacancyList>('vacancies/', {
      params: {
        ids,
      },
    });

    return res.data;
  }

  async getVacancy(id: number): Promise<Vacancy> {
    const res = await axiosInstance.get<Vacancy>(`vacancies/${id}/`);
    return res.data;
  }

  async getIndustries(): Promise<Industry[]> {
    const res = await axiosInstance.get<Industry[]>('catalogues/');
    return res.data;
  }

  async getTokens(): Promise<Tokens> {
    const res = await axiosInstance.get<Tokens>('oauth2/password/', {
      params: {
        login: process.env.NEXT_PUBLIC_API_USER_LOGIN,
        password: process.env.NEXT_PUBLIC_API_USER_PASSWORD,
        hr: 0,
        client_id: process.env.NEXT_PUBLIC_API_APP_ID,
        client_secret: process.env.NEXT_PUBLIC_API_APP_SECRET_KEY,
      },
    });

    return res.data;
  }

  async refreshTokens(refreshToken: string): Promise<Tokens> {
    const res = await axiosInstance.get<Tokens>('oauth2/refresh_token/', {
      params: {
        refresh_token: refreshToken,
        client_id: process.env.NEXT_PUBLIC_API_APP_ID,
        client_secret: process.env.NEXT_PUBLIC_API_APP_SECRET_KEY,
      },
    });

    return res.data;
  }
}

export default new SuperJobApi();
