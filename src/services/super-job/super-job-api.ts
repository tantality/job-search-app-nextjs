/* eslint-disable import/no-anonymous-default-export */
import { VacancyList } from '@/types/super-job/vacancies';
import { axiosInstance } from './axios';

class SuperJobApi {
  async getVacancies(page: number, itemsCount: number): Promise<VacancyList> {
    const res = await axiosInstance.get<VacancyList>('/vacancies', {
      params: {
        count: itemsCount,
        page,
      },
    });

    return res.data;
  }
}

export default new SuperJobApi();
